import { useState } from "react"
import authFetch from "../helpers/authFetch"
import useStorage from "./useStorage"
import { useGeneralStorage } from "../storage"

export default function useAuth() {
  const [user, setUser] = useState(null)
  const { set, del, get } = useStorage('local')
  const setIsAuth = useGeneralStorage((state) => state.setIsAuth)

  const login = async (username, password) => {
    try {
      // 1. Get Fresh Request Token
      const { isOK: isOKtoken, data: tokenData } = await authFetch('authentication/token/new');
      if (!isOKtoken || !tokenData?.request_token) {
        throw new Error('Failed to generate a temporary authentication token.');
      }

      // 2. Validate Token with User Credentials
      const { isOK: isOKauth, data: authData } = await authFetch(
        'authentication/token/validate_with_login',
        'POST',
        {
          username,
          password,
          request_token: tokenData.request_token
        }
      );
      if (!isOKauth || !authData?.request_token) {
        throw new Error('Invalid username or password.');
      }

      // 3. Create Session ID
      const { isOK: isOKsession, data: sessionData } = await authFetch(
        'authentication/session/new',
        'POST',
        {
          request_token: authData.request_token
        }
      );
      if (!isOKsession || !sessionData?.session_id) {
        throw new Error('Failed to create a user session.');
      }

      // Save session immediately
      set('session_id', sessionData.session_id);

      // 4. Fetch and Sync User Account Details
      const { isOK: isOKacc, data: accData } = await authFetch(
        `account?session_id=${sessionData.session_id}`
      );
      if (!isOKacc || !accData) {
        throw new Error('Successfully authenticated, but failed to fetch user profile details.');
      }

      // Update state and storage
      setUser(accData);
      set('account', accData);
      setIsAuth(true)

      return { success: true };

    } catch (error) {
      // Log the error for internal tracking/debugging
      console.error('TMDB Login Authentication Error:', error.message);

      // Return structured failure information to your UI component
      return {
        success: false,
        message: error.message || 'An unexpected error occurred during login.'
      };
    }
  };

  const logout = async () => {
    try {
      const { isOK, data } = await authFetch(
        'authentication/session',
        'DELETE',
        {
          session_id: get("session_id")
        }
      );
      if (!isOK || !data?.success) {
        throw new Error('Errro while sign out.');
      }
      del('session_id')
      del('account')
      setIsAuth(false)

    } catch (error) {
      return error
    }

  }

  return {
    user,
    login,
    logout
  }

}
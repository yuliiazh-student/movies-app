import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import './../../assets/scss/login.scss'
import { toast } from "react-toastify"

export default function LoginForm(props) {
  const { login } = useAuth()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!values.username || !values.password) return false

    const loginResponse = await login(values.username, values.password)

    if (!loginResponse.success){
      toast.error(loginResponse.message)
    }
    props.onCallback(loginResponse.success)
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="username" value={values.username} onChange={changeHandler} placeholder="Username" />
      <br />
      <input type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password" />
      <br />
      <button type="submit" className="btn-yellow">Sign In</button>
    </form>
  )
}
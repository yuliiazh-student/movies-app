import { useState } from "react"
import useAuth from "../hooks/useAuth"

export default function LoginPage(){
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const { login } = useAuth()

  const changeHandler = (e) => {
    const target = e.target
    setValues({...values, [target.name]: target.value})
  }


  const submitHandler = (e) => {
    e.preventDefault()
    login(values.username, values.password)
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="username" value={values.username} placeholder="Username" onChange={changeHandler}/>
      <br />
      <input type="password" name="password" value={values.password} placeholder="Password" onChange={changeHandler} />
      <br />
      <button type="submit">Log In</button>
    </form>
  )
}
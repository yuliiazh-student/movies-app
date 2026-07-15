import { Link } from "react-router";

export default function NotFound(){
  return (
    <>
      <h1>Sorry, Page not found</h1>
      <p>Please return to the <Link to="/">Home</Link> page</p>
    </>
  )
}
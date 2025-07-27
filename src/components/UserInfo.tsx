import {type Info } from "../types"
import { FC } from "react"
type userInfoProp = {
    user:Info
}
const UserrInfo : React.FC<userInfoProp> = ({user}) => {
  return (
    <div>
        <h2>User Information</h2>
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserrInfo
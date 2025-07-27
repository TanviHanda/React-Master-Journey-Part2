import { type info } from "./UserTwoInfo"

type admininfo = info & {admin:string}

const AdminTwoInfo = ({username,email,age,location,admin}:admininfo) => {
  return (
    <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
    </ul>
  )
}

export default AdminTwoInfo
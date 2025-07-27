import {type AdminInformation } from "../types"

type AdminInfoProps = {
  admin: AdminInformation
}
const AdminInfo:React.FC<AdminInfoProps> = ({admin}) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>ID: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>LastLogin: {new Date(admin.lastlogin).toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo
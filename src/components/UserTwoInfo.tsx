export type info = {
    username: string,
    email:string,
    age:number,
    location:string[]
}
const UserTwoInfo = ({username,email,age,location}:info) => {
  return (
    <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
    </ul>
  )
}

export default UserTwoInfo
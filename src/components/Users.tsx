import type { FC } from "react"

type UserShape = {
    name:string,
    age:number,
    isStudent:boolean
}

// import type { ReactNode } from "react"

// interface UserShape {
//     // name:string,
//     // age:number,
//     // isStudent:boolean
//     children: ReactNode
// }
// const Users = ({name,age,isStudent}:UserShape) => {
//   return (
//     <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <h1>{isStudent}</h1>
//     </div>
//   )
// };

// export default Users

// -------------children
// const Users = ({children}:UserShape) => {
//   return (
//     <div>
//         <h1>{children}</h1>
//     </div>
//   )
// }

// export default Users

//-------------FC
const Users : FC<UserShape> = ({name,age,isStudent}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{isStudent}</h1>
    </div>
  )
}

export default Users
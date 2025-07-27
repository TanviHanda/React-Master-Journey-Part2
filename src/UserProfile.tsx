import { useState } from "react"

interface UserProfileInfo {
    name :string,
    age:number|"",
    email:string
}
const UserProfile = () => {
   const[profile,setProfile]= useState<UserProfileInfo>(
        {
            name:"",
            age:"",
            email:""
        }
    )

    const updateName = (name:string)=>{
        setProfile((prevProfile) => ({...prevProfile,name}))
    }
    const updateAge = (age:string)=>{
        setProfile(prevProfile => ({...prevProfile, age:Number(age)}))
    }
    const updateEmail = (email:string)=>{
        setProfile(prevProfile => ({...prevProfile, email}))
    } 
  return (
    <div>
        <h2>User Profile</h2>
        <input type="text" placeholder="enter your name" value={profile.name} onChange={e => updateName(e.target.value)}/>
        
        <input type="number" placeholder="enter your age" value={profile.age} onChange={e => updateAge(e.target.value)}/>

        <input type="email" placeholder="enter your email" value={profile.email} onChange={e=>updateEmail(e.target.value)}/>
        <h3>Profile summary</h3>
        <p>name : {profile.name}</p>
        <p>name : {profile.age}</p>
        <p>name : {profile.email}</p>
    </div>
  )

  
}

export default UserProfile

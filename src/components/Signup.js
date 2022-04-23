import { useState } from "react"
import { Button } from "./Button"
import { Subtitle } from "./Subtitle"


export const Signup = ({handleForm}) => {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleName = () => {

    }

    return (
        <>
            <Subtitle text="Please complete the form with your data" />
            <form className="w-[750px]" onSubmit={handleSubmit}>
                <label className="block text-xl text-[#ccc]" htmlFor="userName">Name</label>
                <input className="block text-xl p-2 w-full border border-[#ccc] rounded-[10px] mt-2 mb-4 text-[#333]" type="text" placeholder="Enter your name..." id="userName" autoFocus/>
                <label className="block text-xl text-[#ccc]" htmlFor="userLastName">Last name</label>
                <input className="block text-xl p-2 w-full border border-[#ccc] rounded-[10px] mt-2 mb-4 text-[#333]" type="text" placeholder="Enter your lastname..." id="userLastName"/>
                <label className="block text-xl text-[#ccc]" htmlFor="userEmail">Email address</label>
                <input className="block text-xl p-2 w-full border border-[#ccc] rounded-[10px] mt-2 mb-4 text-[#333]" type="email" placeholder="Enter your email address..." id="userEmail"/>
                <label className="block text-xl text-[#ccc]" htmlFor="userPassword">Password</label>
                <input className="block text-xl p-2 w-full border border-[#ccc] rounded-[10px] mt-2 mb-4 text-[#333]" type="password" placeholder="Enter your pasword..." id="userPassword"/>
                <label className="block text-xl text-[#ccc]" htmlFor="optionUser">Category</label>
                <select id="optionUser" className="block text-xl p-2 mt-2 mb-10 w-full border border-[#ccc] rounded-[10px] text-[#333]" htmlFor="userPassword">
                    <option value="" defaultValue></option>
                    <option value="professor">Professor</option>
                    <option value="student">Student</option>
                </select>
                <Button text="Sign Up"/>
            </form>
        </>
    )
}
import { useState } from "react"
import { Button } from "./Button"
import { Subtitle } from "./Subtitle"


export const Signup = ({ handleForm, saveUser }) => {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || !lastname || !email || !password) {
            setError(true)
            return
        }

        console.log(name, lastname, email, password)
        const newUser = {name, lastname, email, password}
        saveUser(newUser)
        handleForm()
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastname(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    return (
        <>
            <Subtitle text="Please complete the form with your data" />
            {
                error && <span className="block my-4 p-4 text-red-600 text-center text-xl animate-bounce font-bold">Please complete all fields!</span>
            }
            <form className="w-[750px]">
                <label className="block text-xl text-[#ccc] select-none" htmlFor="userName">Name</label>
                <input
                    className="block text-xl p-2 w-full border border-[#ccc] rounded- mt-2 mb-4 text-[#333]"
                    type="text"
                    placeholder="Enter your name..."
                    id="userName"
                    autoFocus
                    required
                    onChange={handleName}
                />
                <label className="block text-xl text-[#ccc] select-none" htmlFor="userLastName">Last name</label>
                <input
                    className="block text-xl p-2 w-full border border-[#ccc] rounded- mt-2 mb-4 text-[#333]"
                    type="text"
                    placeholder="Enter your lastname..."
                    id="userLastName"
                    required
                    onChange={handleLastName}
                />
                <label className="block text-xl text-[#ccc] select-none" htmlFor="userEmail">Email address</label>
                <input
                    className="block text-xl p-2 w-full border border-[#ccc] rounded- mt-2 mb-4 text-[#333]"
                    type="email"
                    placeholder="Enter your email address..."
                    id="userEmail"
                    required
                    onChange={handleEmail}
                />
                <label className="block text-xl text-[#ccc] select-none" htmlFor="userPassword">Password</label>
                <input
                    className="block text-xl p-2 w-full border border-[#ccc] rounded- mt-2 mb-8 text-[#333]"
                    type="password"
                    placeholder="Enter your password..."
                    id="userPassword"
                    required
                    onChange={handlePassword}
                />
                <Button
                    text="Sign Up"
                    onClick={handleSubmit}
                />
            </form>
        </>
    )
}

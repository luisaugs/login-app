import { useState } from "react"
import { Button } from "./Button"
import { Subtitle } from "./Subtitle"
import { UserLogged } from "./UserLogged"


export const Login = ({ handleForm }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('')
    const [error, setError] = useState('')
    const [userIsLogged, setUserIslogged] = useState(false)


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleUserType = (e) => {
        setUserType(e.target.value)
    }

    const logUser = (e, email, password, userSelected) => {

        e.preventDefault()

        const userArray = JSON.parse(localStorage.getItem('users'))
        const ver = userArray.find(user => user.email === email)
        if (!ver) {
            setError('User does not exist. Please, sign up.')
            return
        }

        if (ver.password !== password) {
            setError('Incorrect password.')
            return
        }

        setUserType(userSelected)

        if(!userType){
            setError('Please, select an option.')
            return
        }

        setError('')
        setUserIslogged(true)
    }

    const handleUser = () => {
        setUserIslogged(!userIsLogged)
    }

    return (
        <>
            <Subtitle text="Please complete the form with your data" />
            {
                error.length > 0 && <span className="block my-4 p-4 text-red-600 text-center text-xl animate-bounce font-bold">{error}</span>
            }

            <form className="w-[750px]">
                <label className="block text-xl text-[#ccc] select-none" htmlFor="userEmail">Email address</label>
                <input
                    className="block text-xl p-2 w-full border border-[#ccc] rounded-md mt-2 mb-4 text-[#333]"
                    type="email"
                    placeholder="Enter your email address..."
                    id="userEmail"
                    required
                    autoFocus
                    onChange={handleEmail}
                />
                <label className="block text-xl text-[#ccc] select-none" htmlFor="userPassword">Password</label>
                <input
                    className="block text-xl p-2 w-full border border-[#ccc] rounded-md mt-2 mb-4 text-[#333]"
                    type="password"
                    placeholder="Enter your pasword..."
                    id="userPassword"
                    required
                    onChange={handlePassword}
                />
                <label className="block text-xl text-[#ccc] select-none" htmlFor="optionUser">Category</label>
                <select
                    id="optionUser"
                    className="block text-xl p-2 mt-2 mb-5 w-full border border-[#ccc] rounded-md text-[#333]"
                    onChange={handleUserType}
                >
                    <option value="" hidden>Select option</option>
                    <option value="professor">Professor</option>
                    <option value="student">Student</option>
                </select>
                <span className="w-fit ml-auto mr-0 block cursor-pointer text-right italic text-[#aaa] hover:text-[#222]" onClick={handleForm}>Sing up</span>
                <Button
                    text="Login"
                    onClick={(e) => logUser(e, email, password, userType)}

                />
            </form>

            {
                userIsLogged &&
                <UserLogged
                    handleUser={handleUser}
                    email={email}
                    selection={userType}
                />
            }
        </>
    )
}

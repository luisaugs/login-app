import { Button } from "./Button"
import { Subtitle } from "./Subtitle"


export const Login = ({handleForm}) => {
    return (
        <>
            <Subtitle text="Please complete the form with your data" />
            <form className="w-[750px]">
                <label className="block text-xl text-[#ccc]" htmlFor="userEmail">Email address</label>
                <input className="block text-xl p-2 w-full border border-[#ccc] rounded-[10px] mt-2 mb-4 text-[#333]" type="email" placeholder="Enter your email address..." id="userEmail" required autoFocus/>
                <label className="block text-xl text-[#ccc]" htmlFor="userPassword">Password</label>
                <input className="block text-xl p-2 w-full border border-[#ccc] rounded-[10px] mt-2 mb-4 text-[#333]" type="password" placeholder="Enter your pasword..." id="userPassword" required/>
                <label className="block text-xl text-[#ccc]" htmlFor="optionUser">Category</label>
                <select id="optionUser" className="block text-xl p-2 mt-2 mb-5 w-full border border-[#ccc] rounded-[10px] text-[#333]" htmlFor="userPassword">
                    <option value="" defaultValue></option>
                    <option value="professor">Professor</option>
                    <option value="student">Student</option>
                </select>
                <span className="block cursor-pointer text-right italic text-[#aaa] hover:text-[#222]" onClick={handleForm}>Sing up</span>
                <Button text="Login"/>
            </form>
        </>
    )
}

import { Button } from "./Button"
import { Subtitle } from './Subtitle'

export const UserLogged = ({ email = 'email', selection = 'Default', handleUser }) => {
    return (
        <div
            className="flex justify-center items-center bg-[#2148C0] h-screen w-screen absolute top-0 left-0"
        >
            <div
                className="p-10 bg-white rounded-lg flex flex-col justify-center items-center max-w-lg"
            >
                <Subtitle text="The user is logged in"/>
                <p
                    className="my-10 p-4 text-2xl"
                >
                    The user email is: <span className="text-green-600 italic">{email}</span>
                </p>
                <p
                    className="my-10 p-4 text-2xl"
                >
                    The user selection is: <span className="text-green-600 italic">{selection}</span>
                </p>
                <Button
                    text="Logout"
                    onClick={handleUser}
                />
            </div>
        </div>
    )
}

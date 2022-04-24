import { Button } from "./Button"

export const UserLogged = ({ email = 'email', selection = 'Default', handleUser }) => {
    return (
        <div
            className="flex justify-center items-center bg-slate-700 h-screen w-screen absolute top-0 left-0"
        >
            <div
                className="p-10 w-1/2 h-1/2 bg-white rounded-lg flex flex-col justify-center items-center"
            >
                <p
                    className="my-10 p-4"
                >
                    The user email is: <span>{email}</span>
                </p>
                <p
                    className="my-10 p-4"
                >
                    The user selection is: <span>{selection}</span>
                </p>
                <Button
                    text="Logout"
                    onClick={handleUser}
                />
            </div>
        </div>
    )
}

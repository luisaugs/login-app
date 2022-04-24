import { useState } from 'react'
import { Login } from './Login'
import { Signup } from './Signup'

const INITIAL_USER = [
    {
        name: 'Luis',
        lastname: 'Augsburger',
        email: 'test@test.com',
        password: '1234',
        userType: 'student'
    }
]

export const Section = () => {

    const [showLogin, setshowLogin] = useState(true)
    const [userRegistered, setUserRegistered] = useState(INITIAL_USER)


    const handleForm = () => {
        setshowLogin(!showLogin)
    }

    return (
        <section className="mx-auto w-[927px] bg-white rounded-[10px] shadow-lg px-20 py-20">
            {
                showLogin ? <Login handleForm={handleForm} /> : <Signup handleForm={handleForm} />
            }
        </section>
    )
}

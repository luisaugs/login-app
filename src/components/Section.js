import { useState, useEffect } from 'react'
import { Login } from './Login'
import { Signup } from './Signup'


const INITIAL_USER = [
    {
        name: 'Luis',
        lastname: 'Augsburger',
        email: 'test@test.com',
        password: '1234',
    }
]

export const Section = () => {

    const [showLogin, setshowLogin] = useState(true)
    const [addUser, setAddUser] = useState(INITIAL_USER)


    const saveUser = (user) => {
        setAddUser(old => [...old, user])
    }


    const handleForm = () => {
        setshowLogin(!showLogin)
    }

    useEffect(() => {
        if (localStorage.getItem('users')){
            setAddUser(JSON.parse(localStorage.getItem('users')))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(addUser))
    }, [addUser])

    return (
        <section className="mx-auto px-20 py-20 w-[927px] bg-white rounded-[10px] shadow-lg">
            {
                showLogin ? <Login handleForm={handleForm} /> : <Signup handleForm={handleForm} saveUser={saveUser} />
            }
        </section>
    )
}

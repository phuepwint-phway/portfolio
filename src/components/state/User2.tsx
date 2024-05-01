import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User2 = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogIn = () => {
        setUser({
            name: 'Vishwas',
            email: 'vishwas@example.com'
        })
    }
    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
            <br /><br /><br />
        </div>
    )
}

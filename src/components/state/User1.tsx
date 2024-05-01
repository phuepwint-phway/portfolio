import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User1 = () => {
    const [user, setUser] = useState<AuthUser | null>(null) //important ***

    const handleLogIn = () => {
        setUser({
            name: 'Vishwas',
            email: 'vishwas@example.com'
        })
    }
    const handleLogOut = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogIn}>Logged In</button>
            <button onClick={handleLogOut}>Logged Out</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
            <br /><br /><br />
        </div>
    )
}

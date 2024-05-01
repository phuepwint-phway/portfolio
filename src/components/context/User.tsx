import { useContext } from 'react'
import { UserContext } from './UserContext';

export const User = () => {

    const userContext = useContext(UserContext)

    const handleLogin = () => {
        if(userContext) {
            userContext.setUser({
                name: 'Vishwas',
                email: 'vishwas@example.com'
            })
        }
    }
    const handleLogout = () => {
        if(userContext) {
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
            <br /><br /><br />
        </div>
    )
}
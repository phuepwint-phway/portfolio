import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text, padding: theme.primary.padding }}>
                Theme context 
            </div>
            <br /><br /><br />
            <div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text, padding: theme.secondary.padding }}>
                Theme context Pro 
            </div>
            <br /><br /><br />
        </div> 
    )
}

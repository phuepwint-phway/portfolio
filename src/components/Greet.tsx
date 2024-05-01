type GreetProps = {
    name: string
    messageCount?: number // important
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props // important ***
    return (
        <div>
            <h1>{props.name}</h1> 
            <h2>{props.isLoggedIn ? `${props.messageCount}` : `10` }</h2>
            <br /><br /><br />
        </div>
    )
}

// string | number | boolean

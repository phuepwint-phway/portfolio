type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>{props.name}</h1> 
            <h2>{ props.isLoggedIn ? `${props.messageCount}` : `10` }</h2>
        </div>
    )
}

// string | number | boolean

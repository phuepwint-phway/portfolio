type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    return (
        // <div style={{ border: '1px solid black', padding: '1 rem' }}>
        //     Text content goes here
        // </div>
        <div>
            <p  style={props.styles}>
                Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here Text content goes here 
            </p>
            <br /><br /><br />
        </div>
    )
}
type HeadingProps = {
    children: string
}

export const Heading = (props: HeadingProps) => {
    return (
        <div>
            <h2>{props.children}</h2>
            <br /><br /><br />
        </div>
    )
}

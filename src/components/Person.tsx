type PersonProps = {
    detail: {
        title: string
        description: string
    }
}

export const Person = (props: PersonProps) => {
    return (
        <div>
            <h4>{props.detail.title}</h4>
            <p>{props.detail.description}</p>
        </div>
    )
}

// Object

import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
    return (
        <div>
            <h4>{props.detail.title}</h4>
            <p>{props.detail.description}</p>
            <br /><br /><br />
        </div>
    )
}

// Object

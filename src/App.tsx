import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Skills } from './components/Skills';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {

    const technicalSkills = [
        {
            language: 'Ruby',
            framework: 'Ruby on Rails'
        },
        {
            language: 'PHP',
            framework: 'Laraval'
        },
        {
            language: 'Javascript',
            framework: 'React'
        }
    ]
 

    const personDetail = {
        title: 'About Me',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }

    return (
        <div className='App'>
            <Greet name='Phue Pwint Phway' messageCount={27} isLoggedIn={true} />
            <Person detail={personDetail} />
            <Skills skills={technicalSkills} />
            <Status status='loading' />
            {/* <Heading children='Placeholder text' /> */}
            <Heading>Placeholder Text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicpario!</Heading>
            </Oscar>
            <Button handleClick={(event, id) => {
                console.log('Button clicked', event, id)
            }} />
            <Input value='' handleChange={event => console.log(event)}  />
            {/* the above input field is not typing, Why! */}
            <Container styles={{ border: '2px solid black', padding: '4rem 2rem 4rem 2rem' }} />
        </div>
    )
}

export default App;

//Typing Props

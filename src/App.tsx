import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Skills } from './components/Skills';

function App() {
    const technicalSkills = [
        {
            language: 'Ruby',
            frameWork: 'Ruby on Rails'
        },
        {
            language: 'PHP',
            frameWork: 'Laraval'
        },
        {
            language: 'Javascript',
            frameWork: 'React'
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
        </div>
    )
}

export default App;

//Typing Props

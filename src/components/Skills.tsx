import { Skill } from './Person.types'

type TechnicalSkillsProps = {
    skills: Skill[]
}

export const Skills = (props: TechnicalSkillsProps) => {
    return (
        <div>
            <h2>Skills</h2>
            <h4>TechnicalSkills</h4>
            {props.skills.map((skill) => {
                return (
                    <div key={skill.language} className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>
                                    {skill.language}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>
                                    {skill.framework}
                                </li>
                            </ul>
                        </div>                        
                    </div>                    
                )
            })}           
        </div>
    )
}

// Arrays

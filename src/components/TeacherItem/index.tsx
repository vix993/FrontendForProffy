import React from 'react';

import whatsppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/52217652?s=460&u=5be4bb5ad9000308155c523c6334f13cc141e842&v=4" alt="Victor Nascimento"/>
                        <div>
                            <strong>Victor Nascimento</strong>
                            <span>Music</span>
                        </div>
                    </header>

                    <p>
                    My name is Victor, I'm Brazilian and I lived in the UK most of my life.
                    <br/><br/>
                    I am currently a Software Engineering student at Ecole 42 Sao Paulo. Generally, I love making things and about a year ago I wrote a 'Hello World' and began my journey as a developer. I like to define myself as a creative person, with a very deep connection to the arts and am motivated to provide solutions for creators.
                    <br/><br/>
                    I am also an actor, musician, performer and poet, publishing my content under Vic Birth.
                    </p>
                    <footer>
                        <p>
                            Price/hour
                            <strong>$20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsppIcon} alt="whatsapp" />
                            Get in touch!
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;
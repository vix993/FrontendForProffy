import React from 'react';

import whatsppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: Number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection() {
        api.post('connections', { user_id: teacher.id })
    }
    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name}/>
                        <div>
                            <strong> {teacher.name} </strong>
                            <span> {teacher.subject} </span>
                        </div>
                    </header>

                    <p>
                        {teacher.bio}
                    </p>
                    <footer>
                        <p>
                            Price/hour
                            <strong>${teacher.cost},00</strong>
                        </p>
                        <a
                         onClick={createNewConnection}
                         target="_blank"
                         rel="noopener noreferrer"
                         href={`https://wa.me/${teacher.whatsapp}`}
                        >
                            <img src={whatsppIcon} alt="whatsapp" />
                            Get in touch!
                        </a>
                    </footer>
                </article>
    );
}

export default TeacherItem;
import React, { useState, FormEvent } from 'react';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        setTeachers(response.data);

        console.log(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffys.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                     name="subject"
                     label="Subject"
                     value={subject}
                     onChange={event => { setSubject(event.target.value) }}
                     options={[
                        { value: 'Painting', label: 'Painting' },
                        { value: 'Physics', label: 'Physics' },
                        { value: 'Biology', label: 'Biology' },
                        { value: 'Math', label: 'Math' },
                        { value: 'Programming', label: 'Programming' },
                        { value: 'Music', label: 'Music' },
                        { value: 'Chemistry', label: 'Chemistry' },
                        { value: 'English', label: 'English' },
                        { value: 'Geography', label: 'Geography' },
                        { value: 'Science', label: 'Science' },
                        { value: 'History', label: 'History' },
                        { value: 'Portuguese', label: 'Portuguese' },
                    ]}
                    />
                    <Select
                     name="week_day"
                     label="Week Day"
                     value={week_day}
                     onChange={event => { setWeekDay(event.target.value) }}
                     options={[
                        { value: '0', label: 'Sunday' },
                        { value: '1', label: 'Monday' },
                        { value: '2', label: 'Tuesday' },
                        { value: '3', label: 'Wednesday' },
                        { value: '4', label: 'Thursday' },
                        { value: '5', label: 'Friday' },
                        { value: '6', label: 'Saturday' },
                    ]}
                    />
                    <Input
                     type="time"
                     name="time"
                     label="Time"
                     value={time}
                     onChange={event => {
                         setTime(event.target.value)
                        }}
                    />

                    <button type="submit">
                        Search
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    );
}

export default TeacherList;
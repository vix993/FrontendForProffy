import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffys.">
                <form id="search-teachers">
                    <Select
                     name="subject"
                     label="Subject"
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
                    <Input type="time" name="time" label="Time" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;
import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffys.">
                <form id="search-teachers">
                    <Input name="subject" label="Subject" />
                    <Input name="week_day" label="Week Day" />
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
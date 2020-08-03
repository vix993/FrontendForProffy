import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffys.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Weekday</label>
                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time" />
                    </div>
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
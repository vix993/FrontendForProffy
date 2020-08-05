import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader
         title="Thank you for sharing your skills."
         description="Step One: Fill in the onboarding form."
        />
        <main>
            <fieldset>
                <legend>Your Information</legend>
                <Input name="name" label="Full Name" />
                <Input name="avatar" label="Profile Picture" />
                <Input name="whatsapp" label="Whatsapp" />
                <Textarea name="bio" label="Bio" />
            </fieldset>

            <fieldset>
                <legend>About Your Class</legend>
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
                <Input name="cost" label="Your classes hourly cost" />
            </fieldset>

            <fieldset>
                <legend>
                    Availability
                    <button type="button">
                        + Add Availability
                    </button>
                </legend>
                <div className="schedule-item">
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
                    <Input name="from" label="From" type="time" />
                    <Input name="to" label="Until" type="time" />
                </div>
            </fieldset>
            <footer>
                <p>
                    <img src={warningIcon} alt="Important Warning"/>
                    Warning! <br />
                    Please, fill in all of the information
                </p>
                <button type="button">
                    Register
                </button>
            </footer>
        </main>
    </div>
    );
}

export default TeacherForm;
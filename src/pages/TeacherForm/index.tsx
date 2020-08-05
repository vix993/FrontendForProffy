import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

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
            </fieldset>

            <fieldset>
                <legend>About Your Class</legend>
                <Input name="subject" label="Subject" />
                <Input name="cost" label="Your classes hourly cost" />
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
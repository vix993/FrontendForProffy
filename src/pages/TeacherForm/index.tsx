import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(scheduleItemPos: Number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === scheduleItemPos) {
                return {
                    ...scheduleItem,
                    [field]: value
                }
            }
            return scheduleItem;
        })
        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();

        api.post('classes', {
            name,
            avatar: profile,
            whatsapp,
            bio,
            subject,
            cost: Number(cost), 
            schedule: scheduleItems
        }).then(() => {
            alert('Succesful Registration!');

            history.push('/');
        }).catch(() => {
            alert('Unsuccesful Registration!');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
        <PageHeader
         title="Thank you for sharing your skills."
         description="Step One: Fill in the onboarding form."
        />
        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Your Information</legend>
                    <Input
                    name="name"
                    label="Full Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    />

                    <Input
                    name="avatar"
                    label="Profile Picture"
                    value={profile}
                    onChange={(event) => {
                        setProfile(event.target.value);
                    }}
                    />

                    <Input
                    name="whatsapp"
                    label="Whatsapp"
                    value={whatsapp}
                    onChange={(event) => {
                        setWhatsapp(event.target.value);
                    }}
                    />

                    <Textarea
                    name="bio"
                    label="Bio"
                    value={bio}
                    onChange={(event) => {
                        setBio(event.target.value);
                    }}
                    />

                </fieldset>

                <fieldset>
                    <legend>About Your Class</legend>
                    <Select
                    name="subject"
                    label="Subject"
                    value={subject}
                    onChange={(event) => {
                        setSubject(event.target.value);
                    }}
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
                    <Input
                     name="cost"
                     label="Your classes hourly cost"
                     value={cost}
                     onChange={(event) => {
                        setCost(event.target.value);
                    }}
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        Availability
                        <button type="button" onClick={addNewScheduleItem}>
                            + Add Availability
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                name="week_day"
                                label="Week Day"
                                value={scheduleItem.week_day}
                                onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
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
                                 name="from"
                                 label="From"
                                 value={scheduleItem.from}
                                 type="time"
                                 onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                                />
                                <Input 
                                 name="to"
                                 label="Until"
                                 value={scheduleItem.to}
                                 type="time"
                                 onChange={event => setScheduleItemValue(index, 'to', event.target.value)}
                                />
                            </div>
                        );
                    })}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Important Warning"/>
                        Warning! <br />
                        Please, fill in all of the information
                    </p>
                    <button type="submit">
                        Register
                    </button>
                </footer>
            </form>
        </main>
    </div>
    );
}

export default TeacherForm;
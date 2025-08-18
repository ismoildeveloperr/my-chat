import React from "react";
import { CreateField, Input, Textarea } from "../Common/FormsControls/FormControls";
import { reduxForm } from "redux-form";

const required = value => (value ? undefined : "Field is required");

const ProfileDataForm = ({ handleSubmit, profile }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button type="submit">Save</button>
            </div>
            <div><b>Full name:</b> {CreateField("Full name", "fullName", [required], Input)}</div>
            <div><b>Looking for a job:</b> {CreateField("", "lookingForAJob", [], Input, { type: "checkbox" })}</div>
            <div><b>My professional skills:</b> {CreateField("My professional skills", "lookingForAJobDescription", [], Textarea)}</div>
            <div><b>About me:</b> {CreateField("About me", "aboutMe", [required], Textarea)}</div>
            <div><b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => (
                    <div key={key}>
                        <b>{key}:</b> {CreateField(key, "contacts." + key, [], Input)}
                    </div>
                ))}
            </div>
        </form>
    );
};

export default reduxForm({ form: 'edit-profile' })(ProfileDataForm);

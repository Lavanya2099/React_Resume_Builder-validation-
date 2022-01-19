import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import JSONHTTP from '../axiosConfig';
import './Style.css'
// import { IconName} from './bootstrap-icons'
import { ArrowRight, } from 'react-bootstrap-icons';

function EducationDetails(props) {
    const [educationDetails, seteducationDetails] = useState({
        college: "",
        school:"",
        qualification: "",
        description: ""
    })
    const [collegeError, setcollegeError] = useState("")
    const validateCollege = () => {
        if (educationDetails.college) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(educationDetails.college)) {
                setcollegeError("");
                return true;
            }
            else {
                setcollegeError("enter valid name");
            }
        }
        else {
            setcollegeError("enter name");
        }
        return false;
    };

    const [schoolError, setschoolError] = useState("")
    const validateSchool = () => {
        if (educationDetails.school) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(educationDetails.school)) {
                setschoolError("");
                return true;
            }
            else {
                setschoolError("enter valid name");
            }
        }
        else {
            setschoolError("enter name");
        }
        return false;
    };

    const [qualificationError, setqualificationError] = useState("")
    const validateQualification = () => {
        if (educationDetails.qualification) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(educationDetails.qualification)) {
                setqualificationError("");
                return true;
            }
            else {
                setqualificationError("enter valid name");
            }
        }
        else {
            setqualificationError("enter name");
        }
        return false;
    };

    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (educationDetails.description) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(educationDetails.description)) {
                setdescError("");
                return true;
            }
            else {
                setdescError("enter valid name");
            }
        }
        else {
            setdescError("enter name");
        }
        return false;
    };

    let updateUserData = (event) => {
        event.preventDefault();
        seteducationDetails({
            ...educationDetails,
            [event.target.name]: event.target.value,
        })
    }


    let navToPerson = () => {
        props.history.push('/')
    }
    let navToProjects = (event) => {
        event.preventDefault();
        validateCollege();
        validateQualification();
        validateSchool();
        validationDescription();
        if (validateCollege() && validationDescription()&& validateQualification()&& validateSchool()) {
            props.history.push('/projectDeveloped')
        }
    }
    return (
        <div>
            <h1>Education Details</h1>
            <hr />
            <Form>
                <div className="row">
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="College University"
                                name='college'
                                value={educationDetails.college}
                                onChange={(event) => { updateUserData(event) }}
                            />
                            {collegeError && <div className="errMsg">{collegeError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="date" placeholder="dd-mm-yyyy" />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="date" placeholder="dd-mm-yyyy" />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Qualification"
                            name='qualification'
                            value={educationDetails.qualification}
                            onChange={(event) => { updateUserData(event) }}
                        />
                        {qualificationError && <div className="errMsg">{qualificationError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-8">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description"
                              name='description'
                              value={educationDetails.description}
                              onChange={(event) => { updateUserData(event) }}
                          />
                          {descError && <div className="errMsg">{descError}</div>}
                        </Form.Group>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="School" 
                            name='school'
                            value={educationDetails.school}
                            onChange={(event) => { updateUserData(event) }}
                        />
                        {schoolError && <div className="errMsg">{schoolError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="date" placeholder="dd-mm-yyyy" />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="date" placeholder="dd-mm-yyyy" />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Qualification"
                            name='qualification'
                            value={educationDetails.qualification}
                            onChange={(event) => { updateUserData(event) }}
                        />
                        {qualificationError && <div className="errMsg">{qualificationError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-8">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description" 
                             name='description'
                             value={educationDetails.description}
                             onChange={(event) => { updateUserData(event) }}
                         />
                         {descError && <div className="errMsg">{descError}</div>}
                        </Form.Group>
                    </div>
                </div>
                <div className='back'>
                    <button type="button" className="btn btn-primary" onClick={navToPerson}>Back</button>
                    <button type="button" className="btn btn-primary" onClick={navToProjects}>Next<ArrowRight /></button>
                </div>
            </Form>
        </div>
    )
}

export default withRouter(EducationDetails)

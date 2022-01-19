import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { ArrowRight,  } from 'react-bootstrap-icons';

function ExperienceDetails(props) {
    const [experience, setexperience] = useState({
        institution:"",
        position:"",
        description:""
    })

    const [institutionError, setinstitutionError] = useState("")
    const validationinstitution = () => {
        if (experience.institution) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(experience.institution)) {
                setinstitutionError("");
                return true;
            }
            else {
                setinstitutionError("enter valid name");
            }
        }
        else {
            setinstitutionError("enter name");
        }
        return false;
    };

    const [positionError, setpositionError] = useState("")
    const validationPosition = () => {
        if (experience.position) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(experience.position)) {
                setpositionError("");
                return true;
            }
            else {
                setpositionError("enter valid name");
            }
        }
        else {
            setpositionError("enter name");
        }
        return false;
    };

    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (experience.description) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(experience.description)) {
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
        setexperience({
            ...experience,
            [event.target.name]: event.target.value,
        })
    }


    let navToExperience=()=>{
        props.history.push('/projectDeveloped')
    }
    let navToExtra=(event)=>{
        validationinstitution();
        validationPosition();
        validationDescription();
        if(validationinstitution()&&
        validationPosition()&&
        validationDescription()){
        props.history.push('/extraDetails')
        }
    }
    return (
        <div>
            <h1>Experience details</h1>
            <hr />
            <Form>
                <div className="row">
                    <h2>Experience 1</h2>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Institution/Organization" 
                           name='institution'
                           value={experience.institution}
                           onChange={(event) => { updateUserData(event) }}
                       />
                       {institutionError && <div className="errMsg">{institutionError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Position" 
                           name='position'
                           value={experience.position}
                           onChange={(event) => { updateUserData(event) }}
                       />
                       {positionError && <div className="errMsg">{positionError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="number" placeholder="Duration" />
                        </Form.Group>
                    </div>
                    <div class="col-md-12">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description" 
                             name='description'
                             value={experience.description}
                             onChange={(event) => { updateUserData(event) }}
                         />
                         {descError && <div className="errMsg">{descError}</div>}
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <h2>Experience 2</h2>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Institution/Organization" />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Position" />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="number" placeholder="Duration" />
                        </Form.Group>
                    </div>
                    <div class="col-md-12">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description" />
                        </Form.Group>
                    </div>
                </div>
                <div className='back'>
                        <button type="button" className="btn btn-primary" onClick={navToExperience}>Back</button>
                        <button type="button" className="btn btn-primary" onClick={navToExtra}>Next<ArrowRight /></button>
                    </div>
            </Form>
        </div>
    )
}

export default withRouter(ExperienceDetails)

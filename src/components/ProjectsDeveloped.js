import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { ArrowRight, } from 'react-bootstrap-icons';
import { withRouter } from 'react-router-dom';


function ProjectsDeveloped(props) {
    const [projects, setprojects] = useState({
        title:"",
        link:"",
        description:""
    })
    const [titleError, settitleError] = useState("")
    const validationTitle = () => {
        if (projects.title) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(projects.title)) {
                settitleError("");
                return true;
            }
            else {
                settitleError("enter valid name");
            }
        }
        else {
            settitleError("enter name");
        }
        return false;
    };

    const [linkError, setlinkError] = useState("")
    const validationLink = () => {
        if (projects.link) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(projects.link)) {
                setlinkError("");
                return true;
            }
            else {
                setlinkError("enter valid name");
            }
        }
        else {
            setlinkError("enter name");
        }
        return false;
    };

    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (projects.description) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(projects.description)) {
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
        setprojects({
            ...projects,
            [event.target.name]: event.target.value,
        })
    }


    
    let navToEducation=()=>{
        props.history.push('/educationDetails')
    }
    let navToExperience=(event)=>{
        event.preventDefault();
        validationDescription();
        validationLink();
        validationTitle();
        if(validationTitle()&& validationLink()&& validationDescription()){
            props.history.push('/experienceDetails')
        }
        
    }
    return (
        <div>
             <h1>Project Details</h1>
            <hr />
            <Form>
                <div className="row">
                    <h2>Project 1</h2>
                    <div class="col-md-12">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Title" 
                            name='title'
                            value={projects.title}
                            onChange={(event) => { updateUserData(event) }}
                        />
                        {titleError && <div className="errMsg">{titleError}</div>}
                        </Form.Group>
                        </div>
                        <div class="col-md-12">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Link" 
                           name='link'
                           value={projects.link}
                           onChange={(event) => { updateUserData(event) }}
                       />
                       {linkError && <div className="errMsg">{linkError}</div>}
                        </Form.Group>
                        </div>
                        <div class="col-md-12">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description" 
                           name='description'
                           value={projects.description}
                           onChange={(event) => { updateUserData(event) }}
                       />
                       {descError && <div className="errMsg">{descError}</div>}
                        </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                    <h2>Project 2</h2>
                    <div class="col-md-12">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>
                        </div>
                        <div class="col-md-12">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Link" />
                        </Form.Group>
                        </div>
                        <div class="col-md-12">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description" />
                        </Form.Group>
                        </div>
                        <div className='back'>
                        <button type="button" className="btn btn-primary" onClick={navToEducation}>Back</button>
                        <button type="button" className="btn btn-primary" onClick={navToExperience} >Next<ArrowRight /></button>
                    </div>
                    </div>
            </Form>
        </div>
    )
}

export default withRouter(ProjectsDeveloped)

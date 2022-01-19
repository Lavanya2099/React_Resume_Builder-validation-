import React from 'react'
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { ArrowRight,  } from 'react-bootstrap-icons';

function ExtraDetails(props) {
    let navToExperience=()=>{
        props.history.push("/experienceDetails")
    }
    return (
        <div>
        <h1>Extra Details</h1>
        <hr />
        <Form>
            <div className="row">
                <h2>Skills/Languages</h2>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 1" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 2" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 3" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 4" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 5" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 6" />
                    </Form.Group>
                </div>
                </div>
                <div className="row">
                <h2>Interest</h2>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 1" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 2" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 3" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 4" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 5" />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 6" />
                    </Form.Group>
                </div>
                </div>
                <hr/>
                <div className='back'>
                        <button type="button" className="btn btn-primary" onClick={navToExperience}>Back</button>
                        <button type="button" className="btn btn-primary" disabled>Next<ArrowRight /></button>
                    </div>

            </Form>
        </div>
    )
}

export default withRouter(ExtraDetails)

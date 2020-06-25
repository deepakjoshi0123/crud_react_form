import React from 'react';
import  '../RenderData/renderdata.css'
import { Button, Form, Input, Label, FormGroup, FormFeedback  } from "reactstrap";

const FormUi = ( props ) => {
   return(
    <Form>
    <FormGroup>
      <Label for="fullname">Full Name</Label>
      <Input 
        id="fullname"
        value={props.data.fullname}
        invalid={props.errors.fullname ? true : false}
        name="fullname"
        onChange={props.handleChange}
      />
      <FormFeedback>{props.errors.fullname}</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label for="email">Email</Label>
      <Input
        id="email"
        value={props.data.email}
        invalid={props.errors.email ? true : false}
        name="email"
        onChange={props.handleChange}
      />
      <FormFeedback>{props.errors.email}</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label for="text">ZipCode</Label>
      <Input
        id="zipcode"
        value={props.data.zipcode}
        type="number"
        name="zipcode"
        invalid={props.errors.zipcode ? true : false}
        onChange={props.handleChange}
      />
      <FormFeedback>{props.errors.zipcode}</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label for="message">Message</Label>
      <Input
        id="message"
        value={props.data.message}
        type="textarea"
        name="message"
        invalid={props.errors.message ? true : false}
        onChange={props.handleChange}
      />
      <FormFeedback>{props.errors.message}</FormFeedback>
    </FormGroup>


    <FormGroup>
    <Label for="gender">gender</Label>  
   
      <Input 
        id="gender"
        value="male"
        type="radio"
        name="gender"
        invalid={props.errors.gender ? true : false}
        checked={props.data.gender === "male"} 
        onChange={props.handleGenderChange}
      />
      <Label for="gender">female</Label>  
      <Input
        id="gender"
        value="female"
        type="radio"
        name="gender"
        checked={props.data.gender === "female"}
        invalid={props.errors.gender ? true : false}
        onChange={props.handleGenderChange}
      />
      <FormFeedback>{props.errors.gender}</FormFeedback>
    </FormGroup>

    <FormGroup class="dropdown">
      <Label for="country">Select Country</Label>
      <select class="form-control"
        type="select"
        name="country"
        id="country"
        value={props.data.country}
        onChange={props.handleChange}
      >
        <option>India</option>
        <option>Germany</option>
      </select>
    </FormGroup>
    
    <FormGroup check>
    <Label check>
    <div class="input-group mb-6">
    <div class="input-group-prepend">
    <div class="input-group-text">
      <Input 
      name="check"
      value ={props.check}
      invalid={props.errors.check ? true : false}
      onChange={props.handlecheck}
      type="checkbox" />{' '} 
       Check me out
      </div>
      </div>
      </div>
    
    </Label>
    <FormFeedback>{props.errors.check}</FormFeedback>
    </FormGroup>
    <Button onClick={props.editCancel}>
      CANCEL
    </Button> 
    <Button
      onClick={props.acceptPostUserHandler}
    >
      DONE 
    </Button>
    </Form>
   )

};

export default FormUi;
import React, { Component } from "react";
import RenderForm from './RenderData/renderdata'
import { Button, Form, Input, Label, FormGroup, FormFeedback  } from "reactstrap";
import { isEmail } from "validator";

let UserList = []

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    userList :[], 
    data: {
      fullName: "",
      email: "",
      zipCode: "",
      message: "",
      country: "India",
      check: false,
      gender:"",
    },
    errors: {},
    formIsValid: false
  });

  handleChange = event => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      },
      errors: {
        ...this.state.errors,
        [event.target.name]: ""
      }
    });
  };

  handleGenderChange = ( event ) => {
   // console.log(event.target)
      this.setState({
        ...this.state,
        data:{ 
          ...this.state.data,
          [event.target.name]:event.target.value
         }
        
      } )
  }
  handlecheck = (event) =>{
    this.setState({
      ...this.state,
      data:{ 
        ...this.state.data,
        [event.target.name]:true
       }
      
    } )
  }

  validate = () => {
    console.log("inside validate")
    const { data } = this.state;
    let errors = {};

    if (data.check === false) errors.check = "please check agreement";
    if (data.fullName === "") errors.fullName = "Enter Name";
    if (!isEmail(data.email)) errors.email = "Email must be valid.";
    if (data.email === "") errors.email = "Enter Email";
    if (data.zipCode === "") errors.zipCode = "Enter ZipCode";
    if (data.message === "") errors.message = "Add Message";
    if (data.gender === "") errors.gender = "Select Gender";
    if (data.country === "") errors.country = "Select Country";
    
    console.log("see errors ", errors)
    return errors;
   
  };
  // if editing of values is accepted then valid the user form 
  acceptPostUserHandler = event => {
    event.preventDefault();
    const errors = this.validate();
    
    if (Object.keys(errors).length === 0) {
      const user = {
        fullName: this.state.data.fullName,
        email: this.state.data.email,
        zipCode: this.state.data.zipCode,
        message: this.state.data.message,
        country: this.state.data.country,
        check: this.state.data.check,
        gender:this.state.data.gender
      };
    
      UserList.push(user)

      this.setState({userList:UserList})
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors } = this.state;
    console.log("hello " , errors.fullName,errors.check)
    return (
       <div> 
       
      <Form>
        <FormGroup>
          <Label for="fullName">Full Name</Label>
          <Input 
            id="fullName"
            value={data.fullName}
            invalid={errors.fullName ? true : false}
            name="fullName"
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.fullName}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            value={data.email}
            invalid={errors.email ? true : false}
            name="email"
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="text">ZipCode</Label>
          <Input
            id="zipCode"
            value={data.zipCode}
            type="text"
            name="zipCode"
            invalid={errors.zipCode ? true : false}
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.zipCode}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            id="message"
            value={data.message}
            type="textarea"
            name="message"
            invalid={errors.message ? true : false}
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.message}</FormFeedback>
        </FormGroup>

  
        <FormGroup>
        <Label for="gender">gender</Label>  
       
          <Input 
            id="gender"
            value="male"
            type="radio"
            name="gender"
            invalid={errors.gender ? true : false}
            checked={this.state.data.gender === "male"} 
            onChange={this.handleGenderChange}
          />
          <Label for="gender">female</Label>  
          <Input
            id="gender"
            value="female"
            type="radio"
            name="gender"
            checked={this.state.data.gender === "female"}
            invalid={errors.gender ? true : false}
            onChange={this.handleGenderChange}
          />
          <FormFeedback>{errors.gender}</FormFeedback>
        </FormGroup>
  
        <FormGroup class="dropdown">
          <Label for="country">Select Country</Label>
          <select class="form-control"
            type="select"
            name="country"
            id="country"
            value={data.country}
            onChange={this.handleChange}
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
          value ="checked"
          invalid={errors.check ? true : false}
          onChange={this.handlecheck}
          type="checkbox" />{' '} 
           Check me out
          </div>
          </div>
          </div>
        
        </Label>
        <FormFeedback>{errors.check}</FormFeedback>
        </FormGroup>
        <Button onClick={this.props.editCancel}>
          CANCEL
        </Button> 
        <Button
         
          onClick={this.acceptPostUserHandler}
        >
          DONE 
        </Button>
        </Form>
       <RenderForm
               showdata={this.state.userList}
              />     
      </div>
    );
  } 
}

export default Register;
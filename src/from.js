import React, { Component } from "react";
import RenderForm from './RenderData/renderdata'
import { isEmail } from "validator";
import axios from 'axios';
import Modal from './Modal/modal'
import FormUI from './formUI/formUI'

//let UserList = []
let updId ;
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  componentDidMount(){
    axios.get('http://localhost:3000/showall')
    .then(res=>{
      console.log(res.data.users)
      this.setState({userList : res.data.users })
    })
  }

  editUser = (Id)=>{
    
    updId=Id;
    axios.get('http://localhost:3000/search',{params:{id:Id}})
    .then(res=>{
      console.log("from server " , res.data.user[0])
      this.setState({data : res.data.user[0] }) 
      console.log("from state" , this.state.data) 
      
    })   
    let modal = this.state.mdopn   
    this.setState({mdopn:!modal}) 

  }

  delUser(Id){
    console.log(Id)
     axios.delete('http://localhost:3000/del',{params:{id:Id}})
     .then(res=>{
      let updusr = this.state.userList.filter(user => user.id !== Id  )
      this.setState({userList:updusr})
     })
  }

  getInitialState = () => ({
    
    mdopn:false,
    userList :[], 
    data: {
      fullname: "",
      email: "",
      zipcode: "",
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
   // console.log(this.state.mdopn)
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
    if (data.fullname === "") errors.fullname = "Enter Name";
    if (!isEmail(data.email)) errors.email = "Email must be valid.";
    if (data.email === "") errors.email = "Enter Email";
    if (data.zipcode === "") errors.zipcode = "Enter ZipCode";
    if (data.message === "") errors.message = "Add Message";
    if (data.gender === "") errors.gender = "Select Gender";
    if (data.country === "") errors.country = "Select Country";
    
    return errors;
   
  };
  modalClose=()=>{
    let md=this.state.mdopn
    this.setState({mdopn:!md})
  }

  // if editing of values is accepted then valid the user form 
 // left with only

  compare(obj){
    if(true)
      { return true; } 
    else 
       {return false; }    
}

  update = (event )  => {
    this.modalClose();
    event.preventDefault();
    const errors = this.validate();
    console.log("golbal id ",updId)
    if (Object.keys(errors).length === 0) {
      const user = {
        id:updId,
        fullname: this.state.data.fullname,
        email: this.state.data.email,
        zipcode: this.state.data.zipcode,
        message: this.state.data.message,
        country: this.state.data.country,
        check: this.state.data.check,
        gender:this.state.data.gender
      };  
     // console.log(user)
      axios.post('http://localhost:3000/update',user)
      .then( res=> {
        let resusr = this.state.userList.filter(user =>  user.id !== updId  ) //rest users
        let updusr = this.state.userList.filter(user =>  user.id === updId  ) // user to be upd
        updusr.fullname = this.state.data.fullname;
        updusr.email = this.state.data.email;
        updusr.zipcode = this.state.data.zipcode;
        updusr.message = this.state.data.message;
        updusr.country = this.state.data.country;
        updusr.check = this.state.data.check;
        updusr.gender = this.state.data.gender

        resusr.push(updusr);
       // resusr.sort(this.compare);
        this.setState({userList:resusr});
      })
      

    } else {
      this.setState({ errors });
    }
  };


  acceptPostUserHandler = (event)  => {
    event.preventDefault();
    const errors = this.validate();
    
    if (Object.keys(errors).length === 0) {
      const user = {
        fullname: this.state.data.fullname,
        email: this.state.data.email,
        zipcode: this.state.data.zipcode,
        message: this.state.data.message,
        country: this.state.data.country,
        check: this.state.data.check,
        gender:this.state.data.gender
      };
  
     // console.log(user)
      axios.post('http://localhost:3000/create',user)
      .then(res=>{
        console.log(res)
      })

    } else {
      this.setState({ errors });
    }
  };

  render() {
  
    return (
      <div> 
         {this.state.mdopn===true?<Modal 
         mdopen={this.modalClose}
         show={this.state.mdopn} 
         data={this.state.data}
         errors={this.state.errors}
         handleChange={this.handleChange}
         handleGenderChange={this.handleGenderChange}
         handlecheck={this.handlecheck}
         acceptPostUserHandler={this.update}
         />:null}
         
       <div class="container-sm">    
       <FormUI
      data={this.state.data}
      errors={this.state.errors}
      handleChange={this.handleChange}
      handleGenderChange={this.handleGenderChange}
      handlecheck={this.handlecheck}
      acceptPostUserHandler={this.acceptPostUserHandler}
      />
      <RenderForm
               showdata={this.state.userList}
               del={this.delUser}
               edit={this.editUser}
              />
      </div>
      </div>
    );
  } 
}

export default Register;
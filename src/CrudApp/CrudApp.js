import React, { Component } from 'react';
import RenderData from '../RenderData/renderdata'
import classes from './crudApp.module.css';
import Input from '../Input/Input';

class CrudApp extends Component {
    state = {
        renderForm :[] , 
        form: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validaiton:{
                    required: true
                }
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validaiton:{
                    required: true
                }
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validaiton:{
                    required: true
                }
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validaiton:{
                    required: true
                }
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validaiton:{
                    required: true
                }
            },
            password: {
                elementType: "password",
                elementConfig: {
                  type: "password",
                  placeholder: "Passowrd"
                },
                value: "",
                validaiton:{
                    required: true
                }

            },
            date: {
                elementType: "date",
                elementConfig: {
                  type: "date",
                },
                value: "",
                validaiton:{
                    required: true
                }
              },
              occupation: {
                elementType: "select",
                elementConfig: {
                  placeholder: "Occupation",
                  options: [
                    { value: "Salaried", displayValue: "Salaried" },
                    { value: "selfEmployed", displayValue: "Self Employed" },
                    { value: "Un Employed", displayValue: "Un Employed" }
                  ]
                },
                value: "Salaried",
            },
           
            selectedfruits: {
                elementType: "checkbox",
                elementConfig: {
                    type: "checkbox",  
                  placeholder: "Fruit",
                  options: [
                    { value: "Apple", displayValue: "Apple", checked: false },
                    { value: "Banana", displayValue: "Banana", checked: false },
                    { value: "Grapes", displayValue: "Grapes", checked: false }
                  ]
                },
                value: "",
                selectedCheckbox: [],
                validaiton:{
                    required: true
                }
            },
           
            gender: {
                elementType: "radio",
                elementConfig: {
                  type: "radio",  
                  placeholder: "Gender",
                  options: [
                    { value: "Male", displayValue: "Male" },
                    { value: "Female", displayValue: "Female" }
                  ]
                },
                value: "male",
                validaiton:{
                    required: true
                }
            }
        },
        formIsValid: false,
    }

    checkValidity(value, rules) {
        let isValid = true;
        console.log(rules)
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    formHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }
        this.state.renderForm.push(formData);

        //  for (let formElementIdentifier in this.state.form) {
        //     formData[formElementIdentifier] = null;
        // }

    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        console.log(updatedFormElement) 
     // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
         
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

       let form = (
       <form >
          { formElementsArray.map(formElement => (
             <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation} 
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />             
                ))}
                <button onClick={this.formHandler} > submit </button>
              
            </form>
        );    
        return (
            <div>
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
              <RenderData
              showdata={this.state.renderForm}
              />
             </div> 
        );
    }
}

export default CrudApp;



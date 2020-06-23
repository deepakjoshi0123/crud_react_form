import React from 'react';
import classes from './Input.module.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
        
            break;
            case ( 'radio' ):
                inputElement =
                  <div
                  onChange={props.changed}
                  >
                  <p>{"select your gender"}</p>
                  {props.elementConfig.options.map(option => (
                        <div onChange={props.changed}>
                             <p>{option.value} 
                          <input
                         {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} />
                          </p>  
                          </div>
                  ))}
                  
                    </div>
                    ;
                break;   
            case ( 'checkbox' ):
                    inputElement = <div
                    onChange={props.changed}
                      >
                        <p>{"select your fav fruit"}</p>
                        {props.elementConfig.options.map(option => (
                        <div> <p>{option.value} 
                          <input
                        {...props.elementConfig}
                       value={props.value}
                        onChange={props.changed} />
                          </p>  
                         </div>
                        ))}
                        </div>
                        ;
                    break;             
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};
export default input;

import React from 'react';
import MyModal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import FormUi from '../formUI/formUI'

const useStyles = makeStyles((theme) => ({
    paper: {  
      position: 'center',
      width: 1100,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      
    },
  }));

  export default function Fillings( props ) {

    const classes = useStyles();
    //pizza fillings list 
   
    return (
        <MyModal
        open={props.show}
        close={props.show}
        >
         <div  className={classes.paper}>    
        <FormUi
        data={props.data}
        errors={props.errors}
        handleChange={props.handleChange}
        handleGenderChange={props.handleGenderChange}
        handlecheck={props.handlecheck}
        acceptPostUserHandler={props.acceptPostUserHandler}
        />
        </div>
        </MyModal>

    )
};

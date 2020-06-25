import React from 'react';
import FillPizza from './FillPizza/FillPizza';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'center',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      
    },
  }));

export default function Fillings( props ) {

    const classes = useStyles();
    //pizza fillings list 
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
            return (
                <Aux key={igKey}>
                 <div className={classes.paper}>   
                <p >
                    <span>{igKey}</span>: {props.ingredients[igKey]} Rs
                </p>
                <FillPizza  
                disFil={props.fil[igKey]}
                addFil={() => props.AddFill(igKey)}/>
                </div>
                </Aux>
                );
        } );
         
    return (
        <Aux>
            {console.log(props.show)}
            <Modal
             open={props.show}
             close={props.show}
            >
                <div  className={classes.paper}>
                <h3>Want to make Your pizza more delicious</h3>
                <h3>Add More fillings :</h3>
                {ingredientSummary}
                <Button btnType="Danger" clicked = {props.closeModel}>Close</Button>
                </div>
            </Modal>            
        </Aux>
    );
};

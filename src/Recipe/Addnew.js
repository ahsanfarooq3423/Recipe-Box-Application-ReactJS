import React from 'react';
import styles from '../App.module.css';

const Addnew = (props) => {
    return (
        <div className={styles.addnew}>
            <input onChange={props.addrecipe}  type="text" placeholder="Recipe"></input>
            <br></br>
            <input onChange={props.addingredient} className={styles.textarea} type="textarea" placeholder="Ingredients"></input>
            <br></br>
            <button className={styles.greenbutton} onClick={props.submit} >Submit Recipe</button>
            <br></br>
            <button className={styles.redbutton} onClick = {props.cancel}>Cancel</button>
        </div>    
    )
}

export default Addnew;
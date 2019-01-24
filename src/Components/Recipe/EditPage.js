import React from 'react';
import styles from '../../Containers/App.module.css';

   const EditPage = (props) => {     
        return (
            <div className={styles.editpage}>
            <p>Edit Title</p>
            <input className={styles.nameedit} onChange={props.editName}
             defaultValue={props.editNameValue} type='text'></input>
            <p>Edit Ingredients</p>
            <textarea className={styles.ingedit} onChange={props.editIngredient} 
            defaultValue = {props.editIngredientValue}
            type='textarea'></textarea>
            <br></br>
            <button className={styles.btnsumbitedit} onClick={props.submit}>Submit Edit</button>
            <button className={styles.btncanceledit}>Cancel</button>
        </div>
        )
    }


export default EditPage;

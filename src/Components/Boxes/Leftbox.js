import React from 'react';
import styles from '../../Containers/App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Leftbox = (props) => {
    return  (<div className={styles.leftbox} rightboxstate = {props.rightboxstate} >
    <div><FontAwesomeIcon icon={faCoffee} size = "3x"/></div>
    <div><h2>Recipe Box Application</h2></div>
    
    <button className = {styles.greenbutton} onClick={props.addnewState} >Add a New Recipe</button>
    <br></br>
    <button className = {styles.greenbutton} onClick={props.showAllRecipesHandler}>Show All Recipies</button>
    <br></br>
    <button className={styles.redbutton} onClick={props.removeRecipeHandler} >Remove All Recipies</button>
    <br></br>
    <h3>The List {props.empty}</h3>
    {
         props.recipes.map((recipe,index) => {
           if (recipe.name === ""){
             return null;
           }
           else {
            return <span>
            <button className = {styles.yellowbutton}
             onClick={() => props.showRecipeHandler(index)}>{recipe.name}</button>
            <br></br>
          </span>
           }
        })
    }
</div>)
}

export default Leftbox;
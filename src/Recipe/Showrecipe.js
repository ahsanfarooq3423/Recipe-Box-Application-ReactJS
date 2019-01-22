import React, {Component} from 'react';
import styles from '../App.module.css';


export const EditPage = () => {
    
    return (
        <div className={styles.editpage}>
        <p>Edit Title</p>
        <input className={styles.nameedit} type='text'></input>
        <p>Edit Ingredients</p>
        <textarea className={styles.ingedit} type='textarea'></textarea>
        <br></br>
        <button className={styles.btnsumbitedit}>Submit Edit</button>
        <button className={styles.btncanceledit}>Cancel</button>
        
    </div>
    )
}

class ShowRecipe extends Component {
    

    render(props) {
        return (
            <div className={styles.recipe}>
                <div className={styles.recipepage}>
                    <h3>{this.props.name}</h3>  
                    <button className={styles.edit} onClick={this.props.edit}>Edit this Page</button>
                    <button className={styles.delete} onClick={this.props.delete}>Delete this Page</button>
                </div>
                <hr></hr>
                <h3>Ingredients:</h3>
                <p>{this.props.ing}</p>
                {this.props.children}
            </div>
        )
    }
}


export default ShowRecipe;
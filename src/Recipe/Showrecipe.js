import React, {Component} from 'react';
import styles from '../App.module.css';

class ShowRecipe extends Component {
    render(props) {
        return (
            <div className={styles.recipe}>
                <div className={styles.recipepage}>
                    <h3>{this.props.name}</h3>  
                    <button className={styles.edit}>Edit this Page</button>
                    <button className={styles.delete} onClick={this.props.delete}>Delete this Page</button>
                </div>
                <hr></hr>
                <h3>Ingredients:</h3>
                <p>{this.props.ing}</p>
               
            </div>
        )
    }
}

export default ShowRecipe;
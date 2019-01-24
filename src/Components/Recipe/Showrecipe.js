import React, {Component} from 'react';
import styles from '../../Containers/App.module.css';


export class ShowRecipe extends Component {
    
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


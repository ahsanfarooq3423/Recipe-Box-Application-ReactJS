import React from 'react';
import styles from '../../Containers/App.module.css';

const Title = () => {
    return(
      <div className={styles.rightbox}>
        <h1>This is a Recipe App</h1>
        <h2>You can record your recipe here</h2>
        <p>All your recipes are stored in your browser's local storage 
            and any changes you make will remain saved as long 
            as you continue to access this page from the same browser.</p>
        
  </div>
    )     
}

export default Title;
import React, { Component } from 'react';
import styles from './App.module.css';
import Addnew from './Recipe/Addnew.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ShowRecipe from './Recipe/Showrecipe';

const Title = () => {
      return(
        <div className={styles.rightbox}>
          <h1>This is a Recipe App</h1>
          <h2>You can record your recipe here</h2>
          <p>All your recipes are stored in your browser's local storage 
              and any changes you make will remain saved as long 
              as you continue to access this page from the same browser.</p>
          <p>Built by Ahsan Farooq</p>
    </div>
      )     
}

class App extends Component {
  state = {
    recipes : [ {name: "Burger", ingredient:"lorem ipsume"},
    {name: "Pasta", ingredient:"lorem ipsume"},
    {name: "Rice", ingredient:"lorem sddesd ipsume"}
    ],
    newrecipeName: "",
    newrecipeIngredients: "",
    rightboxstate : "title",
    render: <Title/>,
    empty: <h3></h3>
  }

  recipeNameHandler = (event) => {
    this.setState({newrecipeName : event.target.value});
  }

  ingredientHandler = (event) => {
    this.setState({newrecipeIngredients : event.target.value});
  }

  submitrecipeHandler = () => {
    if (this.state.recipes.length > 0){
      this.setState({empty: <h3></h3>})
  }
    const name = this.state.newrecipeName;
    const ing = this.state.newrecipeIngredients;
    let temp = [...this.state.recipes,{name : name , ingredient : ing }]
    this.setState({recipes: temp});
    this.setState({render: <Title/>})
  }

  addnewState = () => {
    this.setState({render: <Addnew 
                            addrecipe= {this.recipeNameHandler} 
                            addingredient={this.ingredientHandler}
                            submit = {this.submitrecipeHandler}
                            cancel = {this.titleState}/>
                            })
  }

  titleState = () => {
    this.setState({render: <Title/>})
   
  }

  removeRecipeHandler = () => {
    if (this.state.recipes.length = 1){
      this.setState({empty: <h3>is empty</h3>})
  }
    this.setState({recipes : [{name: "" , ingredient : "" }] , render:<Title/>});

  }

  showRecipeHandler = (index) => {
    this.setState({render : <ShowRecipe
       name={this.state.recipes[index].name} 
       ing={this.state.recipes[index].ingredient} />})
  }

  showAllRecipesHandler = () => {
    this.setState({render : this.state.recipes.map((recipe,index) => {
      console.log(index);
      console.log("showAllrecipe method called");
      if (recipe.name === "") {
        return null;
      }
      else {
        return <ShowRecipe name = {recipe.name}
         ing= {recipe.ingredient}
         index={index}
         delete={() => this.deleteRecipe(index)}/>
      }
    })})
  }

  deleteRecipe = (index) => {
    let recipes = [...this.state.recipes];
    recipes.splice(index,1);

    this.setState({recipes: recipes});
    recipes = [...this.state.recipes];
    this.showAllRecipesHandler();

  }


  render(props) {
    return (
      <div className={styles.App}>
        <div className={styles.leftbox} rightboxstate = {this.state.rightboxstate} >
            <div><FontAwesomeIcon icon={faCoffee} size = "3x"/></div>
            <div><h2>Recipe Box Application</h2></div>
            
            <button className = {styles.greenbutton} onClick={this.addnewState} >Add a New Recipe</button>
            <br></br>
            <button className = {styles.greenbutton} onClick={this.showAllRecipesHandler}>Show All Recipies</button>
            <br></br>
            <button className={styles.redbutton} onClick={this.removeRecipeHandler} >Remove All Recipies</button>
            <br></br>
            <h3>The List {this.state.empty}</h3>
            {
                 this.state.recipes.map((recipe,index) => {
                   if (recipe.name === ""){
                     return null;
                   }
                   else {
                    return <span>
                    <button className = {styles.yellowbutton}
                     onClick={() => this.showRecipeHandler(index)}>{recipe.name}</button>
                    <br></br>
                  </span>
                   }
                })
            }
        </div>

        <div class={styles.rootbox}>
             { this.state.render } 
        </div>
        
      </div>
    );
  }
}

export default App;

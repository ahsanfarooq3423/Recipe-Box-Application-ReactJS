import React, { Component } from 'react';
import styles from './App.module.css';
import Addnew from './Recipe/Addnew.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ShowRecipe } from './Recipe/Showrecipe';
import EditPage from './Recipe/Showrecipe';



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

class App extends Component {
  state = {
    recipes : [ {name: "Burger", ingredient:"lorem ipsume",edit : false},
    {name: "Pasta", ingredient:"lorem ipsume",edit : false},
    {name: "Rice", ingredient:"lorem sddesd ipsume",edit : false}
    ],
    newrecipeName: "",
    newrecipeIngredients: "",
    rightboxstate : "title",
    render: <Title/>,
    empty: <h3></h3>,
    editflag : true,
    singlerecipeIndex: 0,
    editRecipeName : "",
    editRecipeIngredient: ""
    
  }

  editRecipeName = (event) => {
    let value = event.target.value;
    this.setState({editRecipeName: value});
  }


  editRecipeIngredient = (event) => {
    let value = event.target.value;
    this.setState({editRecipeIngredient : value});
  }

  submitEditHandler = (index) => {
    let name =  this.state.editRecipeName;
    let ing = this.state.editRecipeIngredient;
    let recipes = [...this.state.recipes];
    recipes[index].name = name;
    recipes[index].ingredient = ing;
    recipes[index].edit = false;
    this.setState({recipes : recipes});
  }

  editPageState = (index) => {
    let recipes = [...this.state.recipes];
    recipes[index].edit = !recipes[index].edit;
    this.setState({recipes : recipes});

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
    let temp = [...this.state.recipes,{name : name , ingredient : ing , edit : false }]
    this.setState({recipes: temp});
    this.setState({rightboxstate : 'title'})
  }

  addnewState = () => {
    this.setState({rightboxstate : 'addnew'})
}

  titleState = () => {
    this.setState({render: <Title/>})
  }

  removeRecipeHandler = () => {
    if (this.state.recipes.length = 1){
      this.setState({empty: <h3>is empty</h3>})
  }
    this.setState({recipes : [{name: "" , ingredient : "" ,edit : false}]});
  }

  showRecipeHandler = (index) => {
      this.setState({rightboxstate : 'singlerecipe',singlerecipeIndex : index});
    }

  showAllRecipesHandler = () => {
    this.setState({rightboxstate : 'recipes'});
  }

  deleteRecipe = (index) => {
    let recipes = [...this.state.recipes];
    recipes.splice(index,1);
    this.setState({recipes: recipes});
    recipes = [...this.state.recipes];
    if (this.state.rightboxstate === 'singlerecipe'){
      this.setState({rightboxstate : 'title'});
    }
  }


  render(props) {
  
    let content = '';
    if (this.state.rightboxstate === 'title') {
      content = <Title/>
    }

    else if (this.state.rightboxstate === 'singlerecipe'){
      let singleIndex = this.state.singlerecipeIndex;
      content =
      
      <ShowRecipe
      name={this.state.recipes[singleIndex].name} 
      ing={this.state.recipes[singleIndex].ingredient}
      editflag = {this.state.recipes[singleIndex].edit}
      edit = {() => this.editPageState(singleIndex)}
      delete={() => this.deleteRecipe(singleIndex)}
       >
         {this.state.recipes[singleIndex].edit === true ? <EditPage 
         editName = {this.editRecipeName}
         editIngredient = {this.editRecipeIngredient}
         editNameValue = {this.state.recipes[singleIndex].name}
         editIngredientValue = {this.state.recipes[singleIndex].ingredient}
         submit = {() => this.submitEditHandler(singleIndex)}
         /> : null } 
       </ShowRecipe>
              
    }
    else if (this.state.rightboxstate === 'addnew'){
      content = <Addnew 
      addrecipe= {this.recipeNameHandler} 
      addingredient={this.ingredientHandler}
      submit = {this.submitrecipeHandler}
      cancel = {this.titleState}/>
    }
    else if (this.state.rightboxstate === 'recipes'){
      content = this.state.recipes.map((recipe,index) => {
        if (recipe.name === "") {
          return null;
        }
        else {
          return ( 
                <ShowRecipe name = {recipe.name}
          ing= {recipe.ingredient}
          index={index}
          editflag = {this.state.recipes[index].edit}
          edit = {() => this.editPageState(index)}
          delete={() => this.deleteRecipe(index)} 
          > 
          {this.state.recipes[index].edit === true ? <EditPage
           editName = {() => this.editRecipeName}
           editIngredient = {this.editRecipeIngredient}
           editNameValue = {this.state.recipes[index].name}
           editIngredientValue = {this.state.recipes[index].ingredient}
           submit = {() => this.submitEditHandler(index)}
           /> : null}  </ShowRecipe>
          
           )
        }
      })
    }

   

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
             { content } 
        </div>
        
      </div>
    );
  }
}

export default App;

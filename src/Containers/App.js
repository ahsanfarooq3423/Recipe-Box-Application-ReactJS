import React, { Component } from 'react';
import styles from './App.module.css';
import Addnew from '../Components/Recipe/Addnew.js';
import { ShowRecipe } from '../Components/Recipe/Showrecipe';
import EditPage from '../Components/Recipe/EditPage';
import Title from '../Components/Cockpit/Title';
import Leftbox from '../Components/Boxes/Leftbox';


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
        <Leftbox 
        rightboxstate = {this.state.rightboxstate}
        addnewState = {this.addnewState}
        showAllRecipesHandler = {this.showAllRecipesHandler}
        removeRecipeHandler = {this.removeRecipeHandler}
        empty = {this.state.empty}
        recipes = {this.state.recipes}
        showRecipeHandler = {this.showRecipeHandler}
        />
        <div class={styles.rootbox}>
             { content } 
        </div>
        
      </div>

    );
  }
}

export default App;

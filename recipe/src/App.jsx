import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import recipeStore from './recipes';
import SearchBox from './SearchBox';
import AddRecipe from './AddRecipe';
import NewRecipeForm from './NewRecipeForm';
import RecipeDetails from './RecipeDetails';
import { postRecipe, fetchRecipes } from './services';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: recipeStore.recipes,
      searchfield: '',
      title: '',
      ingredients: '',
      instructions: '',
      image: '',
      recipeFormPage: false,
      detailsPage: false,
      allRecipesPage: true,
      selectedRecipe: null,
      error: false,
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.openRecipeForm = this.openRecipeForm.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleInstructionsChange = this.handleInstructionsChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmitRecipe = this.handleSubmitRecipe.bind(this);
    this.showAllRecipes = this.showAllRecipes.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  handleSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  openRecipeForm = () => {
    this.setState({ 
      recipeFormPage: true,
      allRecipesPage: false,
     });
  }

  handleCancelClick = () => {
    this.setState({ 
      recipes: recipeStore.recipes,
      searchfield: '',
      title: '',
      ingredients: '',
      instructions: '',
      image: '',
      recipeFormPage: false,
      detailsPage: false,
      allRecipesPage: true,
      selectedRecipe: null,
     });
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleIngredientsChange = (event) => {
    this.setState({ ingredients: event.target.value })
  }

  handleInstructionsChange = (event) => {
    this.setState({ instructions: event.target.value })
  }

  handleImageChange = (event) => {
    this.setState({ image: event.target.value })
  }

  handleSubmitRecipe = () => {
    const title = this.state.title;
    const ingredients = this.state.ingredients;
    const instructions = this.state.instructions;
    const image = this.state.image;

    if(title !== '' && ingredients !== '' && instructions !== '') {
      postRecipe(title, ingredients, instructions, image)
      .then((recipe) => {
        this.setState({
          recipes: recipeStore.recipes,
          searchfield: '',
          title: '',
          ingredients: '',
          instructions: '',
          image: '',
          selectedRecipe: recipe,
          recipeFormPage: false,
          detailsPage: true,
          allRecipesPage: false,
          error: false,
        });
      });
    } else {
      this.setState({ error: true});
    }
  }

  showError(errorFlag) {
    if (errorFlag) {
      return (
        <div className="error">
          <div>*All Fields Are Mandatory</div>
        </div>
      )
    }
  }

  showAllRecipes = () => {
    fetchRecipes()
    .then(({ recipes }) => {
      this.setState({ 
        recipes,
        searchfield: '',
        title: '',
        ingredients: '',
        instructions: '',
        image: '',
        selectedRecipe: null,
        recipeFormPage: false,
        detailsPage: false,
        allRecipesPage: true,
        error: false
       });
    });    
  }

  showDetails = (event) => {
    const recipe = this.state.recipes.find(recipe => {
      return recipe.title === (event.target.innerHTML);
    })

    this.setState({
      selectedRecipe: recipe,
      recipeFormPage: false,
      detailsPage: true,
      allRecipesPage: false,
    });
  }

  componentDidMount() {
    this.poll();
  }

  poll() {
    setTimeout(() => {
      fetchRecipes()
      .then(({ recipes }) => {
        this.setState({ 
          recipes,
        });
      })
      .then(() => this.poll());
    }, 2000)
  }

  render() {
    if(this.state.allRecipesPage) {
        const filteredRecipes = this.state.recipes.filter(recipes => {
          return recipes.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
          <div className="App">
            <SearchBox searchChange={this.handleSearchChange} />
            <AddRecipe openRecipeForm={this.openRecipeForm}/>
            <div>
              <CardList recipes={filteredRecipes} showDetails={this.showDetails}/>
            </div>
          </div>
        );
    } else if(this.state.recipeFormPage){
      return (
        <div className="App">
          <NewRecipeForm 
            cancel={this.showAllRecipes}
            titleChange={this.handleTitleChange}
            ingredientsChange={this.handleIngredientsChange}
            instructionsChange={this.handleInstructionsChange}
            imageChange={this.handleImageChange}
            submitRecipe={this.handleSubmitRecipe}
            showerror={this.showError(this.state.error)}
          />
      </div>
      );
    } else if(this.state.detailsPage) {
      return (
        <div className="App">
          <RecipeDetails 
            showAllRecipes={this.showAllRecipes}
            recipe={this.state.selectedRecipe}
          />
        </div>
      );
    }
  }
}

export default App;

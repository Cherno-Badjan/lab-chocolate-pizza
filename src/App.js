import Header from './header.js';
import './App.css';
import ImageSection from './image-section.js';
import RecipeSection from './recipe.js';
import RecipeList from './recipeList.js';
import { ingredients } from './data.js';
import Footer from './footer.js';

function App() {
  return (
    <div className="App">
      < Header />
      <ImageSection />
      <RecipeSection />
      <RecipeList amount={ingredients.amount} name={ingredients.name} />
      <Footer />
    </div>
  );
}

export default App;

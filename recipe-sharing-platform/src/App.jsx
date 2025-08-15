import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page listing all recipes */}
        <Route path="/" element={<HomePage />} />

        {/* Recipe detail page */}
        <Route path="/recipes/:id" element={<RecipeDetail />} />

        {/* Add Recipe Form page */}
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;

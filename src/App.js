import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CategoryMovies from './pages/CategoryMovies';
import { routePath } from './services/route';
function App() {
  return (
   
     <Router>
      <Routes>
        <Route path={routePath.home} element={<Home/>}/> 
        <Route path={routePath.categories} element={<CategoryMovies/>}/>
        <Route path={routePath.invalid} element={<Home/>}/>
      </Routes>
     </Router>
    
  );
}

export default App;

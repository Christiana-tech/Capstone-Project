import { Router,Routes, Route, Outlet} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';

function Layout(){
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path="/"element={<Layout/>}>
         <Route index element={<Home/>} />
         <Route path="recipe/:id" element={<Recipes/>} />
         </Route>
      </Routes>
    

    </div>
  );
}

export default App;
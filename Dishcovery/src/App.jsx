import {  Routes, Route,Outlet } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios'
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    
    </>
  );
}

function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path="/"element={<Layout/>}>
         <Route index element={<Home/>} />
         <Route path="recipe/:id" element={<RecipeDetail/>} />
         </Route>
      </Routes>
    <Home/>
    </div>
  );
}

export default App;

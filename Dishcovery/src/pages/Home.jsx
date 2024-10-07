import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'
import RecipeDetails from '../components/RecipeDetail'
import RecipeCard from '../components/RecipeCard'
const Home =()=> {
  return (
    <main className='w-full flex-col'>
      <Header
       title={
        <p>Make Cooking Fun
          <br />Dishcovery!
        </p>
      }
      type='home'
      />
      
   <section id='recipes' className=' md:max-w-[1440px] mx-auto px-4 md:  '>
      <Recipes/>
    
   </section>
    </main>
  )
}

export default Home

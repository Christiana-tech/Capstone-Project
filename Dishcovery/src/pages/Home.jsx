import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'


const Home =()=> {
  return (
    <main className='w-full flex-col  inset-x-0  top-10   '>
      <Header
       title={
        <p >Make Cooking Fun
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

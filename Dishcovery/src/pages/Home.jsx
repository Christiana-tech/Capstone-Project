import React from 'react'
import Header from '../components/Header'
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

   </section>
    </main>
  )
}

export default Home

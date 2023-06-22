import React from 'react'
import Categories from '../components/categories'
import Products from '../components/products'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import Slider from '../components/slider'


const Home = () => {
  return (
    <div>
      <Slider/> 
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default Home;

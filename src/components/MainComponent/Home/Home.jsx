import React from 'react'
import Top from './Top'
import Today from './Today'
import Categories from './Categories'
import ThisMonth from './ThisMonth'
import Ad from './Ad'
import Products from './Products'
import NavAfter from '../../Navbar/Nav'
import Footer from '../Footer/Footer'
import BestSeller from './ThisMonth'

const Home = () => {
  return (
    <div className='container'>
      <NavAfter />
      <Top />
      <Today />
      <BestSeller />
      <Products />
    </div>
  )
}

export default Home

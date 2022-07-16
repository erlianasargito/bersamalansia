import React from 'react'

import Footer from '../parts/Footer'
import Header from '../parts/Header'
// import Hero from '../parts/Hero'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
// import JustArrived from '../parts/HomePage/JustArrived'
import SiteMap from '../parts/SiteMap'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestions from '../parts/Details/Suggestions'

export default function HomePage() {
  return (
    <>
    <Header theme="black"></Header>
    <Breadcrumb list={[
        {url: "/", name: "Home"},
        {url: "/categories/91231", name: "Office Room"},
        {url: "/categories/91231/products/7888", name: "Details"}
    ]} />
    <ProductDetails></ProductDetails>
    <Suggestions></Suggestions>
    <SiteMap></SiteMap>
    <Footer></Footer>
    </>
  )
}

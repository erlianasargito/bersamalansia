import React from 'react'

import Footer from '../parts/Footer'
import Header from '../parts/Header'
// import Hero from '../parts/Hero'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
// import JustArrived from '../parts/HomePage/JustArrived'
import SiteMap from '../parts/SiteMap'
import Breadcrumb from '../components/Breadcrumb'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetails from '../parts/Cart/ShippingDetails'
// import ProductDetails from '../parts/Details/ProductDetails'
// import Suggestions from '../parts/Details/Suggestions'

export default function HomePage() {
  return (
    <>
    <Header theme="black"></Header>
    <Breadcrumb list={[
        {url: "/", name: "Home"},
        {url: "/cart", name: "Shopping Cart"}
    ]} />

    <section className="md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
        </div>
      </div>
    </section>

    <SiteMap></SiteMap>
    <Footer></Footer>
    </>
  )
}


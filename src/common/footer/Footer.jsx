import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>DakeTech</h1>
            <p>Welcome to Daketech in Tbilisi, Georgia! Discover cutting-edge electronics, smartphones, laptops, and gaming gear. Capture Tbilisi's beauty with our gadgets or dive into gaming with our consoles. Stay connected on-the-go with smartwatches. Create a smart home with our devices. Enjoy fast shipping, easy returns, and top-notch customer service. Explore Daketech today!</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Tbilisi kostava's 58 </li>
              <li>Email:dake.techno@gmail.com</li>
              <li>Phone:599318337</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

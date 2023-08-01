import React from 'react'
import img from "../assets/img/logo.png"
import img1 from "../assets/img/student-management-system.png"
import img2 from "../assets/img/hospital.jpeg"
import img3 from "../assets/img/crm1.jpeg"
import img4 from "../assets/img/a.jpg"
import slide1 from "../assets/img/slide1.jpg"
import slide2 from "../assets/img/slide2.jpg"
import slide3 from "../assets/img/slide3.jpg"
import img_avatar1 from "../assets/img/avaters/avatar1.png"
import img_avatar2 from "../assets/img/avaters/avatar2.png"
import img_avatar3 from "../assets/img/avaters/avatar3.png"
import img_logos1 from "../assets/img/company-logos/1.png"
import img_logos2  from "../assets/img/company-logos/2.png"
import img_logos3  from "../assets/img/company-logos/3.png"
import img_logos4  from "../assets/img/company-logos/4.png"
import img_logos5 from "../assets/img/company-logos/5.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer'
const Home = () => {
  return (
    <div>
  {/* <div className="loader">
    <div className="loader-inner">
      <div className="circle" />
    </div>
  </div> */}
 
  <div className="top-header-area" id="sticker">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 text-center">
          <div className="main-menu-wrap">
           
            <div className="site-logo">
              <a href="index.html"><h1><span class="orange-text">Shopque</span></h1>
              {/* <img src={img} alt="" /> */}
              </a>
              <p>Your Store Your Way</p>
            </div>
            
            <nav className="main-menu">
              <ul>
                <li className="current-list-item">
                  <a href="#">Start</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Static Home</a>
                    </li>
                    <li>
                      <a href="index_2.html">Slider Home</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">Sell</a>
                </li>
                <li>
                  <a href="#">Manage</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="404.html">404 page</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="news.html">Learn</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html">News</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="news.html">News</a>
                    </li>
                    <li>
                      <a href="single-news.html">Single News</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/Contact">Pricing</a>
                </li>
                {/* <li>
                  <a href="shop.html">Shop</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="single-product.html">Single Product</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <div className="header-icons">
                  <a className="" href="/Login">
                      
                      Login
                    </a>
                    <a className="shopping-cart" href="cart.html">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a className="mobile-hide search-bar-icon" href="#">
                      <i className="fas fa-search" />
                    </a>
                   
                  </div>
                 
                </li>
                
              </ul>
             
            </nav>
            <a className="mobile-show search-bar-icon" href="#">
              <i className="fas fa-search" />
            </a>
            <div className="mobile-menu" />
         
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="search-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
          <div className="search-bar">
            <div className="search-bar-tablecell">
              <h3>Search For:</h3>
              <input type="text" placeholder="Keywords" />
              <button type="submit">
                Search <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="hero-area hero-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 offset-lg-2 text-center">
          <div className="hero-text">
            <div className="hero-text-tablecell">
              <p className="subtitle"></p>
              <h1>Successful Ecommerce, Let's Start Today!</h1>
              <div className="hero-btns">
                <a href="shop.html" className="boxed-btn">
                 Start Free Trial
                </a>
                <a href="/Contact" className="bordered-btn">
                 Login Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="list-section pt-80 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="list-box d-flex align-items-center">
            <div className="list-icon">
              <i className="fas fa-shipping-fast" />
            </div>
            <div className="content">
              <h3>Unlimited creation</h3>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="list-box d-flex align-items-center">
            <div className="list-icon">
              <i className="fas fa-phone-volume" />
            </div>
            <div className="content">
              <h3>Powerful infrastructure</h3>
             
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="list-box d-flex justify-content-start align-items-center">
            <div className="list-icon">
              <i className="fas fa-sync" />
            </div>
            <div className="content">
              <h3>The place for growth</h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="product-section mt-150 mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="section-title">
            <h3>
              <span className="orange-text">Website templates</span> that set
you up for success
            </h3>
            <p>
          
Get a headstart on your journey with 900+ free, customizable website templates, strategically
researched and tailored for every industry — or start from a blank canvas on our website builder.
</p>
<a href="shop.html" className="boxed-btn"> 
                Get Started
                </a>
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="single-product.html">
                <img src={img1} alt="" />
              </a>
            </div>
            <h3>Student Management</h3>
            <p className="product-price">
              <span>Student Database Management system streamlines the 
                activities that needs to be performed ·
                 It helps for a better communication between 
                 parents and the teachers.</span>
            </p>
            <a href="/Login" className="cart-btn">
               Get Started
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="single-product.html">
                <img src={img2} alt="" />
              </a>
            </div>
            <h3>Hospital Management</h3>
            <p className="product-price">
              <span>A smart hospital offers a smooth, 
                human-centric experience that improves patient outcomes. 
                Smart infrastructure technology and expertise are the 
                foundation of our smart hospital.</span> 
            </p>
            <a href="/Login" className="cart-btn">
            Get Started
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="single-product.html">
                <img  src={img3} alt="" />
              </a>
            </div>
            <h3>CRM</h3>
            <p className="product-price">
              <span>Enterprise resource planning (ERP) is a type of 
                software system that helps organisations 
                automate and manage core business processes 
                for optimal performance.</span> 
            </p>
            <a href="/Login" className="cart-btn">
            Get Started
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  
  <section className="cart-banner pt-100 pb-100">
    <div className="container">
      <div className="row clearfix">
        
        <div className="image-column col-lg-6">
          <div className="image">
           {/*  <div className="price-box">
              <div className="inner-price">
                <span className="price">
                  <strong>30%</strong> <br /> off 
                </span> 
              </div>
            </div>*/}
            <img src={img4} alt="" />
          </div>
        </div>
        
        <div className="content-column col-lg-6">
          <h3>
            <span className="orange-text">Build</span> an online store
          </h3>
          <h1>Your store, your way</h1>
          <div className="text">
          <span><span>-&nbsp; Smart drag and drop editor<br />
-&nbsp; 1000’s of advanced design capabilities<br />
-&nbsp; Custom domain, logo and more brand tools<br />
-&nbsp; Full-stack web dev tools for custom functionality<br />
-&nbsp; AI technology that creates a site for you</span></span>
          </div>
          
          {/* <div className="time-counter">
            <div className="time-countdown clearfix" data-countdown="2020/2/01">
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Days
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Hours
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Mins
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Secs
                </div>
              </div>
            </div>
          </div> */}
          <a href="cart.html" className="cart-btn mt-3">
            {/* <i className="fas fa-shopping-cart" /> */}Get Started 
          </a>
        </div>
      </div>
    </div>
  </section>
  
<div className="testimonail-section mt-100 mb-100">
    <div className="container">
     <div className="row">
        <div className="col-lg-10 offset-lg-1 text-center">
            
        <h2 className="">Making Commerce Better for Everyone.</h2>        
           
         
        </div>
      </div>
    </div>
  </div> 
  
  <div className="abt-section mb-150">
    <div className="container">
    
      <div className="row">
      <Carousel autoPlay="true" infiniteLoop="true">
                <div>
                    <img src={slide1} />
                   
                </div>
                <div>
                    <img src={slide2} />
                   
                </div>
                <div>
                    <img src={slide3} />
                   
                </div>
            </Carousel>
           </div>
           </div>
           </div>
           <section className="cart-banner pt-100 pb-100">
    <div className="container">
      <div className="row clearfix">
        
        <div className="image-column col-lg-6">
          <div className="image txtalign">
           {/*  <div className="price-box">
              <div className="inner-price">
                <span className="price">
                  <strong>30%</strong> <br /> off 
                </span> 
              </div>
            </div>*/}
            
           <span className="txtRich">How to create a free website</span><br/><br/><br/>
       <h3>Follow these 6 simple steps to create a website today</h3><br/><br/><br/>
           <a href="cart.html" className="cart-btn mt-3">
            {/* <i className="fas fa-shopping-cart" /> */}Get Started 
          </a>
          </div>
        </div>
        
        <div className="content-column col-lg-6">
        <ol  className="ol-content">
<li  >
<span>Sign up for a free website builder.</span><br/>
<p>Choose what kind of website you want to create.</p><br/>

</li>
<li  >
<span>Customize a template or get a website made for you.</span><br/>
<p>Choose your starting point.</p><br/>
</li>
<li>
<span>Drag and drop 1000s of design features.</span><br/>
<p>Add text, galleries, videos, vector art and more.</p><br/>
</li>
<li>
<span>Get ready for business.</span><br/>
<p>Add an online store, booking system, members area and blog.</p><br/>

</li>
<li>
<span>Publish your website and go live.</span><br/>
<p>Start building your professional online presence.
</p><br/>
</li>
<li  >
<span>Drive traffic to your site.</span><br />
<p>Use advanced SEO tools and integrated marketing solutions.</p>
</li><br/>
</ol>
          {/* <div className="time-counter">
            <div className="time-countdown clearfix" data-countdown="2020/2/01">
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Days
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Hours
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Mins
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Secs
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  </section>
  
 
  <div className="latest-news pt-150 pb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="section-title">
            <h3>
              <span className="orange-text">Our</span> News
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              fuga quas itaque eveniet beatae optio.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-latest-news">
            <a href="single-news.html">
              <div className="latest-news-bg news-bg-1" />
            </a>
            <div className="news-text-box">
              <h3>
                <a href="single-news.html">
                  You will vainly look for fruit on it in autumn.
                </a>
              </h3>
              <p className="blog-meta">
                <span className="author">
                  <i className="fas fa-user" /> Admin
                </span>
                <span className="date">
                  <i className="fas fa-calendar" /> 27 December, 2019
                </span>
              </p>
              <p className="excerpt">
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>
              <a href="single-news.html" className="read-more-btn">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-latest-news">
            <a href="single-news.html">
              <div className="latest-news-bg news-bg-2" />
            </a>
            <div className="news-text-box">
              <h3>
                <a href="single-news.html">
                  A man's worth has its season, like tomato.
                </a>
              </h3>
              <p className="blog-meta">
                <span className="author">
                  <i className="fas fa-user" /> Admin
                </span>
                <span className="date">
                  <i className="fas fa-calendar" /> 27 December, 2019
                </span>
              </p>
              <p className="excerpt">
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>
              <a href="single-news.html" className="read-more-btn">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
          <div className="single-latest-news">
            <a href="single-news.html">
              <div className="latest-news-bg news-bg-3" />
            </a>
            <div className="news-text-box">
              <h3>
                <a href="single-news.html">
                  Good thoughts bear good fresh juicy fruit.
                </a>
              </h3>
              <p className="blog-meta">
                <span className="author">
                  <i className="fas fa-user" /> Admin
                </span>
                <span className="date">
                  <i className="fas fa-calendar" /> 27 December, 2019
                </span>
              </p>
              <p className="excerpt">
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>
              <a href="single-news.html" className="read-more-btn">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <a href="news.html" className="boxed-btn">
            More News
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div className="logo-carousel-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="logo-carousel-inner">
            <div className="single-logo-item">
              <img src={img_logos1} alt="" />
            </div>
            <div className="single-logo-item">
              <img src={img_logos2} alt="" />
            </div>
            <div className="single-logo-item">
              <img src={img_logos3} alt="" />
            </div>
            <div className="single-logo-item">
              <img src={img_logos4} alt="" />
            </div>
            <div className="single-logo-item">
              <img src={img_logos5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>

  )
}

export default Home

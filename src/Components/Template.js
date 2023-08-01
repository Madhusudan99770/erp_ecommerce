import React from 'react'
import img from "../assets/img/logo.png"
import img1 from "../assets/img/student-management-system.png"
import img2 from "../assets/img/hospital.jpeg"
import img3 from "../assets/img/crm1.jpeg"
import img4 from "../assets/img/a.jpg"
import img_avatar1 from "../assets/img/avaters/avatar1.png"
import img_avatar2 from "../assets/img/avaters/avatar2.png"
import img_avatar3 from "../assets/img/avaters/avatar3.png"
import img_logos1 from "../assets/img/company-logos/1.png"
import img_logos2  from "../assets/img/company-logos/2.png"
import img_logos3  from "../assets/img/company-logos/3.png"
import img_logos4  from "../assets/img/company-logos/4.png"
import img_logos5 from "../assets/img/company-logos/5.png"
import Footer from './Footer'


const Template = () => {
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
              <a href="index.html">
              <img src={img} alt="" />
              </a>
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
              <p className="subtitle">Fresh &amp; Organic</p>
              <h1>Delicious Seasonal Fruits</h1>
              <div className="hero-btns">
                <a href="shop.html" className="boxed-btn">
                  Fruit Collection
                </a>
                <a href="/Contact" className="bordered-btn">
                  Contact Us
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
              <h3>Free Shipping</h3>
              <p>When order over $75</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="list-box d-flex align-items-center">
            <div className="list-icon">
              <i className="fas fa-phone-volume" />
            </div>
            <div className="content">
              <h3>24/7 Support</h3>
              <p>Get support all day</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="list-box d-flex justify-content-start align-items-center">
            <div className="list-icon">
              <i className="fas fa-sync" />
            </div>
            <div className="content">
              <h3>Refund</h3>
              <p>Get refund within 3 days!</p>
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
              <span className="orange-text">Our</span> Products
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              fuga quas itaque eveniet beatae optio.
            </p>
          </div>
        </div>
      </div>
      
     {/* <marquee behavior="scroll" direction="left" scrollamount="50" height="100%" width="100%"> */}
      
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
              <span>Student Database Management system streamlines the <br></br>
                activities that needs to be performed ·<br></br>
                 It helps for a better communication between <br></br>
                 parents and the teachers.</span> 85${" "}
            </p>
            <a href="/Login" className="cart-btn">
              <i className="fas fa-shopping-cart" /> Add to Cart
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
              <span>A smart hospital offers a smooth, <br></br>
                human-centric experience that improves patient outcomes. <br></br>
                Smart infrastructure technology and expertise are the <br></br>
                foundation of our smart hospital.</span> 70$
            </p>
            <a href="/Login" className="cart-btn">
              <i className="fas fa-shopping-cart" /> Add to Cart
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
              <span>Enterprise resource planning (ERP) is a type of <br></br>
                software system that helps organisations <br></br>
                automate and manage core business processes <br></br>
                for optimal performance.</span> 35${" "}
            </p>
            <a href="/Login" className="cart-btn">
              <i className="fas fa-shopping-cart" /> Add to Cart
            </a>
          </div>
        </div>
        
      </div>
      {/* </marquee> */}
    </div>
  </div>
  
  <section className="cart-banner pt-100 pb-100">
    <div className="container">
      <div className="row clearfix">
        
        <div className="image-column col-lg-6">
          <div className="image">
            <div className="price-box">
              <div className="inner-price">
                <span className="price">
                  <strong>30%</strong> <br /> off 
                </span>
              </div>
            </div>
            <img src={img4} alt="" />
          </div>
        </div>
        
        <div className="content-column col-lg-6">
          <h3>
            <span className="orange-text">Deal</span> of the month
          </h3>
          <h4>Hikan Strwaberry</h4>
          <div className="text">
            Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
            ullam similique! Beatae, minima quisquam molestias facere ea.
            Perspiciatis unde omnis iste natus error sit voluptatem accusant
          </div>
          
          <div className="time-counter">
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
          </div>
          <a href="cart.html" className="cart-btn mt-3">
            <i className="fas fa-shopping-cart" /> Add to Cart
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <div className="testimonail-section mt-150 mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div className="testimonial-sliders">
            <div className="single-testimonial-slider">
              <div className="client-avater">
                <img src={img_avatar1} alt="" />
              </div>
              <div className="client-meta">
                <h3>
                  Saira Hakim <span>Local shop owner</span>
                </h3>
                <p className="testimonial-body">
                  " Sed ut perspiciatis unde omnis iste natus error veritatis et
                  quasi architecto beatae vitae dict eaque ipsa quae ab illo
                  inventore Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium "
                </p>
                <div className="last-icon">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="single-testimonial-slider">
              <div className="client-avater">
                <img src={img_avatar2} alt="" />
              </div>
              <div className="client-meta">
                <h3>
                  David Niph <span>Local shop owner</span>
                </h3>
                <p className="testimonial-body">
                  " Sed ut perspiciatis unde omnis iste natus error veritatis et
                  quasi architecto beatae vitae dict eaque ipsa quae ab illo
                  inventore Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium "
                </p>
                <div className="last-icon">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="single-testimonial-slider">
              <div className="client-avater">
                <img src={img_avatar3} alt="" />
              </div>
              <div className="client-meta">
                <h3>
                  Jacob Sikim <span>Local shop owner</span>
                </h3>
                <p className="testimonial-body">
                  " Sed ut perspiciatis unde omnis iste natus error veritatis et
                  quasi architecto beatae vitae dict eaque ipsa quae ab illo
                  inventore Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium "
                </p>
                <div className="last-icon">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="abt-section mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="abt-bg">
            <a
              href="https://www.youtube.com/watch?v=DBLlFWYcIGQ"
              className="video-play-btn popup-youtube"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="abt-text">
            <p className="top-sub">Since Year 1999</p>
            <h2>
              We are <span className="orange-text">Fruitkha</span>
            </h2>
            <p>
              Etiam vulputate ut augue vel sodales. In sollicitudin neque et
              massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget
              dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed,
              interdum velit. Nam eu molestie lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              facilis illo repellat veritatis minus, et labore minima mollitia
              qui ducimus.
            </p>
            <a href="about.html" className="boxed-btn mt-4">
              know more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <section className="shop-banner">
    <div className="container">
      <h3>
        December sale is on! <br /> with big{" "}
        <span className="orange-text">Discount...</span>
      </h3>
      <div className="sale-percent">
        <span>
          Sale! <br /> Upto
        </span>
        50% <span>off</span>
      </div>
      <a href="shop.html" className="cart-btn btn-lg">
        Shop Now
      </a>
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

export default Template

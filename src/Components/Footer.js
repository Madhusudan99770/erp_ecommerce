import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-box about-widget">
            <h2 className="widget-title">About us</h2>
            <p className='texts'>
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box get-in-touch">
            <h2 className="widget-title">Get in Touch</h2>
            <ul className='text'>
              <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
              <li>support@fruitkha.com</li>
              <li>+00 111 222 3333</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box pages">
            <h2 className="widget-title">Pages</h2>
            <ul className='texts'>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Shop</a>
              </li>
              <li>
                <a href="news.html">News</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box subscribe">
            <h2 className="widget-title">Subscribe</h2>
            <p className='texts' >Subscribe to our mailing list to get the latest updates.</p>
            <form action="index.html">
              <input type="email" placeholder="Email" />
              <button type="submit">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="copyright">
    <div className="container">
      <div className="row">
        {/* <div className="col-lg-6 col-md-12">
          <p>
            Copyrights © 2019 -{" "}
            <a href="https://imransdesign.com/">Imran Hossain</a>, All Rights
            Reserved.
            <br />
            Distributed By - <a href="https://themewagon.com/">Themewagon</a>
          </p>
        </div> */}
        <div className="col-lg-6 text-right col-md-12">
          <div className="social-icons">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

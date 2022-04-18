import { FooterWrapper } from "./styles/footer.styled";
import './style.css'

const Footer = () => {
   return (
      <div>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
         <FooterWrapper>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12 block-body">
                     <div className="block-header">
                        <h2>LOGO PLACE</h2>
                     </div>
                     <div className="block-content">
                        <p>123 Main St. NY, NY, 11220</p>
                        <p></p>
                     </div>
                  </div>
               </div>

               <div className="container-fluid">
                  <div className="social-row">
                     <div className="col-12">
                        <div className="icons-menu social-icons">
                           <ul>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <span className="links-text">Facebook</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                    <span className="links-text">Twitter</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                    <span className="links-text">Instagram</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-google"></i>
                                    <span className="links-text">Google</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-pinterest-p"></i>
                                    <span className="links-text">Pinterest</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="container-fluid">
                  <div className="row">
                     <div className="col-3">
                        <div className="links-menu links-col">
                           <h3 className="module-title">About Us</h3>
                           <ul className="module-body">
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">About Us</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Delivery</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Privacy Policy</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Terms &amp; Conditions</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="links-menu links-col">
                           <h3 className="module-title">Customer Service</h3>
                           <ul className="module-body">
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Contact</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Returns</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Site Map</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Brands</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Unlimited Links</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="links-menu links-col">
                           <h3 className="module-title">My Account</h3>
                           <ul className="module-body">
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">My Account</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Order History</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Affiliates</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Newsletter</span>
                                 </a>
                              </li>
                              <li className="menu-item">
                                 <a href="#">
                                    <i className="fa-solid fa-angle-right arrow"></i>
                                    <span className="links-text">Gift Certificates</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="module module-newsletter links-col">
                           <h3 className="module-title">Newsletter</h3>
                           <div className="module-body">
                              <div className="newsletter-text">Get the latest style updates and special deals directly in your inbox</div>
                              <div className="newsletter-form">
                                 <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                    <div className="input-group">
                                       <input type="text" name="email" placeholder="Your email" className="form-control" />
                                       <span className="input-group-btn">
                                          <button type="submit" className="btn btn-primary" data-loading-text="<span>Send</span>">
                                             <i className="fa-solid fa-envelope"></i>
                                             <span> Send</span>
                                          </button>
                                       </span>
                                    </div>
                                    <div className="checkbox">
                                       <label>
                                          <input type="checkbox" name="agree" value="1" />
                                          I have read and agree to the <a href="#"><b>Privacy Policy</b></a>
                                       </label>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid copyrights">
               <div className="container">
                  <div className="row">
                     <div className="col-6 my-auto">
                        <span className="links-text">Copyright © 2022, HomeWare, All Rights Reserved</span>
                     </div>
                     <div className="col-6">
                        <div className="icons-menu icons-payment">
                           <ul>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-cc-visa"></i>
                                    <span className="links-text">Visa</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-cc-mastercard"></i>
                                    <span className="links-text">Mastercard</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-cc-amex"></i>
                                    <span className="links-text">Amex</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-cc-discover"></i>
                                    <span className="links-text">Discover</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-cc-paypal"></i>
                                    <span className="links-text">Paypal</span>
                                 </a>
                              </li>
                              <li className="menu-item icons-menu-item icon-menu-icon">
                                 <a href="#">
                                    <i className="fa-brands fa-cc-stripe"></i>
                                    <span className="links-text">Stripe</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </FooterWrapper>
      </div>
   )
}

export default Footer
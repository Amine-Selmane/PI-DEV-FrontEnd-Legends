//home nav lel student yalga fih cours zt emploi et reportcard et event et book....
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BurgerMenus from './BurgerMenus';
import ShopingCart from './ShopingCart';

const Header = () => {

   const [menuOpen, setMenuOpen] = useState(false)
   const [shopOpen, setShopOpen] = useState(false)

   const router = useRouter()
   const [path, setPath] = useState("")
   useEffect(() => {
      setPath(router.pathname)
   }, [router])

   // Sticky Menu Area start
   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
         window.removeEventListener('scroll', sticky);
      };
   });

   const sticky = (e) => {
      const header = document.querySelector('.header__area');
      const scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
   };
   // Sticky Menu Area End

   return (
      <React.Fragment>
         <Head>
            <title>Educal – Online Course and Education React, Nextjs Template</title>
            <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
         </Head>
         <header>
            <div id="header-sticky" className="header__area header__transparent header__padding">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                        <div className="header__left d-flex">
                           <div className="logo">
                              <Link href="/">
                                 <a><img src="assets/img/logo/kindy.png" alt="logo" /></a>
                              </Link>
                           </div>
                          
                        </div>
                     </div>
                     <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                        <div className="header__right d-flex justify-content-end align-items-center">
                           <div className="main-menu d-none d-xl-block">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li className="">
                                       <Link href="/"><a>Student's Home</a></Link>
                                       {/* <ul className="submenu">
                                          <li><Link href="/"><a>Home Style 1</a></Link></li>
                                          <li><Link href="/home-2"><a>Home Style 2</a></Link></li>
                                          <li><Link href="/home-3"><a>Home Style 3</a></Link></li>
                                       </ul> */}
                                    </li>
                                    <li className="has-dropdown">
                                       <Link href="/course-grid"><a>Courses</a></Link>
                                       <ul className="submenu">
                                          <li><Link href="/course-grid"><a>Courses</a></Link></li>
                                          <li><Link href="/course-list"><a>Courses List</a></Link></li>
                                          <li><Link href="/course-sidebar"><a>Courses Sidebar</a></Link></li>
                                          <li><Link href="/course-details"><a>Courses Details</a></Link></li>
                                       </ul>
                                    </li>
                                    <li className="">
                                       <Link href="/course-grid"><a>Schedule</a></Link>

                                    </li>
                                    <li className="">
                                       <Link href="/blog"><a>Report-cart</a></Link>
         
                                    </li>
                                    <li className="has-dropdown">
                                       <Link href="/course-grid"><a>Events</a></Link>
                                       <ul className="submenu">
                                          <li><Link href="/event-details"><a>Event Details</a></Link></li>
                                          <li><Link href="/cart"><a>Event</a></Link></li>
                                          <li><Link href="/checkout"><a>Checkout</a></Link></li>
                                       
                                       </ul>
                                    </li>
                                    <li className="has-dropdown">
                                       <Link href="/course-grid"><a>Books</a></Link>
                                       <ul className="submenu">
                                          <li><Link href="/wishlist"><a>Wishlist</a></Link></li>
                                       
                                       </ul>
                                    </li>
                                    <li><Link href="/contact"><a>Contact</a></Link></li>
                                 </ul>
                              </nav>
                           </div>
                           <div className="header__search p-relative ml-50 d-none d-md-block">
                              <form action="#">
                                 <input type="text" placeholder="Search..." />
                                 <button type="submit"><i className="fas fa-search"></i></button>
                              </form>
                              <div className="header__cart">
                                 <span className="cart-toggle-btn" onClick={() => { setShopOpen(!shopOpen) }}>
                                    <div className="header__cart-icon">
                                       <svg viewBox="0 0 24 24">
                                          <circle className="st0" cx="9" cy="21" r="1" />
                                          <circle className="st0" cx="20" cy="21" r="1" />
                                          <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6" />
                                       </svg>
                                    </div>
                                    <span className="cart-item">2</span>
                                 </span>
                              </div>
                           </div>
                           <div className="header__cart header__cart--responsive">
                              <span className="cart-toggle-btn" onClick={() => { setShopOpen(!shopOpen) }}>
                                 <div className="header__cart-icon">
                                    <svg viewBox="0 0 24 24">
                                       <circle className="st0" cx="9" cy="21" r="1" />
                                       <circle className="st0" cx="20" cy="21" r="1" />
                                       <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6" />
                                    </svg>
                                 </div>
                                 <span className="cart-item">2</span>
                              </span>
                           </div>
                           
                           <div className="sidebar__menu d-xl-none">
                              <div className="sidebar-toggle-btn ml-30" id="sidebar-toggle" onClick={() => {
                                 setMenuOpen(!menuOpen)
                              }}>
                                 <span className="line"></span>
                                 <span className="line"></span>
                                 <span className="line"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

            <ShopingCart shopOpen={shopOpen} setShopOpen={setShopOpen} />
            <div onClick={() => setShopOpen(false)} className={shopOpen ? "body-overlay show" : "body-overlay"}></div>

         </header>
      </React.Fragment>
   );
}

export default Header;
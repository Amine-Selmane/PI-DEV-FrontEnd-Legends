
import React, { useState, useEffect, Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BurgerMenus from './BurgerMenus';
import Head from 'next/head';
import ShopingCart from './ShopingCart';
import Image from 'next/image';

const HeaderThree = () => {

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
            <div id="header-sticky" className="header__area header__transparent header__padding header__white">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                        <div className="header__left d-flex">
                           <div className="logo">
                              <Link href="/">
                                 <a>
                                    <img className="logo-white" src="assets/img/logo/logo-2.png" alt="logo" />
                                    <img className="logo-black" src="assets/img/logo/logo.png" alt="logo" />
                                 </a>
                              </Link>
                           </div>
                           
                        </div>
                     </div>
                     <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                        <div className="header__right d-flex justify-content-end align-items-center">
                           <div className="main-menu main-menu-3 d-none d-xl-block">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li className="has-dropdown">
                                       <Link href="/"><a>Home</a></Link>
                                       <ul className="submenu">
                                          <li><Link href="/"><a>Home Style 1</a></Link></li>
                                          <li><Link href="/home-2"><a>Home Style 2</a></Link></li>
                                          <li><Link href="/home-3"><a>Home Style 3</a></Link></li>
                                       </ul>
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
                                    <li className="has-dropdown">
                                       <Link href="/blog"><a>Blog</a></Link>
                                       <ul className="submenu">
                                          <li><Link href="/blog"><a>Blog</a></Link></li>
                                          <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                                       </ul>
                                    </li>
                                    <li className="has-dropdown">
                                       <Link href="/course-grid"><a>Pages</a></Link>
                                       <ul className="submenu">
                                          <li><Link href="/about"><a>About</a></Link></li>
                                          <li><Link href="/instructor"><a>Instructor</a></Link></li>
                                          <li><Link href="/instructor-details"><a>Instructor Details</a></Link></li>
                                          <li><Link href="/event-details"><a>Event Details</a></Link></li>
                                          <li><Link href="/cart"><a>My Cart</a></Link></li>
                                          <li><Link href="/wishlist"><a>My Wishlist</a></Link></li>
                                          <li><Link href="/checkout"><a>Checkout</a></Link></li>
                                          <li><Link href="/sign-in"><a>Sign In</a></Link></li>
                                          <li><Link href="/sign-up"><a>Sign Up</a></Link></li>
                                          <li><Link href="/error"><a>Error</a></Link></li>
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
                           <div className="header__cart header__cart--responsive header__cart--responsive__white">
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
                           <div className="header__btn ml-20 d-none d-sm-block">
                              <Link href="/contact"><a className="e-btn">Try for free</a></Link>
                           </div>
                           <div className="sidebar__menu d-xl-none">
                              <div className="sidebar-toggle-btn ml-30" id="sidebar-toggle" onClick={() => { setMenuOpen(!menuOpen) }}>
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

export default HeaderThree;
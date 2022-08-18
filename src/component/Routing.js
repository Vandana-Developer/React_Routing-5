import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Post from './Post';
import Header from './Header';
import Footer from './Footer';
import postDetails from './postDetails';




const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Route path='/' exact component={Home} />
                <Route path='/Profile' component={Profile} />
                <Route path='/Post' exact component={Post} />
                <Route path='/Post/:topic' component={postDetails} />
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;
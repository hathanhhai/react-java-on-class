import React, { Component } from 'react';
import HomePage from './Pages/Home/HomePage';
import Account from './Pages/Users/Account';
import DetailPage from './Pages/Home/DetailPage';
import CartPage from './Pages/Home/CartPage';
import AddTour from './Conponents/Layouts/Tours/AddTour';
import AddTourPage from './Pages/Home/AddTourPage';
import ListTourPage from './Pages/Home/ListTourPage';


const routes = [
    {
        path:'/',
        exact:true,
        main:({history})=><HomePage history={history}/>
    },
    {
        path:'/account',
        exact:false,
        main:({history})=><Account history={history}/>
    },
    {
        path:'/my-cart',
        exact:true,
        main:({history})=><CartPage history={history}/>
    },
    {
        path:'/tour/:id',
        exact:true,
        main:({history,match})=><DetailPage match={match} history={history} />
    },
    {
        path:'/addtour',
        exact:true,
        main:({history,match})=><AddTourPage match={match} history={history} />
    },
    {
        path:'/listtour',
        exact:true,
        main:({history,match})=><ListTourPage match={match} history={history} />
    },
];

export default routes;


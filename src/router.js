import React, { Component } from 'react';
import HomePage from './Pages/Home/HomePage';
import Account from './Pages/Users/Account';
import DetailPage from './Pages/Home/DetailPage';


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
        path:'/tour/:id',
        exact:true,
        main:({history,match})=><DetailPage match={match} history={history} />
    },
];

export default routes;


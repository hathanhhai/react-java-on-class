import React, { Component } from 'react';
import HomePage from './Pages/Home/HomePage';


const routes = [
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    }
];

export default routes;


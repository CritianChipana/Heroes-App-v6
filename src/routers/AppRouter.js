import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {


    return (
        <BrowserRouter>
                <Routes> 

                    <Route path="/login" element= { 
                        <PublicRoute>
                            <LoginScreen/>
                        </PublicRoute>
                     }  />

                    <Route
                        path="/*" element= {
                            <PrivateRoute>
                                <DashboardRoutes/>
                            </PrivateRoute>
                        }
                     
                    />

                    {/* <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    /> */}
                    
                    {/* <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    /> */}
                </Routes>
        </BrowserRouter>
    )
}

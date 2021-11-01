import React from 'react'
import "./App.css"
import Header from './header/Header'
import Midel from './midel/Midel'
import FotherMain from '../src/fother/FotherMain'
import { Route } from 'react-router-dom'


export default function App() {
    return (
        <Route>
            <div>
                <Header/>
                <Midel/>
                <FotherMain/>
            </div>
        </Route>
    )
}

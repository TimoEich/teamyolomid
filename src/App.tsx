import React from 'react';
import './App.scss';
import LandingPageComponent from './Components/LandingPageComponent/LandingPageComponent';
import LogoComponent from './Components/LogoComponent/LogoComponent';
import NaviComponent from './Components/NaviComponent/NaviComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import ElementTableComponent from './Components/ElementTableComponent/ElementTableComponent';
import HeaderLeftComponent from './Components/HeaderLeftComponent/HeaderLeftComponent';
import HeaderRightComponent from './Components/HeaderRightComponent/HeaderRightComponent';
import LandingHeaderComponent from './Components/LandingHeaderComponent/LandingHeaderComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <div className="app-container">
                    <LogoComponent />
                    <NaviComponent />
                    <HeaderLeftComponent />
                    <HeaderRightComponent />
                    <Route exact path="/" component={LandingHeaderComponent} />
                    <Route exact path="/" component={LandingPageComponent} />
                    <Route path="/element" component={ElementTableComponent} />
                    <FooterComponent />
                </div>
            </Router>
        );
    }
}

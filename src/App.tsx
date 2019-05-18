import React from 'react';
import './App.scss';
import LandingPageComponent from './Components/LandingPageComponent/LandingPageComponent';
import LogoComponent from './Components/LogoComponent/LogoComponent';
import NaviComponent from './Components/NaviComponent/NaviComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import ElementTableComponent from './Components/ElementTableComponent/ElementTableComponent';
import HeaderLeftComponent from './Components/HeaderLeftComponent/HeaderLeftComponent';
import HeaderRightComponent from './Components/HeaderRightComponent/HeaderRightComponent';
import AddFromComponent from './Components/AddFormComponent/AddFormComponent';
import LandingHeaderComponent from './Components/LandingHeaderComponent/LandingHeaderComponent';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <LogoComponent />
            <NaviComponent />
            <HeaderLeftComponent />
            <HeaderRightComponent />
            {/* <LandingHeaderComponent /> */}
            {/* <LandingPageComponent /> */}
            {/* <ElementTableComponent /> */}
            <AddFromComponent />
            <FooterComponent />
        </div>
    );
}

export default App;

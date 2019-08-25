import React from "react";
import ContactUs from "./ContactUs";
import MeetStaff from "./MeetStaff";
import { Route } from "react-router-dom";
import Navigation from "./Navigation";
import Pictures from "./Pictures";
import Home from "./Home";

const App = () => {
  return (
    <div className='header'>
      <Navigation />
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/staff' exact component={MeetStaff} />
        <Route path='/pictures' component={Pictures} />
      </div>
    </div>
  );
};

export default App;

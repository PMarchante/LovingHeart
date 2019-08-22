import React from 'react';
import ContactUs from './ContactUs';
import MeetStaff from './MeetStaff';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import Pictures from './Pictures';

const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Route path='/' exact component={ContactUs} />
        <Route path='/staff' exact component={MeetStaff} />
        <Route path='/pictures' component={Pictures} />
      </div>
    </div>
  );
};

export default App;

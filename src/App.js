import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import PictureList from './components/pictureList/PictureList';
import PictureDetail from './components/pictureList/PictureDetail';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchBar/SearchBar';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Home} />
        <Route exact path='/picturelist' component={PictureList} />
        <Route exact path={`/pictures/:id`} component={PictureDetail} />
      </div>
    </Router>
  );
}

export default App;

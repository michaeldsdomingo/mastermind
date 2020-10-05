import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ImageSearch from './components/ImageSearch';
import Navbar from './components/Navbar';
import Images from './components/Images';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/app.css';
require('dotenv').config();

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <div id="main-form">
              <ImageSearch direction="vertical" setImages={setImages} query={query} setQuery={setQuery}/>
            </div>
          </Route>
          <Route path="/test">
            <Navbar setImages={setImages} query={query} setQuery={setQuery}/>
            <div id="test"><div id="test-inner"></div></div>
            {images.length > 1 && <Images images={images} toggleModalShow={setIsModalShow} isModalShow={isModalShow}/>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

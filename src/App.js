
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

import {orginal,action,drama} from './urls'

function App() {
  return (
    <div className="App">
  <Navbar/>
 <Banner/>
 <RowPost url={orginal} title={'Netflix orginals'}/>
 <RowPost url={action} title='Action' isSmall/>
 <RowPost url={drama} title='Drama' isSmall/>
    </div>
  );
}

export default App;

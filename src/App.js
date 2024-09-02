import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { RowPost } from './components/RowPost/RowPost';
import { useState } from 'react';
import {action,trending,originals,comedy,romance,documentary} from './urls'
import {  Outlet, Route,Router,Routes } from 'react-router-dom';
import { Trailer } from './components/Trailer/Trailer';

function App() {
  const [trailerId,setTrailerId] = useState(0);

  return (
    <div className="App container-fluid">
      <Navbar/>
      <Banner  url={trending}/>
      <RowPost  url={originals}  title="Netflix Original" trailerId={trailerId} setTrailerId={setTrailerId}/>
      <RowPost  url={trending}  title="Trending" trailerId={trailerId} setTrailerId={setTrailerId}/>
      <RowPost  url={action}  title="action" trailerId={trailerId} setTrailerId={setTrailerId}/>
      <RowPost  url={comedy}  title="comedy" trailerId={trailerId} setTrailerId={setTrailerId}/>
      <RowPost  url={romance}  title="romance" trailerId={trailerId} setTrailerId={setTrailerId}/>
      <RowPost  url={documentary}  title="documentary" trailerId={trailerId} setTrailerId={setTrailerId}/>
      <Routes>

        <Route path="trailerPage" element={<Trailer trailerId={trailerId} setTrailerId={setTrailerId}/>}></Route>
      </Routes>

      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Marketplace from './marketplace/Marketplace';
import Navigation from './components/navigation/Navigation';
import Error from './components/Error';
import ListingDetail from './marketplace/ListingDetail';
import Landing from './landing/Landing';
import Platform from './platform/Platform';
import Team from './team/Team';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/team" element={<Team />} />
        <Route path="/listings/:mlsNumber" element={<ListingDetail />} />
        <Route
          path="*"
          element={
            <Error
              code={404}
              title="Not Found"
              message="The page you requested does not exist"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

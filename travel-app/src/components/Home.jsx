import React from 'react';
import { Link } from 'react-router-dom';

import Header from './partials/Header';

export default function Home() {
  return (
    <div>
      <Header pageName="Travel App" />
      <h2>Home</h2>
      <Link to="/country">Country</Link>
    </div>
  );
}

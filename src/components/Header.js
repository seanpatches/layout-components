import React from 'react';
import pic from '../assets/alchemy.png';

export default function Header(){
  return (
    <header>
      <img src={pic}></img>
      <h1>My Dog</h1>
    </header>
  );
}

import React from 'react'
import Carousel from '../components/carousel';
import Clients from '../sections/clients';
import Community from '../sections/community';
import Unlock from '../sections/unlock';
import Achievements from '../sections/achievements';
import Calender from '../sections/calender';
import Customers from '../sections/customers';
import Updates from '../sections/updates';

const Main = () => {
  return (
    <main className='mainContainer'>
      <Carousel />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <Updates />
    </main>
  )
}

export default Main;
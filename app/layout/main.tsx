import React from 'react'
import Carousel from '../components/carousel';
import Cards from '../components/cards';
interface IClient {
  name: string,
  imageURL: string,
}
const Main = () => {
  const clientData : IClient[] = [
    {name:"client1", imageURL: "/images/client-icon1.svg"},
    {name:"client2", imageURL: "/images/client-icon2.svg"},
    {name:"client3", imageURL: "/images/client-icon3.svg"},
    {name:"client4", imageURL: "/images/client-icon4.svg"},
    {name:"client5", imageURL: "/images/client-icon5.svg"},
    {name:"client6", imageURL: "/images/client-icon6.svg"},
    {name:"client7", imageURL: "/images/client-icon3.svg"},
  ];
  const format = (number: number) => {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <main className='mainContainer'>
      <Carousel />
      <section className='clients'>
        <div className="mb-7">
        <h2 className="appMainHeading text-center">Our Clients</h2>
        <p className="appMainContent text-center">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="clientLogoBox">
          {clientData.map((data: IClient) => (
            <img src={data.imageURL} alt="client" />
          )
          )}
        </div>
      </section>
      <section className='section'>
        <div className="mb-7">
        <h2 className="appMainHeading text-center">Manage your entire community in a single system</h2>
        <p className="appMainContent text-center">Who is Nexcent suitable for?</p>
        </div>
        <div className="infoBox">
          <Cards/>
        </div>
      </section>
      <section className="suitable">
        <div className='image'>
          <img src="/images/authentication.svg"/>
        </div>
        <div className='content'>
            <h2 className="appMainHeading mx-0 mb-4">The unseen of spending three years at Pixelgrade</h2>
            <p className="cardContent max-w-xl mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="greenButton">Learn More</button>          
        </div>
      </section>
      <section className="achievements">
        <div className="sectionHeading my-auto">
          <h2 className='primaryText'>Helping a local</h2>
          <h2 className='greenText'>business reinvent itself</h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className='grid grid-cols-2 gap-y-4 gap-x-10 items-center'>
          <div className='countItem flex'>
          <img src="/images/members.svg" alt="" />
          <div>
            <h3>{format(2245341)}</h3>
            <p>Members</p>
          </div>
          </div>
          <div className='countItem flex'>
          <img src="/images/clubs.svg" alt="" />
          <div>
            <h3>{format(46328)}</h3>
            <p>Clubs</p>
          </div>
          </div><div className='countItem flex'>
          <img src="/images/event-bookings.svg" alt="" />
          <div>
            <h3>{format(828867)}</h3>
            <p>Event Bookings</p>
          </div>
          </div><div className='countItem flex'>
          <img src="/images/payments.svg" alt="" />
          <div>
            <h3>{format(1926436)}</h3>
            <p>Payments</p>
          </div>
          </div>
          
        </div>
      </section>
      <section className="suitable">
        <div className='image'>
          <img src="/images/signup.svg"/>
        </div>
        <div className='content'>
            <h2 className="appMainHeading mx-0 mb-4">How to design your site footer like we did</h2>
            <p className="cardContent max-w-xl mb-5">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className="greenButton">Learn More</button>          
        </div>
      </section>
      <section className="customers">
        <div>
          <div className="squareBox">
            <img src="/images/tesla.png" alt="" />
          </div>
        </div>
        <div className="content">
          <p></p>
          <p></p>
        </div>
      </section>
    </main>
  )
}

export default Main;
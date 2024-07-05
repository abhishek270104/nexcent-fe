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
        <div>
          <img src="/images/authentication.svg"/>
        </div>
        <div>
            <h2 className="appMainHeading mx-0 mb-4">The unseen of spending three years at Pixelgrade</h2>
            <p className="cardContent max-w-xl mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="greenButton">Learn More</button>          
        </div>
      </section>
    </main>
  )
}

export default Main;
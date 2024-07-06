import React from 'react'

const Calender = () => {
    return (
        <section className="calender">
            <div className='image'>
                <img src="/images/signup.svg" />
            </div>
            <div className='content'>
                <h2 className="appMainHeading mx-0 mb-4">How to design your site footer like we did</h2>
                <p className="cardContent max-w-xl mb-5">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className="greenButton">Learn More</button>
            </div>
        </section>
    )
}

export default Calender;
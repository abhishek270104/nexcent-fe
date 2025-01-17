import Image from 'next/image';
import React from 'react'

const Unlock = () => {
    return (
        <section className="unlock">
            <div className='image'>
                <img src="/images/authentication.svg" alt=''/>
            </div>
            <div className='content'>
                <h2 className="appMainHeading mx-0 mb-4">The unseen of spending three years at Pixelgrade</h2>
                <p className="cardContent max-w-xl mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className="greenButton">Learn More</button>
            </div>
        </section>
    )
}

export default Unlock;
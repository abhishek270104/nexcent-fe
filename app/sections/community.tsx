import React from 'react';
import Cards from '../components/cards';

const Community = () => {
    return (
        <section className='community'>
            <div className="mb-7">
                <h2 className="appMainHeading mb-4 text-center">Manage your entire community in a single system</h2>
                <p className="appMainContent text-center">Who is Nexcent suitable for?</p>
            </div>
            <div className="infoBox">
                <Cards />
            </div>
        </section>
    )
}

export default Community;
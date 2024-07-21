import { clientData, IClient } from '@/public/helper'
import Image from 'next/image';
import React from 'react'

const Clients = () => {
    return (
        <section className='clients'>
            <div className="mb-7">
                <h2 className="appMainHeading text-center">Our Clients</h2>
                <p className="appMainContent text-center">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="clientLogoBox">
                {clientData.map((data: IClient, index: number) => (
                    <img src={data.imageURL} alt="client" key={index} />
                )
                )}
            </div>
        </section>
    )
}

export default Clients;
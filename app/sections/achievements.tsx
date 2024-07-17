import { format } from '@/public/helper'
import Image from 'next/image';
import React from 'react'

const Achievements = () => {
    return (
        <section className="achievements">
            <div className="sectionHeading my-auto">
                <h2 className='primaryText'>Helping a local</h2>
                <h2 className='greenText'>business reinvent itself</h2>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className='grid grid-cols-2 gap-y-4 gap-x-10 items-center'>
                <div className='countItem flex'>
                    <Image src="/images/members.svg" alt="" />
                    <div>
                        <h3>{format(2245341)}</h3>
                        <p>Members</p>
                    </div>
                </div>
                <div className='countItem flex'>
                    <Image src="/images/clubs.svg" alt="" />
                    <div>
                        <h3>{format(46328)}</h3>
                        <p>Clubs</p>
                    </div>
                </div><div className='countItem flex'>
                    <Image src="/images/event-bookings.svg" alt="" />
                    <div>
                        <h3>{format(828867)}</h3>
                        <p>Event Bookings</p>
                    </div>
                </div><div className='countItem flex'>
                    <Image src="/images/payments.svg" alt="" />
                    <div>
                        <h3>{format(1926436)}</h3>
                        <p>Payments</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements;
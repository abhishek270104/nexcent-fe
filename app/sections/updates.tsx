import Image from 'next/image';
import React from 'react'

const Updates = () => {
    return (
        <section className='updates'>
            <div className="mb-7">
                <h2 className="appMainHeading mb-4 text-center">Caring is the new marketing</h2>
                <p className="appMainContent text-center">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className="flex justify-evenly">
                <div className='imageBox'><Image src="/images/tesla.png" alt="" />
                    <div className='updateBox'><p className='text-center'>Creating Streamlined Safeguarding Processes with OneRen</p><button className='flex gap-1 mt-6 mx-auto'>Read more <Image src="/images/right-arrow.svg" alt="" /></button></div>
                </div>
                <div className='imageBox'><Image src="/images/tesla.png" alt="" />
                    <div className='updateBox'><p className='text-center'>What are your safeguarding responsibilities and how can you manage them?</p><button className='flex gap-1 mt-6 mx-auto'>Read more <Image src="/images/right-arrow.svg" alt="" /></button></div>
                </div>
                <div className='imageBox'><Image src="/images/tesla.png" alt="" />
                    <div className='updateBox'><p className='text-center'>Revamping the Membership Model with Triathlon Australia</p><button className='flex gap-1 mt-6 mx-auto'>Read more <Image src="/images/right-arrow.svg" alt="" /></button></div>
                </div>
            </div>
        </section>
    )
}

export default Updates;
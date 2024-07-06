import { clientData, IClient } from '@/public/helper'
import React from 'react'

const Customers = () => {
    return (
        <section className="customers">
            <div className='mr-20'>
                <div className="squareBox">
                    <img src="/images/tesla.png" alt="" />
                </div>
            </div>
            <div className="content px-20">
                <p className='review'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h3 className='customerName '>Tim Smith</h3>
                <p className='designation'>British Dragon Boat Racing Association</p>
                <div className='flex justify-between mt-10'>
                    <div className='logoBox flex align-middle gap-12'>
                        {clientData.slice(0, 6).map((customer: IClient, index: number) => (
                            <img src={customer.imageURL} alt={customer.name} key={index} />
                        ))}
                    </div>
                    <button className='link customerName flex gap-4'>Meet all customers <img src="/images/right-arrow.svg" alt="" /></button>
                </div>
            </div>

        </section>
    )
}

export default Customers;
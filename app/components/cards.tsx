import React from 'react'

const Cards = () => {
  return (
      <>
          <div className="card">
            <div>
                <img className="cardImage" src="/images/organizations.svg"/>
                <h2 className="cardHeading text-center">Membership Organizations</h2>
            </div>
            <p className="cardContent mt-4 text-center">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="card">
            <div>
                <img className="cardImage" src="/images/associations.svg"/>
                <h2 className="cardHeading text-center">National Associations</h2>
            </div>
            <p className="cardContent mt-4 text-center">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="card">
            <div>
                <img className="cardImage" src="/images/group.svg"/>
                <h2 className="cardHeading text-center">Clubs And Groups</h2>
            </div>
            <p className="cardContent mt-4 text-center">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
      </>
  )
}

export default Cards
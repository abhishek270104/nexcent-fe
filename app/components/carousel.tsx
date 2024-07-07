'use client'
import { carouselSlides } from '@/public/helper';
import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel';
const Carousel = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <>
      <section className="carouselSlide" >
        <ReactSimplyCarousel
          activeSlideIndex={active}
          onRequestChange={setActive}
          itemsToShow={1}
          itemsToScroll={1}
          speed={600}
          easing="linear"
        >
          {carouselSlides.map((carouselSlide) => (
            <React.Fragment key={carouselSlide.id}>
              {carouselSlide.component}
            </React.Fragment>
          ))}
        </ReactSimplyCarousel>
      </section>
      <div className=" dots mx-auto mb-10">
        {carouselSlides.map((_, index: number) => (
          <button className={`dot ${active === index ? "active" : ""}`} key={index} onClick={() => setActive(index)}></button>
        ))}
      </div>
    </>

  )
}

export default Carousel;
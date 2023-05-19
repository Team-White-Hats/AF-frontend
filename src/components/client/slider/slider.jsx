import React from "react"
import SlideCard from "./sliderCard"
import "./slider.css"

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default SliderHome

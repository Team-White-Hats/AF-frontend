import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slide1 from "./maskslide.png"
import Slide2 from "../../../assets/categoryimages/bathik.jpeg"
import Slide3 from "../../../assets/categoryimages/braas.jpg"
import Slide4 from "../../../assets/categoryimages/Dilshan-Gems-Jewelers.jpg"

const SliderCard = () => {

  const SlideData = [
    {
      id: 1,
      title: "30% Off For Your First Shopping ",
      desc: "Ambalangoda Handicraft Wood Masks",
      cover: Slide1,
    },
    {
      id: 2,
      title: "30% Off For Your First Shopping",
      desc: "Everything you need for fresh,glowing skin",
      cover: Slide2,
    },
    {
      id: 3,
      title: "50% Off For Your First ShoppingF",
      desc: "Biosynthesis,Applications,and Adverse Effects",
      cover: Slide3,
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Supports cellular energy and heart health",
      cover: Slide4,
    },
  ]
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {SlideData.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}  style={{background:"white" ,width:"auto"}}>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' style={{width: '60%', height: 'auto'}} />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SliderCard

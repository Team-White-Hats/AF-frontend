import React from "react"
import "./productCategory.css"
import Bathik from "../../../assets/categoryimages/bathik.jpeg"
import Handicraft from "../slider/maskslide.png"
import Braas from "../../../assets/categoryimages/braas.jpg"
import Jew from "../../../assets/categoryimages/Dilshan-Gems-Jewelers.jpg"


const Categories = () => {
  const data = [
    {
      cateImg:  Bathik,
      cateName: "Batik Texttiles",
    },
    {
      cateImg: Handicraft,
      cateName: "Handicrafts",
    },
    {
      cateImg: Braas,
      cateName: "Gems and Jewelery",
    },
    {
      cateImg: Jew,
      cateName: "Brass Products",
    },
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index} style={{padding:"20px"}}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
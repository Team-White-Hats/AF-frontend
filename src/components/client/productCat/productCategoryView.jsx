import React from "react"
import "./category.css"
import Jew from '../../../assets/homecategory/batikhome.jpg';
import Handicraft from '../../../assets/homecategory/maskcat.jpg';
import Braas from '../../../assets/homecategory/braas.jpg';
import Lac from '../../../assets/homecategory/laksga.jpg';
import Batik from '../../../assets/homecategory/handloom-banner-4_0.jpg'
import Carousel from "react-elastic-carousel";
import {Link} from "react-router-dom";



function ProductCategory(){

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
    const data = [
        {
          cateImg:  Batik,
          cateName: "Handloom Textiles",
        },
        {
          cateImg: Handicraft,
          cateName: "Wood Carvings",
        },
        {
          cateImg: Braas,
          cateName: "Brass Metalwork",
        },
        {
          cateImg: Lac,
          cateName: "Lacquer(Laksha)",
        },
        {
            cateImg: Jew,
            cateName: "Batik Textiles",
          },
        
      ]


    return(
<div>

<Carousel breakPoints={breakPoints}>
          {data.map((value, index) => {

            return (
            <div class="card" id="topcrs-crd" style={{maxHeight:"330px"}} >
                <div class="image">
              <img src={value.cateImg} class="card-img-top" alt="..."/>
              </div>
              <div class="card-body" onclick="openPopup()">
              <div> <h3>{value.cateName}</h3></div>
              <div style={{marginTop:"10px",display: "flex",justifyContent:"center"}}  > <Link to={`/client/product/${value.cateName}`} ><button type="button" class="btn" > Shop Now <i className="fa fa-shopping-bag"/></button> </Link></div>
              </div>

            <div>

            </div>

            </div>
          
        
           
            );
          
          })}
      </Carousel>




</div>

    );


}

export default ProductCategory;



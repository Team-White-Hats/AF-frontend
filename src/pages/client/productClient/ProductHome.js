import React from "react";
import SliderHome from "../../../components/client/slider/slider.jsx";
import ProductCategory from "..//../../components/client/productcategory/productCategory.jsx"

function ProductHome(){

    return(
 <div>

<div className='container d_flex' style={{background:"white" ,maxwidth:"auto"}}>
        <ProductCategory />
          <SliderHome />
        </div>

        <div style={{marginLeft:'30px',marginTop:"20px"}}>
            <h2>New Arrivals</h2>
    </div>
    <div className='container d_flex' style={{background:"white" ,maxwidth:"auto"}}>
        </div>
</div>

    )
}

export default ProductHome;
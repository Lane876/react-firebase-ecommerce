import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const product = useSelector((state) => state.product.product);

    console.log(product);
    return (
        <div style={{paddingTop:"5rem", display:"flex", justifyContent:"space-around", alignItems:"center", flexWrap:"wrap"}}>
            <div>
                <img src={product.image_def} style={{width:"200px"}} alt="cartimage"/>
                
            </div>
            <div style={{display:"flex", justifyContent:"flex-start", flexDirection:"column"}}>

            <div>
                {product.title}
            </div>
            <div>
                ${product.price}
            </div>
            </div>
        </div>
    )
}

export default Cart

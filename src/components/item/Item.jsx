import React from "react";

const Item = ({product})=>{
    return(
        < div className="d-flex justify-content-around">
            <div id={product.id} className="card w-50 mt-4">
                <img src={product.pictureUrl} className="card-img-top h-50" alt="imagen producto"/>
                <div class="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p>$ {product.price}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    )
}
export default Item
import React from "react";
function ProductComponent(props){
console.log(props);
  return (
    <div className="App-header">
    <h2>Name : {props.product.name}</h2>
    <h3>Price : {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
    <p>Description : {props.product.description}</p>
    <br/>
    </div>
  )
}
export default ProductComponent;

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './style.css'
import Navbar from "./Navbar";

let ProductDetails = () => {
  let params = useParams();
  console.log(params.productId);
  let [ProductDetails, setProductDetails] = useState();
  let [loading,setloading]=useState(true)
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => {
        setProductDetails(response.data)
        setloading(false)
      });
  }, []);
  return (
    <>
      <div className="flex">
        <h1 className="heading"> Product Details</h1>
        <Navbar />
      </div>
      {
        loading?
        <h1>loading</h1>
        :
           <div className="single-product">
        <div className="product-container">
          <div className="product-image">
            <img src={ProductDetails.image} alt="" />
          </div>
          <div className="product-details">
            <h1>{ProductDetails.title}</h1>
            <div className="rating">
              {"⭐".repeat(Math.floor(ProductDetails.rating.rate))}
              <span> ({ProductDetails.rating.rate})</span>
            </div>
            <p className="price">{ProductDetails.price}</p>
            <p className="description">
              {ProductDetails.description}
            </p>
            <div className="actions">
              <button className="add-cart">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      }
   
    </>
  );
};
export default ProductDetails;


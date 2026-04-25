import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css'
import Navbar from "./Navbar"

function Products() {
  let [product, setProduct] = useState([]);
  let nav = useNavigate();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProduct(response.data);
    });
  }, []);



  return (
    <>
      <div className="flex">
        <h1 className="heading">Products</h1>
        <Navbar />
      </div>
      <div className="cards">
        {product.map((v, i) => {
          return (
            <div key={i} className="card">
              <img src={v.image} />
              <h2>{v.title}</h2>
              <div className="rating">
                {"⭐".repeat(Math.floor(v.rating.rate))}
                <span> ({v.rating.rate})</span>
              </div>
              <div className="price">{v.price}</div>
              <button onClick={() => nav(`/product/${v.id}`)} >View Product</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;

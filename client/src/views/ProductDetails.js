import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDeatails = () => {
  console.log("rendring prod detalis");
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    console.log("fetching pro ");
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, [id]);

  return (
    <div>
      <div className="product-image">
        <img src={product.img} alt="Error" />{" "}
      </div>
      <div className="product-info">
        <h5> {product.title}</h5>
        <h6> {product.price}$ </h6>
        <h6> {product.description} </h6>
        <h6> {product.category} </h6>
      </div>
    </div>
  );
};

export default ProductDeatails;

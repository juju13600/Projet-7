import { Navigate, useParams } from "react-router-dom";

// css
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const product = Products.find((product) => product.id === id);
  console.log(product);

  if (!product) {
    return <Navigate to="/404" />;
  }

  const {
    equipments,
    description,
    rating,
    pictures,
    tags,
    host,
    title,
    location,
  } = product;
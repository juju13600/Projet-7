import { Navigate, useParams } from "react-router-dom";
import Products from "../../data/records.json";
import { Star } from "../../components/Star/Star";
import Tags from "../../components/Tags/Tags";
import Contact from "../../components/Contact/Contact";
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
    const stars = [1, 2, 3, 4, 5].map((n) => (
    <Star key={n} selected={n <= rating} />
  ));
  const equipementsLogement = equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });
}
export default ProductPage;

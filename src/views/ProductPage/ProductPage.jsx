import { Navigate, useParams } from "react-router-dom";
// components
import Collapse from "../../components/Collapse/Collapse";
import Products from "../../data/records.json";
import Caroussel from "../../components/Caroussel/Caroussel";
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

return (
    <>
      <div className="product_page">
        <Caroussel pictures={pictures} />
        <div className="product_content">
          <div className="product_informations">
            <h1 className="product_title">{title}</h1>
            <p className="product_location">{location}</p>
            <div className="product_tags">
              {tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="product_starshost">
            <Contact host={host} />
            <div className="product_stars">{stars}</div>
          </div>
        </div>
        <div className="description-equipements">
          <Collapse
            className="description"
            titre="Description"
            description={description}
          />
          <Collapse
            className="equipment"
            titre="Équipements"
            description={equipementsLogement}
          />
        </div>
      </div>
    </>
  );
}
export default ProductPage;

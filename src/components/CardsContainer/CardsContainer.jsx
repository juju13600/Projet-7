import "./CardsContainer.css";
import Records from "../../data/records.json";
import { Link } from "react-router-dom";
function CardsContainer() {
  return (
    <div className="cards-container">
      {/* generation des cards */}
      {Records.map((record) => {
        return (
          <div className="card" key={record.id}>
            <div className="card-image">
              <Link to={"products/" + record.id} className="card-link">
                <div className="card-title">
                  <h2>{record.title}</h2>
                </div>
                <div className="card_overlay">
                <img 
                  className="card-vignette"
                  src={record.cover}
                  alt={record.title}
                />
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsContainer;

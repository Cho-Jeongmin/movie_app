import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/movie-detail">About</Link>
    </div>
  );
}

export default Navigation;

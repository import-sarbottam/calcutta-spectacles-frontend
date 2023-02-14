import "../style/Header/main.css";
import { Link } from "react-router-dom";
const Head = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link className="text-link" to="/">
            Bill Entry
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/frame">
            Frame Entry
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Head;

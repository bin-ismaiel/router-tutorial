import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="p-1">product 1</Link>
        </li>
        <li>
          <Link to="p-2">product 2</Link>
        </li>
        <li>
          <Link to="p-3">product 3</Link>
        </li>
      </ul>
    </div>
  );
}

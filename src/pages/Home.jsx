import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Home</p>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Go
      </button>
    </div>
  );
}

import { Link, useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <button>
        <Link to=".." relative="path">
          {/* use relative=path to make it return to the path parent not the route parent */}
          Back
        </Link>
      </button>
    </div>
  );
}

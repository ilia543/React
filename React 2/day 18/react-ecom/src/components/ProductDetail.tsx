import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  description: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error loading product", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-10">Loading...</div>;
  if (!product) return <div className="p-10">Product not found.</div>;

  return (
    <div className="p-10 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="w-60 mb-4" />
      <p className="mb-2">Price: ${product.price}</p>
      <p className="mb-2">Rating: {product.rating}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
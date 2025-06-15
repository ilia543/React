import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const BookCard = ({ id, title, image, price }: BookCardProps) => {
  return (
    <Link to={`/product/${id}`} className="block border p-3 rounded shadow-sm hover:shadow-md">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />
      <h2 className="font-bold text-lg">{title}</h2>
      <p>${price}</p>
    </Link>
  );
};

export default BookCard;
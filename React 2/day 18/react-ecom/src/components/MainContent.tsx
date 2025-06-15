import { useEffect, useMemo, useState } from "react";
import { useFilter } from "./FilterContext";
import axios from "axios";
import BookCard from "./BookCard";
import { Tally3 } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
}

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } = useFilter();
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [keyword]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = keyword
          ? `https://dummyjson.com/products/search?q=${keyword}`
          : `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;
        const res = await axios.get(url);
        setProducts(res.data.products);
      } catch (err) {
        console.error("Error loading products", err);
      }
    };
    fetchProducts();
  }, [currentPage, keyword]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (minPrice !== undefined) {
      result = result.filter((p) => p.price >= minPrice);
    }
    if (maxPrice !== undefined) {
      result = result.filter((p) => p.price <= maxPrice);
    }
    if (searchQuery) {
      result = result.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    switch (filter) {
      case "cheap":
        return [...result].sort((a, b) => a.price - b.price);
      case "expensive":
        return [...result].sort((a, b) => b.price - a.price);
      case "popular":
        return [...result].sort((a, b) => b.rating - a.rating);
      default:
        return result;
    }
  }, [products, selectedCategory, minPrice, maxPrice, searchQuery, filter]);

  return (
    <section className="w-full">
      <div className="mb-4">
        <button
          onClick={() => setDropDownOpen((prev) => !prev)}
          className="border px-4 py-2 rounded-full flex items-center mb-2"
        >
          <Tally3 className="mr-2" />
          {filter === "all" ? "Sort" : filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>

        {dropDownOpen && (
          <div className="border rounded bg-white shadow w-40 z-20">
            {["cheap", "expensive", "popular"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilter(type);
                  setDropDownOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <BookCard
            key={product.id}
            id={product.id.toString()}
            title={product.title}
            image={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default MainContent;
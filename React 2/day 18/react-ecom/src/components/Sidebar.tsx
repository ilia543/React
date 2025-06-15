import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import "./Sidebar.css";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);

  const keywords = ["apple", "watch", "Fashion", "trend", "shoes", "shirt"];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json() as { products: Product[] };

        const uniqueCategories = [
          ...new Set(data.products.map((p) => p.category)),
        ];

        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    };

    fetchCategories();
  }, []);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <aside className="w-[150px] p-5 h-screen overflow-y-auto border-r sm:w-64">
      <h1 className="text-2xl font-bold mb-6">Sigma Store</h1>

      <input
        type="text"
        className="border rounded px-2 py-1 w-full mb-4"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Min"
          value={minPrice ?? ""}
          onChange={(e) =>
            setMinPrice(e.target.value ? +e.target.value : undefined)
          }
          className="border px-2 py-1 w-1/2"
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice ?? ""}
          onChange={(e) =>
            setMaxPrice(e.target.value ? +e.target.value : undefined)
          }
          className="border px-2 py-1 w-1/2"
        />
      </div>

      <div className="mb-5">
        <h2 className="font-semibold text-lg mb-2">Categories</h2>
        {categories.map((cat) => (
          <label key={cat} className="block mb-1">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
              className="mr-2"
            />
            {cat.toUpperCase()}
          </label>
        ))}
      </div>

      <div className="mb-5">
        <h2 className="font-semibold text-lg mb-2">Keywords</h2>
        {keywords.map((key) => (
          <button
            key={key}
            className="block w-full text-left px-3 py-1 mb-1 border rounded hover:bg-gray-200"
            onClick={() => setKeyword(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <button
        onClick={resetFilters}
        className="w-full py-2 bg-black text-white rounded-xl mt-4"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default Sidebar;
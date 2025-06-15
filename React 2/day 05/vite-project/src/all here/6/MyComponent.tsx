import { useState, useEffect } from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPrecentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

const MyComponent = () => {
    const [data, setData] = useState<Product | null>(null);

    const randomindex = Math.floor(Math.random() * 30);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch(`https://dummyjson.com/product/${randomindex}`)
                const result = await response.json();
                setData(result);
            }catch(error){
                console.error("error data", error);
            };
        };

        fetchData();
    }, []);

  return (
    <div>
        {data ? <div>
            <p>ID: {data.id}</p>
            <p>Title: {data.title}</p>
            <p>Description: {data.description}</p>
            <p>Price: ${data.price}</p>
            <p>Discount: {data.discountPrecentage}%</p>
            <p>Rating: {data.rating}</p>
            <p>Stock: {data.stock}</p>
            <p>Brand: {data.brand}</p>
            <p>Category: {data.category}</p>
            <p>Thumbnail:</p><img src={data.thumbnail} alt={data.title} width={100} />
            <p>Images:</p><img src={String(data.images)} alt={data.title} width={100} />
        </div> : (<p>Loading...</p>)}
    </div>
  );
};

export default MyComponent;
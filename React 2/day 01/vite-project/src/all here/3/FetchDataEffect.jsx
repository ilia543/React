import React, { useEffect, useState } from 'react';

export const FetchDataEffect = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            setPosts(data);
        };

        fetchData()

    }, []);

    const randI = Math.floor(Math.random() * posts.length);
  return (
    <div>
        {posts.length > 0 ? <p>{posts[randI].title}</p> : <p>loading...</p>}
    </div>
  );
};

import { useEffect, useId, useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  const [posts, setPosts] = useState([]);
  // useEffect - side effect => fetching api, maniplating dom

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  // deps
  return (
    <div className="app">
      <button onClick={() => setcount((prev) => (prev += 1))}>
        change Count
      </button>

      {posts.map(({ id, userId, body, title }) => (
        <div key={id}>
          <div>{id}</div>
          <div>{body}</div>
          <div>{title}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

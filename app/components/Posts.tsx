"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPost(data.data);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div className="post-interface p-2 sm:p-5">
        <h1 className="text-[2rem] text-center font-bold">Our Posts</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 sm:p-5 gap-5">
          {error && <div className="text-red-500 text-center">{error}</div>}
          {loading
            ? Array(4)
                .fill(null)
                .map((_, index) => <Loading key={index} />) // Display multiple skeletons
            : post.map((post: { id: number; title: string; body: string }) => (
                <>
                  <div
                    key={post.id}
                    className="bg-[url('/images/post2.jpg')] bg-cover bg-center bg-no-repeat p-5 space-y-3 rounded-lg  "
                  >
                    <h1 className="text-xl font-bold">Post {`${post.id}`} </h1>
                    <h2 className="text-lg font-medium">{post.title}</h2>

                    <p className="text-[0.9rem] text-slate-700">{post.body}</p>
                  </div>
                </>
              ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;

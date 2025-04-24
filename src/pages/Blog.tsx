import React, { useState, useEffect } from "react";
import { api } from "../lib/api";
import BlogGrid from "../components/BlogGrid";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen text-xl">
      Loading...
    </div>
  ) : (
    <div className="container mx-auto">
      <BlogGrid blogs={blogs} />
    </div>
  );
}

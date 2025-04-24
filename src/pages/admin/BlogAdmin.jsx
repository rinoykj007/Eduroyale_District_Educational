import React, { useState, useEffect } from "react";
import { api } from "../../lib/api";
import BlogForm from "../../components/BlogForm";

export default function BlogAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const initialBlog = {
    title: "",
    content: "",
    author: "",
    category: "",
    image: "",
    date: {
      day: new Date().getDate().toString(),
      month: new Date().toLocaleString("default", { month: "short" }),
      year: new Date().getFullYear().toString(),
    },
  };

  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState(initialBlog);
  const [editingBlog, setEditingBlog] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setLoading(false);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const fetchBlogs = async () => {
    try {
      const response = await api.get("/blogs");
      setBlogs(response.data);
      return response.data;
    } catch (error) {
      handleError(error, "Error fetching blogs");
      return [];
    }
  };

  const handleError = (error, prefix = "Error") => {
    console.error(`${prefix}:`, error);
    alert(`${prefix}: ${error.response?.data?.error || error.message}`);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchBlogs().finally(() => setLoading(false));
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title: newBlog.title,
      content: newBlog.content,
      author: newBlog.author,
    };

    try {
      if (editingBlog?._id) {
        await api.put(`/blogs/${editingBlog._id}`, blogData);
      } else {
        await api.post("/blogs", newBlog);
      }

      setNewBlog(initialBlog);
      setEditingBlog(null);
      await fetchBlogs();
    } catch (error) {
      handleError(error, "Error saving blog");
    }
  };

  const handleInputChange = (field, value) => {
    setNewBlog((prev) => ({ ...prev, [field]: value }));
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setNewBlog({ ...blog });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await api.delete(`/blogs/${id}`);
        alert("Blog deleted successfully!");
        await fetchBlogs();
      } catch (error) {
        handleError(error, "Error deleting blog");
      }
    }
  };

  const handleCancel = () => {
    setEditingBlog(null);
    setNewBlog(initialBlog);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8 mt-5">
        <h1 className="text-3xl font-bold">
          {editingBlog ? "Edit Blog" : "Create New Blog"}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <BlogForm
        newBlog={newBlog}
        onSubmit={handleSubmit}
        onChange={handleInputChange}
      />
      {editingBlog && (
        <div className="text-center mt-4">
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel Editing
          </button>
        </div>
      )}

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Manage Blogs</h2>
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600">{blog.content}</p>
              <div className="text-sm text-gray-500">
                By {blog.author} | {blog.category}
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

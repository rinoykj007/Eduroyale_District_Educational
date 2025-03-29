const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://20020565:EeO1yWXUg1JZ5ldb@educationblog.2mpyp.mongodb.net/educationblog";
const client = new MongoClient(uri);
let db;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db("educationblog");
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Stop server if connection fails
  }
}

// Routes
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await db.collection("blogs").find().toArray();
    res.json(blogs);
  } catch {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

app.post("/api/blogs", async (req, res) => {
  try {
    const blog = { ...req.body, createdAt: new Date() };
    const result = await db.collection("blogs").insertOne(blog);
    res.status(201).json(result);
  } catch {
    res.status(500).json({ error: "Failed to create blog" });
  }
});

app.put("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Received ID:");
  if (!ObjectId.isValid(id))
    return res.status(400).json({ error: "Invalid ID" });

  try {
    const result = await db
      .collection("blogs")
      .updateOne({ _id: new ObjectId(id) }, { $set: req.body });

    if (result.matchedCount === 0)
      return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog updated successfully" });
  } catch {
    res.status(500).json({ error: "Failed to update blog" });
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ error: "Invalid ID" });

  try {
    const result = await db
      .collection("blogs")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0)
      return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch {
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

// Start server after connecting to MongoDB
const PORT = 3000;
async function startServer() {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();

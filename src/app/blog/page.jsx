"use client";
import React from "react";
import Navigation from "../../components/navigation";
import BlogPostCard from "../../components/blog-post-card";

function MainComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "react", name: "React", count: 4 },
    { id: "javascript", name: "JavaScript", count: 3 },
    { id: "typescript", name: "TypeScript", count: 2 },
    { id: "web-dev", name: "Web Development", count: 3 },
  ];

  const blogPosts = [
    {
      title: "The Future of Web Development in 2025",
      date: "2025-01-15",
      excerpt:
        "Explore the cutting-edge trends shaping web development, from AI-driven interfaces to WebAssembly innovations.",
      slug: "future-web-development-2025",
      category: "web-dev",
      featured: true,
    },
    {
      title: "Advanced React Patterns",
      date: "2025-01-10",
      excerpt:
        "Deep dive into advanced React patterns including compound components and the render props pattern.",
      slug: "advanced-react-patterns",
      category: "react",
    },
    {
      title: "TypeScript Best Practices",
      date: "2025-01-05",
      excerpt:
        "Learn the best practices for writing maintainable TypeScript code in large-scale applications.",
      slug: "typescript-best-practices",
      category: "typescript",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="/blog" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            {featuredPost && (
              <div className="mb-12">
                <h2 className="font-inter text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Featured Post
                </h2>
                <BlogPostCard {...featuredPost} />
              </div>
            )}

            <div className="mb-8">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-inter"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentPosts.map((post, index) => (
                <BlogPostCard key={index} {...post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg font-inter ${
                      currentPage === i + 1
                        ? "bg-[#0077B5] text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="md:w-1/4">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Categories
              </h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-inter ${
                        selectedCategory === category.id
                          ? "bg-[#0077B5] text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {category.name}
                      <span className="float-right">{category.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default MainComponent;
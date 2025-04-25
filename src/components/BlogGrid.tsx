import React, { useState } from "react";
import { FaShare } from "react-icons/fa";

interface BlogPost {
  _id: string;
  title: string;
  date?: {
    month: string;
    day: string;
    year: string;
  };
  image?: string;
  category: string;
  author: string;
  quote?: string;
  url?: string;
}

interface BlogGridProps {
  blogs: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePostClick = (post: BlogPost, event: React.MouseEvent) => {
    if (post.url) {
      window.open(post.url, "_blank");
      return;
    }
    setSelectedPost(post);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedPost(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 px-4 md:px-5 pt-20 md:pt-24 mb-8 md:mb-10 font-['Oswald']">
        {blogs.map((post) => (
          <article
            key={post._id}
            onClick={(e) => handlePostClick(post, e)}
            className="min-h-[300px] md:h-[40vh] bg-white relative transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            {post.quote ? (
              <blockquote
                className="h-full flex items-center justify-center text-lg md:text-2xl p-3 md:p-5 box-border hover:bg-[#ff5722] hover:text-white hover:cursor-pointer transition-all duration-300"
                data-url={post.url}
              >
                {post.quote}
              </blockquote>
            ) : (
              <figure className="relative h-full group cursor-pointer overflow-hidden">
                <div className="absolute z-10 bg-[#f5f5f5] p-[8px_12px] md:p-[10px_16px] text-center group-hover:bg-[#ff5722] transition-all duration-300">
                  <span className="text-xs md:text-sm font-light">
                    {post.date?.month || "N/A"}
                  </span>
                  <span className="text-xl md:text-2xl font-semibold block">
                    {post.date?.day || "N/A"}
                  </span>
                  <span className="text-xs md:text-sm font-light text-[#ff5722] group-hover:text-white transition-colors duration-300">
                    {post.date?.year || "N/A"}
                  </span>
                </div>
                <img
                  src={post.image || "https://via.placeholder.com/400x300"}
                  alt={post.title}
                  className="h-full w-full object-cover relative group-hover:brightness-[0.8] transition-all duration-500 ease-in-out transform group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 bg-gradient-to-t from-black/40 to-transparent w-full p-3 md:p-5 h-[80px] md:h-[90px] box-border text-center text-lg md:text-2xl uppercase text-white shadow-[0px_1px_1px_rgb(0_0_0_/_50%)] transition-all duration-300 flex flex-col group-hover:h-[100px] md:group-hover:h-[110px] group-hover:from-black/60">
                  <span className="line-clamp-2 transform transition-transform duration-300 group-hover:-translate-y-1">{post.title}</span>
                  <span className="text-xs md:text-sm normal-case font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    By {post.author} | {post.category}
                  </span>
                </figcaption>
              </figure>
            )}
          </article>
        ))}
      </div>

      {isPopupVisible && selectedPost && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-[999]"
            onClick={closePopup}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-4/5 max-w-[500px] p-4 md:p-5 bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.3)] z-[1000] transition-[top,left] duration-300 max-h-[90vh] overflow-y-auto">
            <span
              className="material-symbols-outlined absolute -right-[5px] -top-[38px] text-white text-3xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={closePopup}
            >
              close
            </span>
            <div className="popup-content">
              {selectedPost.image && (
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="max-w-full h-[200px] md:h-[362px] mb-5 mx-auto flex object-cover"
                />
              )}
              <div className="text-xl md:text-2xl font-['Oswald'] inline-block">
                {selectedPost.title}
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 gap-3">
                <div className="flex flex-col md:flex-row md:gap-2">
                  <div className="dt-popup text-sm md:text-base">
                    {`${selectedPost.date?.month || "N/A"} ${
                      selectedPost.date?.day || "N/A"
                    } ${selectedPost.date?.year || "N/A"}`}
                  </div>
                  <div className="text-sm md:text-base">
                    By {selectedPost.author} | {selectedPost.category}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const message = `Hi, I'd like to know more about the article: "${selectedPost.title}"`;
                    const encodedMessage = encodeURIComponent(message);
                    window.open(
                      `https://api.whatsapp.com/send?text=${encodedMessage}`,
                      "_blank"
                    );
                  }}
                  className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-300 w-auto"
                >
                  <FaShare className="text-sm" />
                </button>
              </div>
              <p className="font-['Roboto'] font-light text-xs md:text-sm leading-[20px] md:leading-[22px] mt-[14px]">
                Lorem ipsum dolor sit amet, nam sale civibus conclusionemque et,
                ad qui omnes audire eloquentiam, at vis lucilius expetenda. Est
                ad meis putant suscipiantur, cu vix vidisse pertinax, in sea
                exerci mandamus.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BlogGrid;

import React from "react";

const BlogGrid = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 px-4 md:px-5 pt-20 md:pt-24 mb-8 md:mb-10 font-['Oswald']">
      {blogs.map((post) => (
        <article
          key={post._id}
          className="min-h-[300px] md:h-[40vh] bg-white relative"
        >
          <figure className="relative h-full group cursor-pointer">
            <div className="absolute z-10 bg-[#f5f5f5] p-[8px_12px] md:p-[10px_16px] text-center group-hover:bg-[#ff5722]">
              <span className="text-xs md:text-sm font-light">
                {post.date?.month || "N/A"}
              </span>
              <span className="text-xl md:text-2xl font-semibold block">
                {post.date?.day || "N/A"}
              </span>
              <span className="text-xs md:text-sm font-light text-[#ff5722] group-hover:text-white">
                {post.date?.year || "N/A"}
              </span>
            </div>
            <img
              src={post.image || "https://via.placeholder.com/400x300"}
              alt={post.title}
              className="h-full w-full object-cover relative group-hover:brightness-[0.8] transition-[filter] duration-500"
            />
            <figcaption className="absolute bottom-0 bg-gradient-to-t from-black/40 to-transparent w-full p-3 md:p-5 h-[80px] md:h-[90px] box-border text-center text-lg md:text-2xl uppercase text-white shadow-[0px_1px_1px_rgb(0_0_0_/_50%)] transition-[height] duration-200 flex flex-col group-hover:h-[100px] md:group-hover:h-[110px]">
              <span className="line-clamp-2">{post.title}</span>
              <span className="text-xs md:text-sm normal-case font-light mt-1">
                By {post.author} | {post.category}
              </span>
            </figcaption>
          </figure>
        </article>
      ))}
    </div>
  );
};

export default BlogGrid;

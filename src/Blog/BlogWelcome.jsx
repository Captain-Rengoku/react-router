import React from "react";

const BlogWelcome = () => {
  return (
    <div className="mt-6 p-4 rounded-xl bg-white shadow text-gray-800">
      <h2 className="text-2xl font-semibold mb-2">Blog Welcome</h2>
      <div className="text-lg">
        Welcome to Blog Page! This is Welcome Blog.
        <p className="text-blue-700">Use end when you're linking to a base or root route and don't want it highlighted on deeper paths.</p>
        <p className="text-red-700">See Welcome is not Highlighted or Underlined because of 'end' prop.</p>
      </div>
    </div>
  );
};

export default BlogWelcome;

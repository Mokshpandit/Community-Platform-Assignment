import { useState } from "react";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");

  const handlePost = () => {
    if (postContent.trim() === "") return;
    console.log("Post submitted:", postContent);
    setPostContent("");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center mb-3">
        <img
          src="https://via.placeholder.com/40"
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Start a post..."
          className="ml-3 w-full border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-4 text-sm text-gray-500">
        </div>
        <button
          onClick={handlePost}
          className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-700 disabled:opacity-50"
          disabled={!postContent.trim()}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

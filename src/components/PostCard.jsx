const PostCard = ({ title, content }) => (
  <div className="bg-white shadow rounded-lg p-4 mb-4">
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default PostCard;

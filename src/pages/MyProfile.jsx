const MyProfile = () => {
  return (
    <div className="flex-1 p-6">
      <div className="bg-white rounded-lg shadow p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Moksh Pandit</h2>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
          <p className="text-gray-700">
            Passionate about building intuitive and beautiful web interfaces using React and Tailwind. Always learning, always coding.
          </p>
        </div>
      </div>

      {/* Recent Posts (Optional Section) */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h3>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Just finished building my first Vite + React app!</li>
          <li>🚀 Shared my tips on performance optimizations in React.</li>
          <li>🧩 Dropped a new open source UI component kit on GitHub!</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;

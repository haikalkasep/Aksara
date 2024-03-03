import React from 'react';

const BlogMockup = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
          <img
            className="w-full h-96 object-cover"
            src="https://via.placeholder.com/1200x600"
            alt="Article Cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4">Judul Artikel</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in ligula non
              diam blandit lobortis. Sed at lacinia eros, et scelerisque est. Sed eget mauris
              risus. Nulla eget dui euismod, aliquam arcu vel, hendrerit orci. Nulla vitae
              suscipit arcu, non cursus magna.
            </p>
            <h3 className="text-xl font-semibold mb-2">Subjudul 1</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in ligula non
              diam blandit lobortis.
            </p>
            <h3 className="text-xl font-semibold mb-2">Subjudul 2</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in ligula non
              diam blandit lobortis.
            </p>
            <h3 className="text-xl font-semibold mb-2">Subjudul 3</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in ligula non
              diam blandit lobortis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMockup;

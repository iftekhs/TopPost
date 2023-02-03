import React from 'react';
import { useDispatch } from 'react-redux';
import addPostData from '../../../redux/thunk/posts/addPost';

const AddPost = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const post = {
      title: form.title.value,
      image: form.image.value,
      body: form.body.value,
    };
    dispatch(addPostData(post));
    form.reset();
  };

  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">Add a new post</h2>
      <form onSubmit={handleSubmit} action="#">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Post title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type post title"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Post image
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type post Image URL"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="body"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Post Body
            </label>
            <textarea
              name="body"
              id="body"
              rows="8"
              className="outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your post body here"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../helpers/helpers';
import deletePostData from '../../../redux/thunk/posts/deletePost';
import loadPostsData from '../../../redux/thunk/posts/loadPostsData';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsData());
  }, [dispatch]);

  const handleDeletePost = (id) => {
    dispatch(deletePostData(id));
  };

  return (
    <section id="posts">
      <h2 className="text-2xl text-white font-semibold mb-3">All Posts</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Post Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date Posted
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {post.title}
                </th>
                <td className="px-6 py-4">{formatDate(post.createdAt)}</td>
                <td className="px-6 py-4 flex gap-2">
                  <Link
                    to={`/dashboard/update-post/${post._id}`}
                    className="rounded-full bg-blue-500 text-white px-4 py-2 transition-all hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="rounded-full bg-rose-500 text-white px-4 py-2 transition-all hover:bg-rose-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Posts;

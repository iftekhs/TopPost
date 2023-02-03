import React, { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import loadSinglePostData from '../../redux/thunk/posts/loadSinglePostData';

const PostDetails = () => {
  const post = useSelector((state) => state.post);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSinglePostData(params.id));
  }, [dispatch, params.id]);

  return (
    <section id="post-details">
      <div className="container mx-auto mt-20 flex flex-col items-center gap-5 text-white">
        <img className="h-96" src={post.image} alt="" />
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="leading-8">{post.body}</p>
        <Link
          to="/"
          className="rounded-md py-2 px-4 bg-blue-500 flex items-center gap-1 transition-all hover:bg-blue-600"
        >
          <AiOutlineArrowLeft></AiOutlineArrowLeft> Go Back
        </Link>
      </div>
    </section>
  );
};

export default PostDetails;

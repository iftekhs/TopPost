import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="py-4 px-2  fixed top-0 w-full bg-gray-800 z-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h2 className="text-white text-4xl font-bold">
              <span className="text-blue-500">Top</span>
              Posts
            </h2>
          </Link>

          <ul className="flex gap-2 font-semibold text-white">
            <li className="hover:text-blue-400 transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-400 transition-all">
              <Link to="/dashboard/posts">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

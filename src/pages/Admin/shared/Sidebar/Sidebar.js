import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineDatabase, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';

const Sidebar = () => {
  const linkClass =
    'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ';
  const activeLinkClass = 'bg-gray-100 dark:bg-gray-700';

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/dashboard/posts"
                className={({ isActive }) => (isActive ? linkClass + activeLinkClass : linkClass)}
              >
                <AiOutlineDatabase className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></AiOutlineDatabase>
                <span className="ml-3">Posts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/add-post"
                className={({ isActive }) => (isActive ? linkClass + activeLinkClass : linkClass)}
              >
                <AiOutlineAppstoreAdd className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></AiOutlineAppstoreAdd>
                <span className="ml-3">Add Posts</span>
              </NavLink>
            </li>
            <li>
              <Link to={'/'} className={linkClass}>
                <FiHome className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FiHome>
                <span className="ml-3">Hom Page</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

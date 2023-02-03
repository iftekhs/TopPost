import DashboardLayout from '../layouts/DashboardLayout';
import AddPost from '../pages/Admin/AddPost/AddPost';
import Posts from '../pages/Admin/Posts/Posts';
import UpdatePost from '../pages/Admin/UpdatePost/UpdatePost';
import PostDetails from '../pages/PostDetails/PostDetails';

const { createBrowserRouter } = require('react-router-dom');
const { default: Main } = require('../layouts/Main');
const { default: Home } = require('../pages/Home/Home');

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/post/:id',
        element: <PostDetails></PostDetails>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/posts',
        element: <Posts></Posts>,
      },
      {
        path: '/dashboard/add-post',
        element: <AddPost></AddPost>,
      },
      {
        path: '/dashboard/update-post/:id',
        element: <UpdatePost></UpdatePost>,
      },
    ],
  },
]);

export default routes;

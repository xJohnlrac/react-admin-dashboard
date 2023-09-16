import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Orders from './pages/orders/Orders';
import Posts from './pages/posts/Posts';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import User from './pages/user/User';
import Users from './pages/users/Users';
import './styles/global.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const App = () => {

  const Layout = () => {
    return (
      <div className="main">
        <NavBar/>
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/users',
          element: <Users/>
        },
        {
          path: '/products',
          element: <Products/>
        },
        {
          path: '/users/:id',
          element: <User/>
        },
        {
          path: '/products/:id',
          element: <Product/>
        },
        {
          path: '/orders',
          element: <Orders/>
        },
        {
          path: '/posts',
          element: <Posts/>
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
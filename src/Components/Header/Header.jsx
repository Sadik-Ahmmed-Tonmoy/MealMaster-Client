import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

const {user, logOut} = useContext(AuthContext)
console.log(user)

const handleLogout =() => {
  logOut()
  .then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
}

  return (
    <div className='container mx-auto'>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar>
          <Link to='/' className='flex'>
            <img
              src="https://i.ibb.co/tYW0148/pngtree-burger-vector-illustration-with-filled-line-design-burger-clip-art-png-image-1923564-removeb.png"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />

            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Meal Master
            </span>
          </Link>
        </Navbar>
        <div className="flex md:order-2">
{user && <p className='mx-2 hidden md:block'>{user?.email}</p>}
{user?.photoURL && <img className='rounded-full h-12 mx-2 hidden md:block' title={user?.displayName} src={user?.photoURL} alt="" />}

          {user ?
            <Button color="success" onClick={handleLogout}>
              Logout
            </Button> : <NavLink
            to="/UserIdLayout/login">
            <Button>
              Login
            </Button>
          </NavLink>}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Home</NavLink>
          <NavLink
            to='/data/blogs'
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Blogs</NavLink>
        
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default Header;
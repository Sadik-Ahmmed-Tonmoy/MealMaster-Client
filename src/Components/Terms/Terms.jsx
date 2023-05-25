import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className='container'>
      <h2>terms</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum impedit non, numquam illo quas laudantium illum quia ad eos tempore. Quam natus deleniti cum possimus ad, provident at temporibus.</p>
      <p className='text-2xl font-bold'>go back to <Link to="/UserIdLayout/register" className="text-blue-600 hover:underline dark:text-blue-500">SignUp</Link></p>
    </div>
  );
};

export default Terms;
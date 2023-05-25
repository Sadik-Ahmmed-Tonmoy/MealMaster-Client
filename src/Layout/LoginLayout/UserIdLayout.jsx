import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import './UserIdLayout.css'
import { Spinner } from 'flowbite-react';

const UserIdLayout = () => {
  
  const navigation = useNavigation()
  return (
    <div>
      <Header></Header>
      <div className='flex justify-center items-center'>{navigation?.status === "loading" && <Spinner aria-label="Default status example" />}</div>
      <div className='outlet-height'>
        <Outlet>

        </Outlet>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default UserIdLayout;
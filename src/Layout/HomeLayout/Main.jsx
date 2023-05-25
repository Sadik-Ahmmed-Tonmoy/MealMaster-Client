
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import './Main.css'
import { Spinner } from 'flowbite-react';

const Main = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Header></Header>
      <div>{navigation?.status === "loading" && <Spinner aria-label="Default status example" />}</div>
      <div className='outlet-height'>
        <Outlet>

        </Outlet>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Main;
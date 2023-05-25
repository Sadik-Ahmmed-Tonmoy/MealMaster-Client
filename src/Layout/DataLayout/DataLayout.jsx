import React from 'react';
import './DataLayout.css'
import Header from '../../Components/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import { Spinner } from 'flowbite-react';

const DataLayout = () => {
  
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

export default DataLayout;
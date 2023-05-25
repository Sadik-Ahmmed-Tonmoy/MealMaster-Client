import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import CardHome from '../CardHome/CardHome';
import { useLoaderData } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../MyDocument/MyDocument';
import { Button } from 'flowbite-react';

const Home = () => {


  const chefData = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <Marquee speed={120} className='md:mt-5'>
        <img className='h-28 mx-12' src="https://i.ibb.co/PN6Y4G1/pad-thai-white-plate-with-lemon-wooden-table.jpg" alt="" />
        <img className='h-28 mx-12' src="https://i.ibb.co/TRLwYqN/thai-food-tom-yum-seafood-seafood-spicy-soup.jpg" alt="" />
        <img className='h-28 mx-12' src="https://i.ibb.co/HtpzTBF/fried-noodle-with-pork-soy-sauce-vegetable.jpg" alt="" />
        <img className='h-28 mx-12' src="https://i.ibb.co/L9BWGBM/top-view-tasty-pakistani-dish.jpg" alt="" />
        <img className='h-28 mx-12' src="https://i.ibb.co/4jqDRws/top-view-vegetable-soup-with-meat-inside-plate-grey.jpg" alt="" />
        <img className='h-28 mx-12' src="https://i.ibb.co/6RbhtRr/pad-thai-white-plate-with-lemon-wooden-table.jpg" alt="" />
        <img className='h-28 mx-12' src="https://i.ibb.co/z54YktQ/thai-food-som-tum-papaya-salad.jpg" alt="" />
        <img className='h-28 mx-12' src="https://i.ibb.co/HtpzTBF/fried-noodle-with-pork-soy-sauce-vegetable.jpg" alt="" />

        <img className='h-28 mx-12' src="https://i.ibb.co/TRLwYqN/thai-food-tom-yum-seafood-seafood-spicy-soup.jpg" alt="" />

        <br />
      </Marquee>
      <div className='grid md:grid-cols-3 container mx-auto'>
        {
          chefData.map(chef => <CardHome key={chef.id} chef={chef}></CardHome>)
        }
      </div>

      <div className='text-center container md:w-5/12 mx-auto border-8 p-2 md:my-5'>
        <h2 className='font-bold text-lg'>Healthy recipes</h2>
        <p>Share healthy and nutritious recipes that feature fresh, whole foods, such as fruits, vegetables, lean proteins, and whole grains. This can help visitors learn how to cook healthy meals and incorporate more nutritious ingredients into their diet.</p>
        <div className='md:w-5/12 mx-auto md:border rounded-md md:my-8 my-4'>
          <div className='hidden md:block'>
            <PDFViewer>
              <MyDocument></MyDocument>
            </PDFViewer>
          </div>
          <PDFDownloadLink document={<MyDocument />} fileName='FORM'>
            {({ loading }) => (loading ?
              <Button color="dark">
                Loading File...
              </Button> :
              <Button color="dark">
                Download Pdf
              </Button>)}
          </PDFDownloadLink>
        </div>
      </div>

    </div>
  );
};

export default Home;
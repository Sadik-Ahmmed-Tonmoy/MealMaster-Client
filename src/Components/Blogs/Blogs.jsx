
import { Accordion, Button } from 'flowbite-react';
import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../MyDocument/MyDocument';
import Lottie from "lottie-react";
import cooking from "../../assets/126364-cooking.json"

const Blogs = () => {
  return (
    <div className='container mx-auto my-3'>
      <Accordion collapseAll={true}>
        <Accordion.Panel>
          <Accordion.Title>
            Differences between uncontrolled and controlled components.
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              In React, a controlled component is a component where the value of an input element (such as a text box or checkbox) is controlled by React state. This means that when the user interacts with the component, such as typing in a text box or clicking on a checkbox, the state is updated to reflect the user's input.
              <br /><br />

              On the other hand, an uncontrolled component is a component where the value of an input element is not controlled by React state. Instead, the value is determined by the user's input or other external factors.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How to validate React props using PropTypes?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              In React, PropTypes is a built-in library that provides a way to validate the type and shape of props passed to a component. It is a helpful tool to ensure that the correct data types and structures are being passed into a component, and can help catch bugs and errors early on in development.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Tell us the difference between nodejs and express js.?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Node.js is a runtime environment that allows developers to build server-side applications using JavaScript. It is built on Chrome's V8 JavaScript engine and provides a non-blocking I/O model that makes it efficient and scalable for building network applications.
              <br />
              <br />
              Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features for building web applications and APIs, including routing, middleware, and templates. Express.js simplifies the process of building Node.js web applications by providing a set of pre-built features and components.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is a custom hook, and why will you create a custom hook?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between components. Custom hooks allow developers to extract common stateful logic from components into reusable functions, making code more modular and easier to maintain.
              <br /><br />

              Custom hooks can be created for any piece of stateful logic, such as fetching data from an API, managing form input, or handling user authentication. By creating custom hooks, developers can write code once and reuse it across multiple components, making it easier to share logic and avoid code duplication.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      <div className='md:w-3/12 mx-auto md:border rounded-md md:my-8 my-4'>
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
      <div className='static h-56 md:w-6/12 pb-40 border rounded mx-auto'>
         
          <Lottie className='h-72 pb-16 md:pb-12 ' animationData={cooking} loop={true} />
          
      </div>
    </div>
  );
};

export default Blogs;
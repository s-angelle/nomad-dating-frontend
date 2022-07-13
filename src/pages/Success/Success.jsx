import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css';

const Success = () => {
  // const location = useLocation();
  // console.log(useLocation)
    return (
        <div id='success-div'>
           <h2>Your adventure is being prepared. Thanks for choosing The Wander Shop.</h2>
          <img id='success-page-photo'src='https://www.aboutmanchester.co.uk/wp-content/uploads/2020/02/1046x616_traveler.jpg'/>

        </div>
    );
}

export default Success;

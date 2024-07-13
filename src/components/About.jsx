
import React, { useState } from 'react';
import Cards from './Cards';
import Aboutmodal from './Aboutmodal';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className='flex justify-center items-center py-24'>
        <Cards handleOpenModal={handleOpenModal} />
      </div>
      {showModal && <Aboutmodal closeModal={handleCloseModal} />}
    </div>
  );
};

export default About;

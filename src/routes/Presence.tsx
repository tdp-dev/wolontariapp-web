import React from 'react';
import { useNavigate } from 'react-router-dom';
import PresenceList from '@components/Lists/PresenceList';
import BackButton from '@components/BackButton';

const Presence: React.FC = () => {
  return (
    <>
      <div className='presence'>
        <div className='presence__header'>
          <div className='presence__title-wrapper'>
            <BackButton></BackButton>
            <h2 className='presence__title'>Obesności</h2>
          </div>
        </div>

        <div className='presence__list'>
          <PresenceList></PresenceList>
        </div>
      </div>
    </>
  );
};

export default Presence;

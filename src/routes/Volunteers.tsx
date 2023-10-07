import React, { useCallback } from 'react';
import ApplicationsList from '@components/Events/ApplicationsList';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import VolunteersList from '@components/Events/VolunteersList';

const Volunteers: React.FC = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <>
      <div className='volunteers'>
        <div className='volunteers__header'>
          <div className='volunteers__title-wrapper'>
            <ArrowLeft size={32} onClick={onClick}></ArrowLeft>
            <h2 className='volunteers__title'>Zgłoszenia do wolontariatu</h2>
          </div>
        </div>

        <div className='volunteers__list'>
          <VolunteersList></VolunteersList>
        </div>
      </div>
    </>
  );
};

export default Volunteers;

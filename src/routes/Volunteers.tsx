import React, { useCallback } from 'react';
import ApplicationsList from '@components/Lists/List';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import VolunteersList from '@components/Lists/VolunteersList';
import BackButton from '@components/BackButton';

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
            <BackButton></BackButton>
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

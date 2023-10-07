import React, { useCallback } from 'react';
import List from '@components/Lists/List';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Applications: React.FC = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <>
      <div className='application'>
        <div className='application__header'>
          <div className='application__title-wrapper'>
            <ArrowLeft size={32} onClick={onClick}></ArrowLeft>
            <h2 className='application__title'>Zgłoszenia do wolontariatu</h2>
          </div>
        </div>

        <div className='application__list'>
          <List></List>
        </div>
      </div>
    </>
  );
};

export default Applications;
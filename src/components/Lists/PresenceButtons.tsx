import { Check, X, Minus } from 'lucide-react';
import React from 'react';

const VolunteerListElement: React.FC = () => {
  return (
    <div className='presence-list-element__button-wrapper'>
      <div className='presence-list-element__button presence-list-element__button--accept'>
        <Check size={22} />
      </div>
      <div className='presence-list-element__button presence-list-element__button'>
        <Minus size={22} />
      </div>
      <div className='presence-list-element__button presence-list-element__button--reject'>
        <X size={22} />
      </div>
    </div>
  );
};

export default VolunteerListElement;

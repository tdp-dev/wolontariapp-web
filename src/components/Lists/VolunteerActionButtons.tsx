import { MessageSquare, Trash2 } from 'lucide-react';
import React from 'react';

const VolunteerListElement: React.FC = () => {
  return (
    <div className='volunteer-list-element__button-wrapper'>
      <div className='volunteer-list-element__button'>
        <MessageSquare size={22} />
      </div>
      <div className='volunteer-list-element__button volunteer-list-element__button--reject'>
        <Trash2 size={22} />
      </div>
    </div>
  );
};

export default VolunteerListElement;
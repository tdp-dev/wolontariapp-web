import React from 'react';

import { MessageSquare, Trash2 } from 'lucide-react';

const VolunteerListElement: React.FC = () => {
  return (
    <div className='volunteer-list-element'>
      <span className='volunteer-list-element__header-element'>20.03.2023</span>

      <span className='volunteer-list-element__header-element'>Mateusz</span>

      <span className='volunteer-list-element__header-element'>Borucki</span>

      <span className='volunteer-list-element__header-element'>10.12.2004 (18 lat)</span>

      <span className='volunteer-list-element__header-element'>mateuszborucki@gmail.com</span>

      <span className='volunteer-list-element__header-element'>+48 512 712 147</span>

      <span className='volunteer-list-element__header-element'>12.05.2013</span>

      <span className='volunteer-list-element__header-element'>104</span>

      <span className='volunteer-list-element__header-element'>
        <div className='volunteer-list-element__button-wrapper'>
          <div className='volunteer-list-element__button'>
            <MessageSquare size={22} />
          </div>
          <div className='volunteer-list-element__button volunteer-list-element__button--reject'>
            <Trash2 size={22} />
          </div>
        </div>
      </span>
    </div>
  );
};

export default VolunteerListElement;

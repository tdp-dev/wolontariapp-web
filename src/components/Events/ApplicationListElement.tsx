import React from 'react';

import { Check, X } from 'lucide-react';

const ApplicationsListElement: React.FC = () => {
  return (
    <div className='application-list-element'>
      <span className='application-list-element__header-element'>20.03.2023</span>

      <span className='application-list-element__header-element'>Mateusz</span>

      <span className='application-list-element__header-element'>Borucki</span>

      <span className='application-list-element__header-element'>10.12.2004 (18 lat)</span>

      <span className='application-list-element__header-element'>mateuszborucki@gmail.com</span>

      <span className='application-list-element__header-element'>+48 512 712 147</span>

      <span className='application-list-element__header-element'>12.05.2013</span>

      <span className='application-list-element__header-element'>104</span>

      <span className='application-list-element__header-element'>
        <div className='application-list-element__button-wrapper'>
          <div className='application-list-element__button application-list-element__button--accept'>
            <Check size={22} />
          </div>
          <div className='application-list-element__button application-list-element__button--reject'>
            <X size={22} />
          </div>
        </div>
      </span>
    </div>
  );
};

export default ApplicationsListElement;

import { Check, X } from 'lucide-react';
import React from 'react';

const ApplicationActionButtons: React.FC = () => {
  return (
    <div className='application-list-element__button-wrapper'>
      <div className='application-list-element__button application-list-element__button--accept'>
        <Check size={22} />
      </div>
      <div className='application-list-element__button application-list-element__button--reject'>
        <X size={22} />
      </div>
    </div>
  );
};

export default ApplicationActionButtons;

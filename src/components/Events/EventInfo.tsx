import Button from '@components/Button';
import React from 'react';

import { MapPin, User2 } from 'lucide-react';

export default function EventInfo() {
  return (
    <div className='event-info'>
      <h2 className='event-info__header'>
        <div className='event-info__header-text'>Informacje o wydarzeniu</div>
        <Button content='Edytuj'></Button>
      </h2>
      <div className='event-info__content'>
        <div className='event-info__image'></div>
        <div className='event-info__text'>
          <h2 className='event-info__title'>Dolore laboris Lorem sint</h2>
          <span className='event-info__date'>12.04.2023 - 12.10.2023</span>
          <p className='event-info__description'>
            nulla cillum nostrud et consectetur fugiat id deserunt elit ex enim est fugiat do exercitation culpa mollit mollit consequat duis nostrud ipsum deserunt occaecat in labore mollit officia
            non quis qui ad fugiat id
          </p>
          <div className='event-info__localization'>
            <div className='event-info__localization-icon'>
              <MapPin />
            </div>
            <div className='event-info__localization-text'>ul. Kobylińskiego 22</div>
          </div>
          <div className='event-info__people'>
            <div className='event-info__people-icon'>
              <User2 />
            </div>
            <div className='event-info__people-text'>120</div>
          </div>
        </div>
      </div>
    </div>
  );
}

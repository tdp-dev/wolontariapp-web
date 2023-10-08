import React from 'react';
import ListElement from './ListElement';
import Button from '@components/Button';
import PresenceButtons from './PresenceButtons';

export default function PresenceList() {
  return (
    <div className='presence-list'>
      <div className='presence-list__header'>
        <span className='presence-list__header-element'>Data złożenia wniosku</span>

        <span className='presence-list__header-element'>Imię</span>

        <span className='presence-list__header-element'>Nazwisko</span>

        <span className='presence-list__header-element'>Data urodzenia</span>

        <span className='presence-list__header-element'>Adres email</span>

        <span className='presence-list__header-element'>Numer telefonu</span>

        <span className='presence-list__header-element'>Wolontariusz od</span>

        <span className='presence-list__header-element'>Wykonane wolontariaty</span>

        <span className='presence-list__header-element'>Obecność</span>
      </div>
      <div className='presence-list__list'>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
        <ListElement>
          <PresenceButtons />
        </ListElement>
      </div>
      <div className='presence-list__buttons'>
        <div className='presence-list__button'>
          <Button content='Zaakceptuj wszystkie'></Button>
        </div>
        <div className='presence-list__button'>
          <Button content='Odrzuć wszystkie'></Button>
        </div>
      </div>
    </div>
  );
}

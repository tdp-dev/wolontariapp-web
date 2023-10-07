import React from 'react';
import ListElement from './ListElement';
import Button from '@components/Button';

export default function List() {
  return (
    <div className='application-list'>
      <div className='application-list__header'>
        <span className='application-list__header-element'>Data złożenia wniosku</span>

        <span className='application-list__header-element'>Imię</span>

        <span className='application-list__header-element'>Nazwisko</span>

        <span className='application-list__header-element'>Data urodzenia</span>

        <span className='application-list__header-element'>Adres email</span>

        <span className='application-list__header-element'>Numer telefonu</span>

        <span className='application-list__header-element'>Wolontariusz od</span>

        <span className='application-list__header-element'>Wykonane wolontariaty</span>

        <span className='application-list__header-element'>Decyzja</span>
      </div>
      <div className='application-list__list'>
        <ListElement></ListElement>
        <ListElement></ListElement>
        <ListElement></ListElement>
        <ListElement></ListElement>
        <ListElement></ListElement>
        <ListElement></ListElement>
        <ListElement></ListElement>
        <ListElement></ListElement>
        <ListElement></ListElement>
        <ListElement></ListElement>
      </div>
      <div className='application-list__buttons'>
        <div className='application-list__button'>
          <Button content='Zaakceptuj wszystkie'></Button>
        </div>
        <div className='application-list__button'>
          <Button content='Odrzuć wszystkie'></Button>
        </div>
      </div>
    </div>
  );
}

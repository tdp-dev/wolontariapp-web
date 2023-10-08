import React from 'react';
import ListElement from './ListElement';
import VolunteerActionButtons from './VolunteerActionButtons';

export default function VolunteersList() {
  return (
    <div className='volunteers-list'>
      <div className='volunteers-list__header'>
        <span className='volunteers-list__header-element'>Data złożenia wniosku</span>

        <span className='volunteers-list__header-element'>Imię</span>

        <span className='volunteers-list__header-element'>Nazwisko</span>

        <span className='volunteers-list__header-element'>Data urodzenia</span>

        <span className='volunteers-list__header-element'>Adres email</span>

        <span className='volunteers-list__header-element'>Numer telefonu</span>

        <span className='volunteers-list__header-element'>Wolontariusz od</span>

        <span className='volunteers-list__header-element'>Wykonane wolontariaty</span>

        <span className='volunteers-list__header-element'>Akcje</span>
      </div>
      <div className='volunteers-list__list'>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
        <ListElement><VolunteerActionButtons /></ListElement>
      </div>
    </div>
  );
}

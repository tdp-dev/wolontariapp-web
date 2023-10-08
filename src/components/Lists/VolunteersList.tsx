import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ListElement from './ListElement';
import VolunteerActionButtons from './VolunteerActionButtons';
import { useParams } from 'react-router-dom';
import API from 'src/helpers/apiConnector';

export default function VolunteersList() {
  const { eventId } = useParams();
  const [registrations, setRegistrations] = useState([]);

  const fetchRegistrations = useCallback(async () => {
    const { data } = await API.get(`/events/${eventId}/registrations?status=ACCEPTED`);
    setRegistrations(data);
  }, []);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const registrationsComponents = useMemo(() => {
    return registrations.map(({ id, user, date_created }) => (
      <ListElement
        key={id}
        id={id}
        firstName={user.first_name}
        lastName={user.last_name}
        dateOfBirth={user.date_of_born}
        email={user.email}
        phoneNumber='+48 885 472 749'
        userDateCreated={user.date_created.split('T')[0]}
        dateCreated={date_created.split('T')[0]}
      >
        <VolunteerActionButtons />
      </ListElement>
    ));
  }, [registrations]);

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
      <div className='volunteers-list__list'>{registrationsComponents}</div>
    </div>
  );
}

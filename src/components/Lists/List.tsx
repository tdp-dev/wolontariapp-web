import React, { useState, useCallback, useEffect, useMemo } from 'react';
import ListElement from './ListElement';
import Button from '@components/Button';
import ApplicationActionButtons from './ApplicationActionButtons';
import { useParams } from 'react-router-dom';
import API from 'src/helpers/apiConnector';

export default function List() {
  const { eventId } = useParams();
  const [registrations, setRegistrations] = useState([]);

  const fetchRegistrations = useCallback(async () => {
    const { data } = await API.get(`/events/${eventId}/registrations?status=REGISTERED`);
    setRegistrations(data);
  }, []);

  const onRemove = useCallback(
    async (registrationId: string) => {
      setRegistrations(registrations.filter((registration) => registration.id !== registrationId));
    },
    [registrations],
  );

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
        <ApplicationActionButtons
          id={id}
          onRemove={() => {
            onRemove(id);
          }}
        />
      </ListElement>
    ));
  }, [registrations]);

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
      <div className='application-list__list'>{registrations.length > 0 ? registrationsComponents : <h1>Brak elemntów</h1>}</div>
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

import React, { useCallback } from 'react';
import Button from '@components/Button';
import BlockWidget from '@components/BlockWidget';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { User2, Bell, Check, ClipboardList, Mail, FileText, BarChart4, Cog } from 'lucide-react';
import EventInfo from './EventInfo';
import EventSummary from './EventSummary';

export default function EventPage() {
  const { eventId } = useParams();

  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(-1);
  }, []);

  const navigateToApplications = useCallback(() => {
    navigate('./applications');
  }, []);

  const navigateToVolunteers = useCallback(() => {
    navigate('./volunteers');
  }, []);

  return (
    <div className='event-page'>
      <div className='event-page__header'>
        <div className='event-page__title-wrapper'>
          <ArrowLeft size={32} onClick={onClick}></ArrowLeft>
          <h2 className='event-page__title'>Dolore laboris Lorem sint</h2>
        </div>

        <div className='event-page__button'>
          <Button content='Ustawienia'></Button>
        </div>
      </div>

      <div className='event-page__event-info'>
        <EventInfo></EventInfo>
      </div>

      <div className='event-page__event-summary'>
        <EventSummary></EventSummary>
      </div>

      <div className='event-page__widgets'>
        <BlockWidget icon={<Bell />} content='Powiadomienia'></BlockWidget>
        <BlockWidget icon={<User2 />} content='Wolontariusze' onClick={navigateToVolunteers}></BlockWidget>
        <BlockWidget icon={<Check />} content='Lista obecności'></BlockWidget>
        <BlockWidget icon={<ClipboardList />} content='Zgłoszenia' onClick={navigateToApplications}></BlockWidget>
        <BlockWidget icon={<Mail />} content='Wiadomości'></BlockWidget>
        <BlockWidget icon={<FileText />} content='Raporty'></BlockWidget>
        <BlockWidget icon={<BarChart4 />} content='Statystyki'></BlockWidget>
        <BlockWidget icon={<Cog />} content='Ustawienia'></BlockWidget>
      </div>
    </div>
  );
}

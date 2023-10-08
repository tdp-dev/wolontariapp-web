import React, { useCallback, useEffect, useState } from 'react';
import Button from '@components/Button';
import BlockWidget from '@components/BlockWidget';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { User2, Bell, Check, ClipboardList, Mail, FileText, BarChart4, Cog } from 'lucide-react';
import EventInfo from './EventInfo';
import EventSummary from './EventSummary';
import API from 'src/helpers/apiConnector';
import axios from 'axios';
import BackButton from '@components/BackButton';

export default function EventPage() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState();
  const [image, setImage] = useState();

  const fetchEvent = useCallback(async () => {
    const { data } = await API.get(`/events/${eventId}`);
    setEventData(data);
    fetchImageHandler(data.image);
  }, [eventId]);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchImageHandler = async (imageUrl: string) => {
    const { data } = await axios.get(imageUrl, {
      responseType: 'blob',
    });
    let reader = new window.FileReader();
    reader.readAsDataURL(data);
    reader.onload = function (event) {
      let imageDataUrl = event.target.result;
      setImage(imageDataUrl);
    };
  };

  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(-1);
  }, []);

  const navigateToApplications = useCallback(() => {
    navigate('applications');
  }, []);

  const navigateToVolunteers = useCallback(() => {
    navigate('volunteers');
  }, []);

  const navigateToPresence = useCallback(() => {
    navigate('presence');
  }, []);

  return (
    <div className='event-page'>
      <div className='event-page__header'>
        <div className='event-page__title-wrapper'>
          <BackButton></BackButton>
          <h2 className='event-page__title'>Wróć do listy postów</h2>
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
        <BlockWidget icon={<Check />} content='Lista obecności' onClick={navigateToPresence}></BlockWidget>
        <BlockWidget icon={<ClipboardList />} content='Zgłoszenia' onClick={navigateToApplications}></BlockWidget>
        <BlockWidget icon={<Mail />} content='Wiadomości'></BlockWidget>
        <BlockWidget icon={<FileText />} content='Raporty'></BlockWidget>
        <BlockWidget icon={<BarChart4 />} content='Statystyki'></BlockWidget>
        <BlockWidget icon={<Cog />} content='Ustawienia'></BlockWidget>
      </div>
    </div>
  );
}

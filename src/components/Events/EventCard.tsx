import React, { useCallback, useEffect, useState } from 'react';
import Button from '@components/Button';
import { Route, Routes } from 'react-dom/client';
import EventPage from './EventPage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function EventCard({ id, title, description, date, image }: EventCardProps) {
  const navigate = useNavigate();
  const [imageUri, setImageUri] = useState(null);

  const fetchImageHandler = async (imageUrl: string) => {
    const { data } = await axios.get(imageUrl, {
      responseType: 'blob',
    });
    let reader = new window.FileReader();
    reader.readAsDataURL(data);
    reader.onload = function (event) {
      let imageDataUrl = event.target.result;
      setImageUri(imageDataUrl);
    };
  };

  useEffect(() => {
    fetchImageHandler(image);
  }, []);

  const onClick = useCallback(() => {
    navigate(`/events/${id}`);
  }, []);

  return (
    <div className='event-card'>
      <img src={imageUri} alt='event image' className='event-card__image' />

      <div className='event-card__text'>
        <h3 className='event-card__title'>{title}</h3>
        <span className='event-card__date'>{date}</span>
        <p className='event-card__description'>{description}</p>

        <div className='event-card__button'>
          <Button content='Zarządzaj' onClick={onClick}></Button>
        </div>
      </div>
    </div>
  );
}

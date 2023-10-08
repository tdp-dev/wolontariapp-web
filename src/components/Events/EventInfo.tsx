import Button from '@components/Button';
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import { MapPin, User2 } from 'lucide-react';
import { useParams } from 'react-router-dom';
import API from 'src/helpers/apiConnector';

export default function EventInfo() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [image, setImage] = useState(null);

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

  const fetchEvent = useCallback(async () => {
    const { data } = await API.get(`/events/${eventId}`);
    setEventData(data);
    fetchImageHandler(data.image);
  }, [eventId]);

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <div className='event-info'>
      <h2 className='event-info__header'>
        <div className='event-info__header-text'>Informacje o wydarzeniu</div>
        <Button content='Edytuj'></Button>
      </h2>
      <div className='event-info__content'>
        <div className='event-info__image'>
          <img src={image} alt='event-image' />
        </div>
        <div className='event-info__text'>
          <h2 className='event-info__title'>{eventData?.title}</h2>
          <span className='event-info__date'>{eventData?.date}</span>
          <p className='event-info__description'>{eventData?.description}</p>
          <div className='event-info__localization'>
            <div className='event-info__localization-icon'>
              <MapPin />
            </div>
            <div className='event-info__localization-text'>{eventData?.address}</div>
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

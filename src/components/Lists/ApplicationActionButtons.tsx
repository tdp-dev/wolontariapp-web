import { Check, X } from 'lucide-react';
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import API from 'src/helpers/apiConnector';

interface ApplicationActionButtonsProps {
  id: string;
  onRemove: () => void;
}

const ApplicationActionButtons: React.FC<ApplicationActionButtonsProps> = ({ id, onRemove }) => {
  const { eventId } = useParams();

  const onClick = useCallback(async (status: string) => {
    onRemove();
    await API.patch(`/events/${eventId}/registrations/${id}`, status, { headers: { 'Content-Type': 'application/json' } });
  }, []);

  return (
    <div className='application-list-element__button-wrapper'>
      <div
        className='application-list-element__button application-list-element__button--accept'
        onClick={() => {
          onClick('ACCEPTED');
        }}
      >
        <Check size={22} />
      </div>
      <div
        className='application-list-element__button application-list-element__button--reject'
        onClick={() => {
          onClick('REJECTED');
        }}
      >
        <X size={22} />
      </div>
    </div>
  );
};

export default ApplicationActionButtons;

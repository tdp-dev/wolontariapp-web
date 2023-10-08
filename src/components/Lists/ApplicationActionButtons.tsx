import { Check, X } from 'lucide-react';
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import API from 'src/helpers/apiConnector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ApplicationActionButtonsProps {
  id: string;
  onRemove: () => void;
}

const ApplicationActionButtons: React.FC<ApplicationActionButtonsProps> = ({ id, onRemove }) => {
  const notifySuccesAccept = () =>
    toast.success('Zaakceptowano wolontariusza', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const notifySuccessReject = () =>
    toast.success('Odrzucono wolontariusza', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

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
          notifySuccesAccept();
          onClick('ACCEPTED');
        }}
      >
        <Check size={22} />
      </div>
      <div
        className='application-list-element__button application-list-element__button--reject'
        onClick={() => {
          notifySuccessReject();
          onClick('REJECTED');
        }}
      >
        <X size={22} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ApplicationActionButtons;

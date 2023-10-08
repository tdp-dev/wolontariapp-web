import React, { useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className='button-back'>
      <ArrowLeft size={32} onClick={onClick}></ArrowLeft>
    </div>
  );
};

export default BackButton;

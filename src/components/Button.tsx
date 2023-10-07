import React from 'react';

interface ButtonProps {
  content: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;

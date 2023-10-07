import React from 'react';

interface ButtonProps {
  content: string;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return <button className="button">{content}</button>;
};

export default Button;

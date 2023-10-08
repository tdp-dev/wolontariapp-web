import React from 'react';

interface BlockWidgetProps {
  icon: JSX.Element;
  content: string;
  onClick?: () => void;
}

const BlockWidget: React.FC<BlockWidgetProps> = ({ icon, content, onClick }) => {
  return (
    <>
      <div className='block-widget' onClick={onClick}>
        <div className='block-widget__content'>
          <div className='block-widget__icon'>{icon}</div>
          <span className='block-widget__text'>{content}</span>
        </div>
      </div>
    </>
  );
};

export default BlockWidget;

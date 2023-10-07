import React, { ReactElement } from 'react';

interface MenuElementProps {
  content: string;
  icon: ReactElement;
}

const MenuElement: React.FC<MenuElementProps> = ({ content, icon }) => {
  return (
    <>
      <li>
        <a href="" className="menuElement">
          <div className="menuElement__icon">{icon}</div>
          <span className="menuElement__text">{content}</span>
        </a>
      </li>
    </>
  );
};

export default MenuElement;

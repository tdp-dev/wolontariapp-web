import React from 'react';
import TextLogo from '@components/TextLogo';
import Menu from './Menu';

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__logo">
          <TextLogo></TextLogo>
        </div>
        <div className="sidebar__menu">
          <Menu></Menu>
        </div>
      </aside>
    </>
  );
}

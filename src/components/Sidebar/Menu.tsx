import React from 'react';
import MenuElement from './MenuElement';
import { Home, CalendarDays } from 'lucide-react';

export default function Menu() {
  return (
    <>
      <ul className="menu">
        <MenuElement content="Pulpit" icon={<Home />}></MenuElement>
        <MenuElement content="Wydarzenia" icon={<CalendarDays />}></MenuElement>
      </ul>
    </>
  );
}

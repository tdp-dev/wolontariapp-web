import React from 'react';

interface ListElemntProps {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  dateCreated: string;
  userDateCreated: string;
  children: React.ReactNode;
}

const ListElement: React.FC<ListElemntProps> = ({ id, firstName, lastName, dateOfBirth, email, phoneNumber, dateCreated, userDateCreated, children }) => {
  return (
    <div className='application-list-element'>
      <span className='application-list-element__header-element'>{dateCreated}</span>

      <span className='application-list-element__header-element'>{firstName}</span>

      <span className='application-list-element__header-element'>{lastName}</span>

      <span className='application-list-element__header-element'>{dateOfBirth} (18 lat)</span>

      <span className='application-list-element__header-element'>{email}</span>

      <span className='application-list-element__header-element'>{phoneNumber}</span>

      <span className='application-list-element__header-element'>{userDateCreated}</span>

      <span className='application-list-element__header-element'>104</span>

      <span className='application-list-element__header-element'>{children}</span>
    </div>
  );
};

export default ListElement;

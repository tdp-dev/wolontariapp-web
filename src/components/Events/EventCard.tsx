import Button from '@components/Button';

export default function EventCard() {
  return (
    <div className="event-card">
      <div className="event-card__image"></div>

      <div className="event-card__text">
        <h3 className="event-card__title">Dolore laboris Lorem sint</h3>
        <span className="event-card__date">12.20.2023 - 20.12.2023</span>
        <p className="event-card__description">
          nulla cillum nostrud et consectetur fugiat id deserunt elit ex enim
          est fugiat do exercitation culpa mollit mollit consequat duis nostrud
          ipsum deserunt occaecat in labore mollit officia non quis qui ad
          fugiat id
        </p>

        <div className="event-card__button">
          <Button content="Zarządzaj"></Button>
        </div>
      </div>
    </div>
  );
}

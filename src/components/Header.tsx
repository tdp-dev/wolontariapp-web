import TextLogo from './TextLogo';
import Profile from './Profile';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <TextLogo></TextLogo>
      </div>
      <div className="header__profile">
        <Profile></Profile>
      </div>
    </header>
  );
}

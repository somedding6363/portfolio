import Nav from './Nav';
import Logo from '@/assets/Logo.svg?react';

interface HeaderProps {
  activeId: number;
  scrollToSection: (id: number) => void;
}
const Header = ({ activeId, scrollToSection }: HeaderProps) => {
  return (
    <header className="h-(--header-height) w-full gc:top-0 gc:left-1/2 gc:-translate-x-1/2 fixed z-10 flex items-center justify-center gc:flex-row flex-col gap-10 bg-light-header dark:bg-dark-header backdrop-blur-md">
      <div className="gc:absolute left-30 gc:top-1/2 gc:-translate-y-1/2">
        <Logo />
      </div>
      <Nav activeId={activeId} scrollToSection={scrollToSection} />
    </header>
  );
};

export default Header;

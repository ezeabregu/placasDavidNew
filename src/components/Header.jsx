import { HeaderContainer, NavLink, LogoImage } from "./headerStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage src="/assets/logosolonobackgroundnegro.PNG" alt="logo" />
      <nav>
        <NavLink href="#about">Sobre nosotros</NavLink>
        <NavLink href="#services">Nuestras placas</NavLink>
        <NavLink href="#contact">Contacto</NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

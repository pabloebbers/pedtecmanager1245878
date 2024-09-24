import { Navbar, Container, Nav } from "react-bootstrap";
import { HeaderContainer } from "../../styles/Header/Header.styles";
import { HeaderProps } from "../../../data/@types/Header/Header.type";
import { useScroll } from "../../../data/hooks/UseScroll/useScroll";

const Header = (props: HeaderProps) => {
  const scrolled = useScroll();
  
  return (
    <HeaderContainer
      scrolled={scrolled}
      HeaderbgColorOnScroll={props.HeaderbgColorOnScroll}
      HeaderLinksColorOnScroll={props.HeaderLinksColorOnScroll}
      HeaderLinkColor={props.HeaderLinkColor}
      logo={props.logo}
      favicon={props.favicon}
      className="fixed-top"
    >
      <Navbar expand="lg" className="w-100">
        <Container fluid>
          <Navbar.Brand>
            <img src={props.logo} className="img-fluid" alt="Logotipo" id="logoHeader" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {props.HeaderLinks &&
                props.HeaderLinks.map((link, index) => (
                  <Nav.Link key={index} href={link.href} className="menu">
                    {link.title}
                  </Nav.Link>
                ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;

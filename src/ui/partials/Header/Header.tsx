import { Navbar, Container, Nav } from "react-bootstrap";
import { HeaderContainer } from "../../styles/Header/Header.styles";
<<<<<<< HEAD
=======
import Logo from "../../assets/header/logo.webp";
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
import { HeaderProps } from "../../../data/@types/Header/Header.type";
import { useScroll } from "../../../data/hooks/UseScroll/useScroll";

const Header = (props: HeaderProps) => {
  const scrolled = useScroll();
<<<<<<< HEAD
  
=======

>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
  return (
    <HeaderContainer
      scrolled={scrolled}
      HeaderbgColorOnScroll={props.HeaderbgColorOnScroll}
      HeaderLinksColorOnScroll={props.HeaderLinksColorOnScroll}
      HeaderLinkColor={props.HeaderLinkColor}
<<<<<<< HEAD
      logo={props.logo}
      favicon={props.favicon}
=======
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
      className="fixed-top"
    >
      <Navbar expand="lg" className="w-100">
        <Container fluid>
          <Navbar.Brand>
<<<<<<< HEAD
            <img src={props.logo} className="img-fluid" alt="Logotipo" id="logoHeader" />
=======
            <img src={Logo} className="img-fluid" alt="Logotipo" />
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
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

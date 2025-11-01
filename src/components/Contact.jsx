import {
  ContactContainer,
  ContactInfo,
  ContactTitle,
  InfoItem,
  SocialIcons,
  MapContainer,
} from "./contactStyles";
import { FaPhoneSquareAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { PiMapPinLineFill } from "react-icons/pi";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactInfo>
        <ContactTitle>Contacto & Redes</ContactTitle>
        <InfoItem>
          <FaPhoneSquareAlt size={20} /> +54 9 11 3158-1752
        </InfoItem>
        <InfoItem>
          <IoMail size={20} /> alejandro.tonchuk2012@hotmail.com
        </InfoItem>
        <InfoItem>
          <PiMapPinLineFill size={20} /> San Martín, Billinghurst, Provincia de
          Buenos Aires
        </InfoItem>

        <SocialIcons>
          <a
            href="https://www.facebook.com/Placasdavid/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/placasdavid/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialIcons>
      </ContactInfo>

      <MapContainer>
        <img src="/assets/contact.JPG" alt="Ubicación de la empresa" />
      </MapContainer>
    </ContactContainer>
  );
};

export default Contact;

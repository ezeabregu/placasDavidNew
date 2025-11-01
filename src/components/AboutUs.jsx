import {
  AboutContainer,
  AboutTitle,
  AboutText,
  ImageItem,
  ListStyled,
} from "./aboutusStyles";
import { GiCheckMark } from "react-icons/gi";

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>Sobre Nosotros</AboutTitle>
      {/* <AboutText>
        Nos encargamos de solucionar tus problemas de humedad. Olvidate de
        romper las paredes, trabajamos con la tecnología de microevaporacion
        para darle una solución definitiva y en tan sólo 24 horas. Nuestras
        placas son fabricadas con yeso cerámico de 1° calidad y secadas a horno.
        Contactanos por Whatsapp para más información y te pasamos el
        presupuesto en el día.
      </AboutText> */}
      <AboutText>
        Nuestas placas decoran tus paredes y actúan como paneles evaporadores de
        humedad, que en forma progresiva y constante eliminan la humedad de tus
        paredes terminando asi con: manchas negras, pinturas descascaradas,
        humedad, malos olores, hongos y salitre. Las placas son:
      </AboutText>
      <ListStyled>
        <li>
          <GiCheckMark />
          Acústicas
        </li>
        <li>
          <GiCheckMark />
          Anti Hongos
        </li>
        <li>
          <GiCheckMark />
          Ignifugas
        </li>
        <li>
          <GiCheckMark />
          Muy resistentes
        </li>
        <li>
          <GiCheckMark />
          Decorativas
        </li>
        <li>
          <GiCheckMark />
          Aislante térmico
        </li>
        <li>
          <GiCheckMark />
          Ecológicas
        </li>
        <li>
          <GiCheckMark />
          Gran poder de absorción y microevaporación de humedad
        </li>
        <li>
          <GiCheckMark />
          Iluminan más tus ambientes
        </li>
        <li>
          <GiCheckMark />
          Ideales para placares embutidos con humedad
        </li>
      </ListStyled>
      <ImageItem src="/assets/aboutImage.jpeg" />
    </AboutContainer>
  );
};

export default AboutUs;

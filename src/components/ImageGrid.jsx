import {
  ImageGridContainer,
  GridContainer,
  ImageItem,
  AboutTitle,
} from "./imageGridStyles";

const ImageGrid = ({ images }) => {
  return (
    <ImageGridContainer>
      <AboutTitle>Algunos de nuestros trabajos</AboutTitle>
      <GridContainer>
        {images.map((img, id) => (
          <ImageItem key={id} src={img} alt={`img-${id}`} loading="lazy" />
        ))}
      </GridContainer>
    </ImageGridContainer>
  );
};

export default ImageGrid;

import React, { Fragment } from "react";
import { Image, Divider, Container, Button } from "semantic-ui-react";
import SlideShow from "react-image-show";
import {Link} from 'react-router-dom';
import FormPage from '../form/FormPage'

const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/"
];

const HomePage = () => {
  return (
    <Fragment>
        <Container style={{ marginTop: 60 }}>
      <Image src="/assets/banner.jfif" fluid />
      </Container>
      <Container textAlign="center" style={{ marginTop: 50 }}>
        Center Aligned
      </Container>
      <Container textAlign="justified">
        <b>Justified</b>
        <Divider />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <Button as={Link} to='/formpage' size="huge" inverted>
          
              Take me there!!
            </Button>
      </Container>
      <Divider />
      <Container>
        {/* <ImageGallery items={images} /> */}
        <SlideShow
          images={images}
          width="920px"
          imagesWidth="800px"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          indicators
          thumbnails
          fixedImagesHeight
        />
      </Container>
      <Divider />
      <Container textAlign="center" style={{ marginTop: 50 }}>
        Center Aligned
      </Container>
      <Container textAlign="justified" style={{ marginBottom: 50 }}>
        <b>Justified</b>
        <Divider />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </Container>
    </Fragment>
  );
};

export default HomePage;

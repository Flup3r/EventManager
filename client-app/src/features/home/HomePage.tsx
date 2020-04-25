import React, { Fragment } from "react";
import { Image, Divider, Container, Button, Grid } from "semantic-ui-react";
import SlideShow from "react-image-show";
import { Link } from "react-router-dom";

const images = [
  "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?cs=srgb&dl=beach-wedding-ceremony-during-daytime-169198.jpg&fm=jpg",
  "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?cs=srgb&dl=celebration-chairs-party-table-setting-50675.jpg&fm=jpg",
  "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?cs=srgb&dl=tables-with-flower-decors-2306281.jpg&fm=jpg",
  "https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?cs=srgb&dl=architecture-auditorium-blue-bright-colours-382297.jpg&fm=jpg",
  "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?cs=srgb&dl=celebration-colorful-colourful-cupcakes-587741.jpg&fm=jpg",
  "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?cs=srgb&dl=photo-of-women-wearing-masks-787961.jpg&fm=jpg",
];

const HomePage = () => {
  return (
    <Fragment>
        <Container style={{ marginTop: 60 }}>
        <Image src="/assets/banner.jpg" fluid />
      </Container>
      <Container textAlign="justified" style={{ marginTop: 30 }}>
        <h3>What it is all about</h3>
        <p>
        Event Manager platform is an all in one tool to manage real life events. It is a brand new initiative raising the quality standards in the event industry. Event Manager is a high-level planning tool for anyone that has a ton of resources to keep an eye. It can schedule projects, people, facilities, and equipment. It also provides a free online marketplace of certified event vendors and venues. This allows consumers to utilize the tool for free and find reliable, and pre-screened event professionals and suppliers. Anyone listed on the site has had to pass various checks to prove that they operate with integrity, so it acts as a seal of approval and quality.
        </p>
      </Container>
      <Divider />
      <Container>
      <Grid>
      <Grid.Column textAlign="center">
      <Button color="black" style={{justifyContent: "center"}} as={Link} to='/formpage' size="huge"  >
              Take me there!!
            </Button>
            </Grid.Column>
            </Grid>
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
      <Container>
      <Grid>
      <Grid.Column textAlign="center">
      <Button color="black" style={{justifyContent: "center"}} as={Link} to='/contact' size="huge" >
              Contact Us
            </Button>
            </Grid.Column>
            </Grid>
      </Container>
      <Divider />
      <Container textAlign="justified">
        <h3>About Us</h3>
        <p>
          We are a young company specializing in managing events.
          “Every event begins with a story” is our motto. With the collaborative approach, 
          we leverage deep insight into our clients’ desires to create signature events that tell a story. As experts in turning dreams into reality, 
          we also help in strengthening and expanding our clients’ brands, bringing unique inspiration in everything they do.
        </p>
      </Container>
    </Fragment>
  );
};

export default HomePage;

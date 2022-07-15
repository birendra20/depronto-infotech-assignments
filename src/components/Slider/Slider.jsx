import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as2.ftcdn.net/v2/jpg/03/70/51/01/1000_F_370510188_evswLTEyCpudmPM33vGx9CCFskk21ngV.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?t=st=1657872904~exp=1657873504~hmac=ca68a1ae5914e877b61db1112b9e8310ed380e5cb95d1861be0727b83792d390&w=1060"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-psd/fashion-sale-facebook-social-media-template_237398-217.jpg?t=st=1657844641~exp=1657845241~hmac=a50802387d109cf2c87cf2cf6fed1eacac1b36a409d5086fd1aac2d2357403eb&w=1060"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

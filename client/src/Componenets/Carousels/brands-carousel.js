import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import Image from "react-bootstrap/Image";
import { BrandsWrapper } from "./styles/brands.styled";

const BrandsCarousel = ({ items, interval }) => {
  const images = [
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042022/exichota.png?W0faYVY322te4p1xbGJBFnzfzmROhO5m&itok=eFFeQLMN",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042022/ggsa.jpg?kYsTYqPUyerKX1qNyq6uWFKivKDh_r37&itok=sMZp4qJP",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/avatar_2.png?KSOVhUV8Cp.F.bgb4fIMCr_f55P.P2Xc&itok=OZKpoea9",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/screen_shot_2022-02-10_at_8.48.19_pm.png?sy9PLkvjF_kWo302vzZEzgXZByizhYq5&itok=w3sEUGPi",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/lo.jpg?H1zELOUEogzA7qk25u_oZlH6_h6_Kozn&itok=Fco6vi56",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/museu_subaquatico_de_bonito_logo.png?rrCGgm94d5KXEO.t_Q_N_oEo2K8axD_H&itok=Yfzeln4T",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/slide_16_9_-_14.png?fQ1SU8mJ_wuOOQVqyxA.kxnPZJ8ZAhYy&itok=T-Y5avM4",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/axia_group_logo.png?gSTR4jG0kWVBPDdhEQhTMZ7SZZ8neAz2&itok=8PPZHbff",
    "https://d1yjjnpx0p53s8.cloudfront.net/papa_mark_working_draft.png?Vs2oxtrDtTvCJt7LtURPAJu4dOcYUPR9",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/image_2021-10-05_131306.png?3sk3GVSKdrh4EhLOfMoLsRYDnf1pqT2A&itok=WNNx9idp",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/image_2021-10-02_162532.png?C3.X4VrLT99IGv0bwF0i9YjglSiTH5X0&itok=JAS4ASza",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/screen_shot_2021-09-03_at_4.39.37_pm.png?joo_6Nf69CoNd71MgDZ_sQddmfkv1xwi&itok=xFHFUJfw",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/artboard_1-100_0.jpg?KNXh75yX0OetjbL0QD6PABTnvRkzKnIj&itok=4ASkbXB8",
  ];

  const deviceType = "desktop";

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1366 },
      items: 8,
      paritialVisibilityGutter: 60,
    },
    laptop: {
      breakpoint: { max: 1366, min: 1024 },
      items: 7,
      paritialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      paritialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 482, min: 0 },
      items: 4,
      paritialVisibilityGutter: 15,
      arrows: false,
    },
  };

  return (
    <BrandsWrapper>
      <Carousel
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
      >
        {images.slice(0, 20).map((image) => {
          return <Image draggable={false} src={image} />;
        })}
      </Carousel>
    </BrandsWrapper>
  );
};

BrandsCarousel.propTypes = {
  items: PropTypes.array,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
};

export default BrandsCarousel;

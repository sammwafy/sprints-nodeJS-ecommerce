import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const ProductImgs = (props) => {
  const imgs = props?.imgs;
  const mainImgIndex = props.mainImg;

  const [mainImg, setMainImg] = useState("");
  const [mainImgPosition, setMainImgPosition] = useState("0 0");

  useEffect(() => {
    if (imgs) {
      setMainImg(imgs[mainImgIndex]);
    }
  }, [imgs]);

  // setMainImg(res?.data?.image[res?.data?.featuredImg]);
  const mainImgHandler = (img) => {
    setMainImg(img);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMainImgPosition(`${x}% ${y}%`);
  };

  return (
    <Row>
      <Col lg={2} className="thumbImgs">
        {imgs?.map((img) => (
          <Image src={img} onClick={() => mainImgHandler(img)} />
        ))}
      </Col>
      <Col
        lg={10}
        className="mainImg"
        style={{
          backgroundImage: `url(${mainImg})`,
          backgroundPosition: mainImgPosition,
        }}
        onMouseMove={handleMouseMove}
      ></Col>
    </Row>
  );
};

export default ProductImgs;

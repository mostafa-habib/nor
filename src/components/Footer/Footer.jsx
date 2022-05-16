import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "الرئيسية",
    url: "#",
  },
  {
    display: "من نحن",
    url: "#",
  },

  {
    display: "أقسام الدار",
    url: "#",
  },

  {
    display: "الاشتراكات",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "قواعد الأمان",
    url: "#",
  },
  {
    display: "الاشتراك",
    url: "#",
  },

  {
    display: "دليل الدفع",
    url: "#",
  },

  {
    display: "شروط الخدمة",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4 mt-5 pt-5">
            <h2 className="d-flex align-items-center gap- mb-3">دار الأنوار</h2>

            <div className="follows ">
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mt-5 pt-5">
            <h6 className="fw-bold ">أكتشف</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mt-5 pt-5">
            <h6 className="fw-bold">معلومات</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mt-5 pt-5 contact">
            <h6 className="fw-bold">تواصل معنا</h6>

            <p>العنوان </p>
            <p> التليفون </p>
            <p>الإيميل</p>
          </Col>
        </Row>
        <Row>
          <span className="text-center mt-3">
            تم إنشاءه بواسطة cord digital
          </span>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import image from "./../../assests/images/vector1.gif";
import img from "./../../assests/images/wind.png";
import img1 from "./../../assests/images/earth.png";


import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "تمارين متنوعة",
    lesson: 12,
    students: 12,
    rating: 5,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "ألعاب تفاعيلة",
    lesson: 12,
    students: 12,
    rating: 5,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "دروس ممتعة",
    lesson: 12,
    students: 12,
    rating: 5,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section className="courses__section">
      <img src={img} className="shape" />
      <img src={img1} className="shape1" />
              <div className="course__top">

                <div>
                <h2>ماذا نقدم؟</h2>
                <p>
                  يهدف دار الأنوار إلى تعليم اللغة العربية للأطفال من عمر 4 - 10
                  سنوات من خلال اللعب والتسلية دون إشعار الطفل بالعملية
                  التعليمية، حيث يقدم للطفل رحلة مليئة بالمتعة والفائدة بأساليب
                  تعليمية مبتكرة ومميزة ولا تتطلب أي معرفة مسبقة بالقراءة أو
                  الكتابة
                </p>
                </div>
                <button className="btn btn__courses">للمزيد</button>

              </div>
            
            
            <div className="gif__img">
            <img src={image} />
            </div>
        
    </section>
  );
};

export default Courses;

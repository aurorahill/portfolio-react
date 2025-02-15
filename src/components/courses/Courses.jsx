import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import classes from "./Courses.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import LinkButton from "../UI/link-button/LinkButton";
import { GrCertificate } from "react-icons/gr";

const Courses = () => {
  const { language, translations } = useContext(LanguageContext);
  return (
    <section
      id="courses"
      className={classes.courses}
    >
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="shine">{translations[language].coursesTitle}</h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          autoplay={true}
          speed={3000}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            550: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {translations[language].courses.map((course, index) => (
            <SwiperSlide
              key={index}
              className={`card ${classes.courses__card}`}
            >
              <div className={classes.courses__stacks}>
                {course.stacks.map((item, index) => (
                  <div
                    key={index}
                    className={classes.courses__logo}
                  >
                    <img
                      src={item.svg}
                      alt={item.name}
                    />
                  </div>
                ))}
              </div>
              <h3 className={classes.courses__title}>{course.title}</h3>
              <p className="text-muted">{course.institution}</p>
              <p className={classes.courses__tutor}>
                {translations[language].coursesInstructor}: {course.tutor}
              </p>
              <LinkButton
                link={course.verifyLink}
                icon={<GrCertificate />}
                className={classes.courses__verify}
              >
                {language === "en" ? "Certificate" : "Certyfikat"}
              </LinkButton>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;

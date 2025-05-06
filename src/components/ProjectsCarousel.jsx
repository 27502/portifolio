import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import './projectCarousel.css';

const ProjectsCarousel = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <div className="project-card">
            <h3 className="project-title">Project 1</h3>
            <p className="project-description"><a href="https://github.com/27502">Barcha projectlarni ko'rish</a></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card">
            <h3 className="project-title">Project 2</h3>
            <p className="project-description"><a href="https://github.com/27502">Barcha projectlarni ko'rish</a></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card">
            <h3 className="project-title">Project 3</h3>
            <p className="project-description"><a href="https://github.com/27502">Barcha projectlarni ko'rish</a></p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProjectsCarousel;

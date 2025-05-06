import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "GitHub",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    description:
      "GitHub — bu dasturchilar kodlarini saqlashi, versiyalarni boshqarishi va birgalikda ishlashi mumkin bo‘lgan platformadir. Open source loyihalar uchun ayniqsa keng qo‘llaniladi.",
    link: "https://github.com"
  },
  {
    title: "React + Vite",
    image: "https://vitejs.dev/logo.svg",
    description:
      "Vite — React uchun tezkor va zamonaviy frontend dasturlash muhitidir. Bu loyiha yuklanishini sezilarli tezlashtiradi va ishlab chiquvchiga qulay ishlash imkonini beradi.",
    link: "https://vitejs.dev"
  },
  {
    title: "Next.js",
    image: "https://avatars.mds.yandex.net/i?id=8ef78581c17642092c8cd70ffa198848_l-5291751-images-thumbs&n=13",
    description:
      "Next.js — React asosidagi framework bo‘lib, SSR va SSG funksiyalarini taqdim etadi. SEO uchun qulay, tez va kuchli web-ilovalar yaratish imkonini beradi.",
    link: "https://nextjs.org"
  },
  {
    title: "Zustand",
    image: "https://blog.logrocket.com/wp-content/uploads/2021/03/managing-react-state-zustand.png",
    description:
      "Zustand — bu React ilovalari uchun engil va qulay holat (state) boshqaruv kutubxonasidir. Redux kabi murakkabliksiz ishlaydi, va foydalanuvchilar orasida ommalashmoqda.",
    link: "https://zustand-demo.pmnd.rs"
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Texnologiyalarim</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

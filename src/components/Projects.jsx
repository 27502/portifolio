import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Frontend Dasturlash Sohasidagi Loyihalarim</h2>
      <div className="project-list">
        {/* Loyiha 1 */}
        <div className="project-card">
          <img src="/images/project1.jpg" alt="Loyiha 1" className="project-img" />
          <div className="project-content">
            <h3>HTML, CSS va JavaScript Asoslari</h3>
            <p>
              Ushbu loyiha orqali men veb-sahifalar tuzilishini yaratish, ularni bezash va interaktivlik qo'shish bo'yicha asosiy bilimlarni o'rgandim. HTML yordamida sahifa tuzilishini, CSS bilan dizaynni va JavaScript orqali foydalanuvchi bilan o'zaro aloqani ta'minladim.
            </p>
          </div>
        </div>

        {/* Loyiha 2 */}
        <div className="project-card">
          <img src="/images/project2.jpg" alt="Loyiha 2" className="project-img" />
          <div className="project-content">
            <h3>Responsive Dizayn va Media Queries</h3>
            <p>
              Bu loyihada turli qurilmalarda to'g'ri ko'rinadigan veb-sahifalar yaratishga e'tibor qaratdim. Media queries yordamida sahifaning turli ekran o'lchamlariga moslashuvchanligini ta'minladim, bu esa foydalanuvchi tajribasini yaxshiladi.
            </p>
          </div>
        </div>

        {/* Loyiha 3 */}
        <div className="project-card">
          <img src="/images/project3.jpg" alt="Loyiha 3" className="project-img" />
          <div className="project-content">
            <h3>JavaScript va DOM Manipulyatsiyasi</h3>
            <p>
              Ushbu loyiha davomida men Document Object Model (DOM) bilan ishlashni o'rgandim. JavaScript orqali sahifadagi elementlarni dinamik ravishda o'zgartirish, hodisalarni boshqarish va foydalanuvchi bilan interaktivlikni oshirishga erishdim.
            </p>
          </div>
        </div>

        {/* Loyiha 4 */}
        <div className="project-card">
          <img src="/images/project4.jpg" alt="Loyiha 4" className="project-img" />
          <div className="project-content">
            <h3>Frontend Ramkalar: React.js</h3>
            <p>
              Bu loyihada men React.js kutubxonasi bilan tanishdim. Komponentlar asosida veb-ilovalar yaratish, holatni boshqarish va virtual DOM bilan ishlash orqali zamonaviy veb-ilovalar ishlab chiqishni o'rgandim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

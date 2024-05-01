import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Junior Software Engineer Trainee at Geojit Technologies"
            date="Jan-2022 — May-2022"
            description="Developed a website for FinCorp, which is a leading Investment Banking Company based in the Sultanate of Oman, using Angular framework.  
              I gained hands-on experience with technologies such as Bootstrap, HTML, JavaScript and more through practical   exercises and projects.
            	  Implemented modern web development practices, including responsive design and a 
                user-friendly interface, to enhance the overall user experience.
              Designed and implemented a robust admin panel for FinCorp, utilizing Angular framework features. 
            "
          />
          <TimelineItem
            title="MEA(R)N Stack Development Intern at Luminar Technolab "
            date="Aug-2021 — Dec-2021"
            description="Proficient in front-end technologies such as HTML, CSS, Bootstrap, JavaScript, Angular and ReactJs for creating visually appealing and responsive user interfaces.
             SDeveloped small-scale applications, including a bank application and weather application, showcasing proficiency 
            in end-to-end development.
            "
          />
          
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Master of Computer Application"
            date="2022 — 2024"
            description="CGPA: 8.6"
          />
          <TimelineItem
            title="Bachelor of Computer Application"
            date="2018 — 2021"
            description="CGPA: 7.45"
          />
          <TimelineItem
            title="Intermediate(HSE)"
            date="2016 — 2018"
            description="Percentage: 84.44%"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="CSS" value={75} />
          <SkillItem title="HTML" value={75} />
          <SkillItem title="SCSS" value={75} />
          <SkillItem title="Bootstrap" value={60} />
          <SkillItem title="JavaScript" value={70} />
          <SkillItem title="ReactJs" value={75} />
          <SkillItem title="Angular" value={70} />
          <SkillItem title="Python" value={50} />
          <SkillItem title="OOPS concept" value={60} />
          <SkillItem title="Git" value={70} />
          <SkillItem title="NodeJs" value={60} />
          <SkillItem title="ExpressJs" value={60} />
          <SkillItem title="MongoDB" value={60} />
          <SkillItem title="MySQL" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;

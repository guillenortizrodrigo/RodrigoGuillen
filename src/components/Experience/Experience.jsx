import React, { useState } from 'react';
import './Experience.css'; // Importa tu archivo de estilos CSS
import Card from '../Card/Card';

function Experience() {
  const [expandedClass, setExpandedClass] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleHover = (className, item) => {
    setExpandedClass(className);
    setSelectedItem(item);
  };

  const handleLeave = () => {
    setExpandedClass('');
    setSelectedItem(null);
  };

  return (
      <div id='experience' className={`containerexp ${expandedClass}`} onMouseLeave={handleLeave}>
        <div className={`item item1ex ${selectedItem === 'item1' ? 'selected' : ''}`} onClick={() => handleHover('expanded1', 'item1')}>
          <h1>Experience</h1>
        </div>
        <Card
          title="Machine Learning Engineer"
          place="Microsoft"
          duration="2024 – 2025"
          description="Provided technical support to clients and partners in 
          implementing AI solutions using Azure Machine Learning. Built models 
          from scratch and fine-tuned pre-trained models based on specific business needs. 
          Collaborated with cross-functional teams to optimize workflows and ensure seamless model deployment at scale."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item2"
          expanded="expanded2"
          section="ex"
        />
        <Card
          title="Fullstack Developer"
          place="Aumenta/Somesante"
          duration="2025"
          description="Developed a clean architecture system using Angular for the frontend and .NET for the backend.
           Participated in technical planning, performance optimization, and UX enhancements. Followed Scrum methodology and used 
           Azure DevOps for task management and continuous delivery."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item3"
          expanded="expanded3"
          section="ex"
        />
        <Card
          title="Sales and Software Engineer"
          place="Aumenta Filestack"
          duration="2022 – 2024"
          description="Built web and mobile applications with Node.js, Express, Ext JS, React, Swift, and Android Studio.
           Designed data visualizations and developed an AI model for customer retention analysis. Provided client support, 
           hosted webinars, and created technical content for training and onboarding."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item4"
          expanded="expanded4"
          section="ex"
        />
        <Card
          title="Fullstack Developer"
          place="Laconta"
          duration="2021 – 2022"
          description="Worked on web and mobile development projects using Django, React, React Native, and Android Studio.
           Integrated Google APIs, implemented custom features, and used Git for version control and collaboration across the development team."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item5"
          expanded="expanded5"
          section="ex"
        />
        <Card
          title="Software Developer"
          place="Enercon"
          duration="2020 – 2021"
          description="Developed a robust product and automation system for service stations deployed in over 25 locations in Mexico.
           Built tools with Python, Django, and React, and implemented a modern Android-based payment system that led to significant monthly savings. 
           Used Git for version control across all projects."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item6"
          expanded="expanded6"
          section="ex"
        />
      </div>
  );
}

export default Experience;

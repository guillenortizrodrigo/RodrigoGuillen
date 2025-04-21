// Education2.js
import React, { useState, useEffect } from 'react';
import './Education.css';
import Card from '../Card/Card';

function Education() {
  const [expandedClass, setExpandedClass] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleHover = (className, item) => {
    setExpandedClass(className);
    setSelectedItem(item);
  };

  const handleLeave = () => {
    setExpandedClass('');
    setSelectedItem(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Detecta en primer render
    window.addEventListener('resize', handleResize); // Detecta en resize

    return () => window.removeEventListener('resize', handleResize); // Limpieza
  }, []);

  const cards = [
    {
      title: "Technician in Automotive Mechanics",
      place: "Grupo CEDVA",
      duration: "2017 – 2019",
      description: "Trained in combustion engine systems and mechanical diagnostics. Developed technical skills in vehicle maintenance and repair, with a specialization in gasoline-powered engines.",
      item: "item1",
      expanded: "expanded1"
    },
    {
      title: "Diploma in Electronic Instrumentation and Solar Energy",
      place: "Instituto de Investigación en Comunicación Óptica, UASLP",
      duration: "2019 – 2020",
      description: "Acquired knowledge in solar energy systems, electronic circuit design, and instrumentation tools. Focused on hands-on applications and sustainability projects related to renewable energy.",
      item: "item2",
      expanded: "expanded2"
    },
    {
      title: "Diploma in Machine Learning and Artificial Neural Networks",
      place: "Universidad Anáhuac México",
      duration: "2023 – 2024",
      description: "Completed training in machine learning fundamentals, neural networks, and deep learning techniques. Gained hands-on experience with Python, TensorFlow, and real-world projects involving data classification, image recognition, and prediction models.",
      item: "item3",
      expanded: "expanded3"
    },
    {
      title: "Bachelor's Degree in Physics Engineering",
      place: "Universidad Autónoma de San Luis Potosí",
      duration: "2016 – 2020",
      description: "Comprehensive training in advanced mathematics, physics, and computer science. Gained strong foundations in electronics, signal processing, and scientific programming, which later enabled a smooth transition into AI and machine learning.",
      item: "item4",
      expanded: "expanded4"
    }
  ];

  const orderedCards = isMobile ? [...cards].reverse() : cards;

  const educationDiv = (
    <div className={`item item5ed ${selectedItem === 'item5' ? 'selected' : ''}`} onClick={() => handleHover('expanded5', 'item5')}>
      <h1>Education</h1>
    </div>
  );

  return (
    <div id='education' className={`container ${expandedClass}`} onMouseLeave={handleLeave}>
      {isMobile && <div className="responsive-separator" />}
      {isMobile && educationDiv}
      {orderedCards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          place={card.place}
          duration={card.duration}
          description={card.description}
          selectedItem={selectedItem}
          handleHover={handleHover}
          item={card.item}
          expanded={card.expanded}
          section="ed"
        />
      ))}
      {!isMobile && educationDiv}
    </div>
  );
}

export default Education;

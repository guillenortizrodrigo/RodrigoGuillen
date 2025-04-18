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
      title: "Automative Mechanics",
      place: "Cedva",
      duration: "2017 - 2019",
      item: "item1",
      expanded: "expanded1"
    },
    {
      title: "Diploma at Electronics",
      place: "Instituto de Investigacion en Comunicacion Optica",
      duration: "2019 - 2020",
      item: "item2",
      expanded: "expanded2"
    },
    {
      title: "Diploma at Machine Learning",
      place: "Universidad Anahuac",
      duration: "2023 - 2024",
      item: "item3",
      expanded: "expanded3"
    },
    {
      title: "Ingeniero Fisico",
      place: "Universidad Autonoma de San Luis Potosi",
      duration: "2016 - 2020",
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
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum."
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

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
          duration="2017 - 2019"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item2"
          expanded="expanded2"
          section="ex"
        />
        <Card
          title="Fullstack Developer"
          place="Aumenta/Somesante"
          duration="2019 - 2020"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item3"
          expanded="expanded3"
          section="ex"
        />
        <Card
          title="Sales and Software Developer"
          place="Aumenta Filestack"
          duration="2023 - 2024"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item4"
          expanded="expanded4"
          section="ex"
        />
        <Card
          title="Fullstack Developer"
          place="Laconta"
          duration="2016 - 2020"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum."
          selectedItem={selectedItem}
          handleHover={handleHover}
          item="item5"
          expanded="expanded5"
          section="ex"
        />
        <Card
          title="Software Developer"
          place="Microsoft"
          duration="2017 - 2019"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum."
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

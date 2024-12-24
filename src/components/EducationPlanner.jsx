import styles from './EducationPlanner.module.css'
import React, { useState, useEffect } from 'react';

const EducationPlanner = () => {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [studyHours, setStudyHours] = useState('');


  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
    if (storedSubjects) {
      setSubjects(storedSubjects);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = () => {
    if (subjectName && studyHours > 0) {
      setSubjects([...subjects, { name: subjectName, hours: studyHours }]);
      setSubjectName('');
      setStudyHours('');
    }
  };

  const adjustHours = (index, delta) => {
    const newSubjects = [...subjects];
    newSubjects[index].hours = Math.max(0, newSubjects[index].hours + delta);
    setSubjects(newSubjects);
  };

  return (
    <div className={styles.container}>
      
      <div>
        <input
          type="text"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Study Hours"
          value={studyHours}
          onChange={(e) => setStudyHours(Number(e.target.value))}
        />
        <button onClick={addSubject}>Add </button>
      </div>
     
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject.name} - {subject.hours} hours
            <button onClick={() => adjustHours(index, 1)}>+</button>
            <button onClick={() => adjustHours(index, -1)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationPlanner;
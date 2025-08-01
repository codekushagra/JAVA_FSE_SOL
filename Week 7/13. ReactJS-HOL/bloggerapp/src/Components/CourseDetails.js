import React from 'react';

const CourseDetails = ({ courses }) => {
  return (
    <div>
      <h2>Course Details</h2>
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <div key={index}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
};

export default CourseDetails;

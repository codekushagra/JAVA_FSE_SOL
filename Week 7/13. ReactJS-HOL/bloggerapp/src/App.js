import React from 'react';
import CourseDetails from './Components/CourseDetails';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import "./App.css"

function App() {
  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/20201' }
  ];

  const books = [
    { id: 1, bname: 'Master React', price: 670 },
    { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 3, bname: 'Mongo Essentials', price: 450 }
  ];

  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      content: 'Welcome to learning React!'
    },
    {
      title: 'Installation',
      author: 'Schewzdenier',
      content: 'You can install React from npm.'
    }
  ];

  return (
    <div className="app-container">
  <div className="section">
    {showCourses && <CourseDetails courses={courses} />}
  </div>

  <div className="section">
    {showBooks ? <BookDetails books={books} /> : <p>No Books to show</p>}
  </div>

  <div className="section">
    {showBlogs && blogs.length ? <BlogDetails blogs={blogs} /> : null}
  </div>
</div>

  );
}

export default App;

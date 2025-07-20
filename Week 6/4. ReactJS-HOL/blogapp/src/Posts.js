// src/Posts.js
import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  
  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  
  componentDidMount() {
    this.loadPosts();
  }

  
  componentDidCatch(error, info) {
    alert("Something went wrong: " + error);
    this.setState({ hasError: true });
  }

  
  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h1>Failed to load posts.</h1>;
    }

    return (
      <div>
        <h1>All Posts</h1>
        {posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

import React, { Component } from "react";
import { connect } from "react-redux";
import { SyncLoader } from "react-spinners";
import { fetchPosts } from "../redux/actions/postsActions";

const Blog = (props) => {
  console.log(props);
  const cargarPosts = () => {
    props.dispatch(fetchPosts());
  };
  return (
    <div>
      <h1>Nuevas entradas del blog</h1>
      <button onClick={cargarPosts}>Cargar posts</button>

      {props.blog.isFetching ? (
        <SyncLoader />
      ) : (
        <ul>
          {props.blog.posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default connect((state) => {
  return state;
}, null)(Blog);

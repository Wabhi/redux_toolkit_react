import "./styles.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../src/redux/features/postSlice";

export default function App() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return <h1 className="loading">I AM LOADING CONTENT..........</h1>;
  }
  return (
    <div className="App">
      <h1>REDUX FOR STATE MANAGEMENT</h1>
      <h5>USING REDUX TOOLKIT</h5>
      {posts.map((item, index) => {
        return (
          <div key={index} className="main_div">
            <p>{item.id}</p>
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

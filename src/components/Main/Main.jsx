import React, { useEffect, useState } from "react";
import axios from "axios";
import './Main.scss';
import Button from "../Button/Button";

const Main = () => {
  const [joke, setJoke] = useState();

  const getJokes = async () => {

    const url = `http://localhost:3000/jokes/random`;
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      const finalResult = response.data.joke;
      console.log(finalResult);
      return finalResult;
    } catch (error) {
      console.error("Error getJokes: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getJokes();
      setJoke(result);
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="main__joke-container">
        <h2 class="main__joke">{joke}</h2>
      </div>

      <section class="comment-section">
        <h1 class="main__section-header">Comments</h1>
        <form id="commentForm" class="comment-section__container">
          <div class="comment-section__form">
            <div class="comment-section__form-div">
              <label for="name" class="comment-section__label">
                NAME
              </label>
              <input
                name="name"
                placeholder="Enter your name"
                class="comment-section__field comment-section__field-name"
              />
            </div>
            <div class="comment-section__form-div">
              <label for="comment" class="comment-section__label">
                COMMENT
              </label>
              <textarea
                name="comment"
                placeholder="Add a new comment"
                class="comment-section__field"
              ></textarea>
            </div>
            <Button />
          </div>
        </form>
        {/* <!-- Added comments Section --> */}
        <div class="comments__container"></div>
      </section>
    </main>
  );
};

export default Main;

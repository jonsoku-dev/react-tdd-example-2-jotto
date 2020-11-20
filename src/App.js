import React, { Component } from "react";
import "./App.css";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import Input from "./Input";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <Input />
        <GuessedWords
          guessedWords={[
            {
              guessedWord: "train",
              letterMatchCount: 3,
            },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(App);

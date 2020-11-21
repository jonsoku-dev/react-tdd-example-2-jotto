import React from "react";
import PropTypes from "prop-types";
import LanguageContext from './contexts/languageContext'
import stringsModule from './helpers/strings'

const Input = ({ secretWord }) => {
  const language = React.useContext(LanguageContext);
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <div data-test={"component-input"}>
      <form className={"form-inline"}>
        <input
          data-test={"input-box"}
          className={"mb-2 mx-sm-3"}
          type={"text"}
          placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
      </form>
      <button
        data-test={"submit-button"}
        className={"btn btn-primary mb-2"}
        onClick={(evt) => {
          evt.preventDefault();
          setCurrentGuess("");
        }}
      >
          {stringsModule.getStringByLanguage(language, 'submit')}
      </button>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;

import css from './Options.module.css';
// import { useState } from 'react';

const Options = ({ onUpdate, counter, onReset }) => {
  return (
    <ul className={css.optionsList}>
      <li>
        <button onClick={onUpdate} className={css.optionsButton} type="button">
          Good
        </button>
      </li>
      <li>
        <button onClick={onUpdate} className={css.optionsButton} type="button">
          Neutral
        </button>
      </li>
      <li>
        <button onClick={onUpdate} className={css.optionsButton} type="button">
          Bad
        </button>
      </li>

      {counter === 0 ? null : (
        <li>
          <button onClick={onReset} className={css.optionsButton} type="button">
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;

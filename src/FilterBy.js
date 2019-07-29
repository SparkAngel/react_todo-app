import React from 'react';
import PropTypes from 'prop-types';

const FilterBy = ({ handleFilterBy }) => (
  <>
    <li>
      <a
        onClick={() => handleFilterBy('active')}
        href="#/"
        className="selected"
      >
    Active
      </a>
    </li>
    <li>
      <a
        href="#/active"
        onClick={() => handleFilterBy('all')}
      >
      All
      </a>
    </li>
    <li>
      <a
        href="#/completed"
        onClick={() => handleFilterBy('completed')}
      >
    Completed
      </a>
    </li>
  </>
);

FilterBy.propTypes = {
  handleFilterBy: PropTypes.func.isRequired,
};

export default FilterBy;
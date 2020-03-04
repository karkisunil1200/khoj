import React, {useState} from 'react';
import {connect} from 'react-redux';

import searchPicture from '../../actions/searchPictures';
import '../../styles/searchBar.css';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const handleChange = event => {
    setTerm(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.searchPicture(term);
    setTerm('');
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          value={term}
          type='text'
          placeholder='search'
          onChange={handleChange}
        />
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({searchPictureReducer}) => {
  // console.log('this is search mapStatetoProps ', searchPictureReducer);
  return {};
};

export default connect(
  mapStateToProps,
  {searchPicture}
)(SearchBar);

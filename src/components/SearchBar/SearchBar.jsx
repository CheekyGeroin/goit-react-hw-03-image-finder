import PropTypes from 'prop-types';
import { Component } from 'react';
import {BiSearch} from 'react-icons/bi'

class SearchBar extends Component {
  state = {
    itemName: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
      this.setState({ itemName: value });
  };

  searchResult = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ itemName: '' });
  };

  render() {
    const { itemName } = this.state;
    return (
      <header>
        <form onSubmit={this.searchResult}>
          <button type="submit">
                    <BiSearch  />
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={itemName}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

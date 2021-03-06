import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
    const text = e.target.text.value;
    this.props.handleSubmit(text);
  };
  render() {
    return (
      <div>
        <h2 className="containerStyle">Search for quick and easy recipes by typing the name of an ingredient<br/>All recipes require maximum 5 ingredients!</h2>
        <form
          onSubmit={this.handleSubmit}
          className="flexContainer containerStyle"
        >
          <input
            type="text"
            name="text"
            placeholder="Search Recipes"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

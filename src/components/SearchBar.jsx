import React from "react";

export default class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="video">Video Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.term} />
                    </div>
                </form>
            </div>)
    }
}
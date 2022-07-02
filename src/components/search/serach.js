import React, { Component } from "react";
import { connect } from "react-redux";

import { userInputAction, reposRequested } from "../../action/actions";

class Search extends Component {

    onChange = (e) => {
        this.props.userInputAction(e.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.reposRequested();
    }

    render() {
        return (
            <React.Fragment>
                <form className="form-group mt20" onSubmit={ this.onSubmit }>
                    <div className="row">
                        <div className="col-md-10">
                            <input className="form-control" placeholder="Username" onChange={ this.onChange } />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
                <h5 className="text-muted mt10">Repositories: 5</h5>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repos: state.repos,
        userInput: state.userInput,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userInputAction: (user) => dispatch(userInputAction(user)),
        reposRequested: () => dispatch(reposRequested())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

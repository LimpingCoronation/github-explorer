import React from "react";

const Search = ({ total }) => {
    return (
        <React.Fragment>
            <form className="form-group mt20">
                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control" placeholder="Username" />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            <h5 className="text-muted mt10">Repositories: { total }</h5>
        </React.Fragment>
    );
}

export default Search;

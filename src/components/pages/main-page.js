import React from "react";

import Header from "../header";
import Search from "../search";
import UserReposList from "../user-repos-list/user-repos-list";
import ReposCount from "../repos-count"

const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <Search />
            <ReposCount />
            <UserReposList />
        </React.Fragment>
    )
}

export default MainPage;

export default class GitHubService {

    _apiBase = "https://api.github.com/";

    async getUserRepos(userName) {
        return await (await fetch(`${this._apiBase}users/${userName}/repos`)).json();
    }
}

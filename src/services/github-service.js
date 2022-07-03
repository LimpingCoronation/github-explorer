export default class GitHubService {

    _apiBase = "https://api.github.com/";
    _rowBase = "https://raw.githubusercontent.com/";

    async getUserRepos(userName) {
        const res = await fetch(`${this._apiBase}users/${userName}/repos`);
        return await res.json();
    }

    async getReadMeFile(userName, reposName= "") {
        const res = await fetch(`${this._rowBase}${userName}/${reposName}/master/README.md`);
        return await res.text();
    }

    async getUser(userName) {
        const res = await fetch(`${this._apiBase}users/${userName}`);
        return await res.json();
    }
}

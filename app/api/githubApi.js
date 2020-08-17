import { Octokit } from '@octokit/rest';

// get reposotories
export const searchRepositories = async (keyword, page = 1) => {
    const octokit = new Octokit();
    return octokit.search.repos({
        q: keyword,
        per_page: 10,
        page: page,
    })
    .then(res => res.data)
}
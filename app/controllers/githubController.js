import { searchRepositories } from "../api/githubApi";

export const get = (req, h) => {
    const { page, q } = req.query;
    return searchRepositories(q, page);
}
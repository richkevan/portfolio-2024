import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_TOKEN,
});

const getGists = async () => {
  const { data } = await octokit.request("GET /gists");
  return data;
}

const getRepo = async (topic) => {
  const { data } = await octokit.request('GET /users/richkevan/repos', {
    username: 'richkevan',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return data.filter(repo => repo.topics.includes(topic));
}

export { getGists, getRepo };
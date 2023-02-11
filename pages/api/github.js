const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.AUTH_TOKEN,
  });

  const contributors = await octokit.request(
    "GET /repos/time-mastery/pmodoro-application/contributors"
  );

  const data = contributors.data;

  return res.status(200).json({ contributors: data });
};

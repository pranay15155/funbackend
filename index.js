const express = require("express");

require('dotenv').config();

const app = express();//variable

const port = 4000;//variable

const githubData = {
  login: "pranay15155",
  id: 97624269,
  node_id: "U_kgDOBdGgzQ",
  avatar_url: "https://avatars.githubusercontent.com/u/97624269?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/pranay15155",
  html_url: "https://github.com/pranay15155",
  followers_url: "https://api.github.com/users/pranay15155/followers",
  following_url:
    "https://api.github.com/users/pranay15155/following{/other_user}",
  gists_url: "https://api.github.com/users/pranay15155/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/pranay15155/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/pranay15155/subscriptions",
  organizations_url: "https://api.github.com/users/pranay15155/orgs",
  repos_url: "https://api.github.com/users/pranay15155/repos",
  events_url: "https://api.github.com/users/pranay15155/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/pranay15155/received_events",
  type: "User",
  site_admin: false,
  name: "PRANAY PRASOON",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 1,
  following: 0,
  created_at: "2022-01-12T17:35:43Z",
  updated_at: "2024-05-20T15:13:57Z",
};

app.get("/", (req, res) => {  //if any request comes at homeroute / then we call a callback function having req and res
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>twitter</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);            //to send data in the form of json response
});

app.get("/login", (req, res) => {
  res.send("<h1>pranay prasoon</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});


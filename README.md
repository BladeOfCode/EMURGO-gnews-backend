<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://emurgo.io/">
    <img src="./emurgo-logo.svg" alt="Logo" width="300" height="200">
  </a>
  <h3 align="center">Backend Test for EMURGO</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#system-requirements">System Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a simple backend server that interacts with a public news API for fetching articles.
It has a few basic methods like fetching news articles, finding a news artile with a specific title or author, and searching by keywords.
Also it includes a cache in this API services as well as so users are not fetching the same things over and over.

I used Node.js(Express), typescript for building server and used node-cache library to stoere the results of each request for 5 minutes or 100 further requests, whichever happens first.

<!-- GETTING STARTED -->

## Getting Started

### System Requirements

- [NodeJS][node] v14 or greater
- [npm][npm] v6 or greater
- the .env file should include GNEWS_API_KEY, GNEWS_BASE_URL items.

To verify things are set up
properly, you can run this:

```shell
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it.

### Installation

```js
npm install
```
### Run Server

```js
npm run dev
```


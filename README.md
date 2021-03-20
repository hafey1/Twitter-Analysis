# Dockerized Dev Env of Twitter Analysis Web App #
  
  This is a continuation of previous projects [twitter-analysis front end](https://github.com/hafey1/TwitterAnalysis-FE) and [node back end](https://github.com/hafey1/nodeBackEndTemplate) being combined and dockerized for simplicity's sake and because it is fun.
  The application's current goal consists of tweet scraping from [Twitter's API](https://developer.twitter.com/en/docs) via the [filter stream endpoint](https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/introduction) and storage of the tweets and then sentiment analysis via [Google's sentiment analysis endpoint](https://cloud.google.com/natural-language/docs/analyzing-sentiment).

## Current Stack ##
  ### Run Time Environment ###
  [Node](https://nodejs.org/en/)
  ### Database ###
  [PostgreSQL](https://www.postgresql.org)
  ### Back end ###
  [Express](https://expressjs.com)
  ### Front end ###
  [React](https://reactjs.org)

## Detours/Learning Opportunities ##
  
  This is mainly a pet project to find ways to integrate and learn hot tech and best practices for full stack development. So naturally there have been many detours. They consist largely of writing custom code to replace a prebuilt tool in order to develop a better understanding of a process and integrating tools and/or concepts that I had no previous or very little knowledge of. Here is a small list of detours that I have taken so far and maybe a reason why.

  ### Back end ###
  * Custom built relation migration tool for a dev env
    * *I just wanted to & I didn't want a tool to abstract the process from me.*
  * CI/CD integration
    * *Learned the importance of a maintainable & secure codebase. Still a heavy WIP.*
  ### Front end ###
  * **Front end** Responsive design
    * *A critcal necessity for modern web apps.*
  ### Fullstack ###
  * Linter/Prettier implementation and configuration
    * *Cool and easy tools that help with maintainability.*
  * Differentiation of HTTP clients like [needle](https://www.npmjs.com/package/needle) and [axios](https://www.npmjs.com/package/axios)
    * *Axios currently can not capture streams of data. That is where libraries like needle come in. Super useful for twitter's API which returns streams of data containing JSON as opposed to normal JSON.*
  * [Docker](https://www.docker.com)
    * *By far my biggest detour, an amazing tool for managing and modularizing an application. The ability to containerize a database, back end, front end, and other services as needed is AMAZING.*

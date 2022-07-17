# tiny-background-job-redis-ts
creating a simple application to show how to use background jobs


## How to run

Make it sure you have `Docker` and `docker-compose` installed on your pc.

```sh
❯ git clone https://github.com/NicolasLopes7/tiny-background-job-redis-ts/
❯ cd tiny-background-job-redis-ts
❯ yarn
❯ cp .env.example .env
❯ docker-compose up --build -d
❯ yarn prisma migrate dev
❯ yarn dev
```


### /report
This is the main attraction of this repo, we're basically verifying if the user is passing a token through the `authorization` query parameter, and then running a job to fake generate a report.
If the user don't give a token, a 401 status will be returning telling him is unauthorized.

You can check on the [PR#1](https://github.com/NicolasLopes7/tiny-background-job-redis-ts/pull/1) how i changed from a sync route to a async background job.

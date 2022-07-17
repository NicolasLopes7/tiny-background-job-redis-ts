# ⚡ Tiny Background Jobs App
Creating a simple application to show how to use background jobs.

## 🚀 How to run

### First steps

> **Warning**
> 
> Make it sure you have `Docker` and `docker-compose` installed on your device

> **Note**
> 
> Hover the items of the list below to get more detailed description

- [Clone this repository](# "You can use an external tool or clone directly using the command line using the command \"git clone\"")
- [Go to the `tiny-background-job-redis-ts` folder](# "This can be usually achieved by the command \"cd [path]\" but you can also use your preferred IDE")
- [Execute the command `cp .env.example .env`](# "This will copy the example environment variables to be used as your environment variables")
- [Execute the command `docker-compose up --build -d`](# "Setup the docker-compose environment")
- [Execute the command `yarn prisma migrate dev`](# "Setup the development prisma migrations")
- [Execute the command `yarn dev`](# "Run the project")

### /report
This is the main attraction of this repo, we're basically verifying if the user is passing a token through the `authorization` query parameter, and then running a job to fake generate a report.
If the user don't give a token, a 401 status will be returning telling him is unauthorized.

You can check on the [PR#1](https://github.com/NicolasLopes7/tiny-background-job-redis-ts/pull/1) how i changed from a sync route to a async background job.

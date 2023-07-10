# KVStore App v2 (WIP)

A re-creation of the KVStore App that I built for Data Engineering at Pinterest, with improvements.

I regularly mention this project in interviews but since I'm no longer with Pinterest, I don't really have anything to show for it. I thought it would be fun to make an new & revamped version of it that I could share publicly. On another note, I always felt like I didn't have the bandwidth to give KVStore App 1.0 the attention it needed; after all, I was there to fill a backend role.

I consider the original version as one of the projects that I'm most proud of in my career as a Software Engineer, but not because it has groundbreaking features, or because it has examples of some of my best coding. It actually has neither of those things. The KVStore App is just a simple tool that was used daily by so many excellent engineers across several teams. It turned a bad process into a good one.

## Components
At a high level, KVStore App had two main components: 
* **Request Form**: a form that collected dataset metadata for their use case
* **Request Queue**: a list of all dataset requests and their statuses based on user and user type 

## Benefits
* it ended the use of JIRA tickets as a way for requesting datasets - JIRA is text-based and an organizational nightmare! All the necessary dataset metadata was submitted with each request.
* **VISIBILITY** - the customer could see their history of requests, the admins could see the mountain of work before them. NO MORE SEARCHING ON JIRA!
* it gave the KV Systems team a more efficient way to lookup dataset metadata, because it was finally stored in a db
* it allowed KV Systems to use internal tooling to expedite our daily tasks - dataset creation, backups, data uploads - all of which keyed off specific values in the dataset metadata
* it helped streamline the process of migrating datasets from several different legacy key-value storage systems to our new unified service (KVStore Service) at Pinterest.

## Differences
In this version of the KVStore App:
* Next.js with React (Typescript)
* This will not use Gestalt, which is Pinterests UI component library. Maybe Material UI?
* the original version used Redux, which, in hindsight, probably was overkill. No Redux.
* the components will be smaller, and easier for others to read
* it will use fake data
* it will contain unit tests
* Tailwind? Maybe for fun.

# Known bugs with 1.0
* the Queue did not update after a request submission, which required a browser refresh
* we built a separate UI app to display a datasets full metadata (whereas the focus of KVStore App was to handle requests for dataset creation). Would've been nice (and easy) to just combine the two
* no sorting of the queue, static table display
* tba...

This project was bootstrapped with the starter template for [Learn Next.js](https://nextjs.org/learn).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
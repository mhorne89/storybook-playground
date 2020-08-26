# Storybook HTML boilerplate

This repo contains a basic boilerplate setup of Storybook HTML and some custom tooling to ease development.


## Setup

* Clone repo
* cd playground
* npm i
* Update .env file with your paths
* npm run storybook


## Tools

### Create

This tool can be used to quickly create required directory and files needed to begin a new story.

Run `npm run create`, you will be prompted to give the new story a name, category and which styling extension you would like to use (currently only supports LESS and CSS).

### Link

This tool is used to link global stylesheets to your story from an external project so that you can easily recreate a similar development environment that you would normally work with. This command, `npm run link`, will create a symlink to your existing stylesheets to a root directory named `styles` and generate a file named `styles.stories.js` in the `stories` directory that will inject your global styles to Storybook.

Please specify the path to your global styles directory in your .env file and the file used as your entry point.

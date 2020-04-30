<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  The CivicActions FrontEnd Knowledgebase
</h1>

## 🚀 Quick start

1.  **Clone this Gatsby site.**
    ```shell
    git clone git@github.com:CivicActions/FE-knowledgebase.git
    ```


1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd FE-Knowledgebase/
    npm install
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at http://localhost:8000

    _Note: You'll also see a second link: [http://localhost:8000/___graphql](http://localhost:8000/___graphql). This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `FE-Knowledgebase` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's this & where's the  rest of it?

The FE Knowledge-base is a repository for our Front-End best practices and development tools. It can be viewed here: https://civicactions.github.io/FE-knowledgebase/

It is made up of:
1. This github repo
2. A Component Library built with PatternLab:
    * Github Repo: https://github.com/CivicActions/FE-component-library
    * Component Library: https://civicactions.github.io/FE-component-library/
3. A Static CMS: https://fe-knowledgebase-cms.herokuapp.com/

## 🏗 Development Workflow
### Adding new features
1. Follow the quick start steps above to run the gatsby server.
1. Make changes and commit. 
1. Create a feature branch  your commits and push to the git repo. `git push origin`.
1. Create a PR against the master branch from the remote branch. 
1. Add a description and any testing steps and tag a dev to review your PR.

### Code Review 
We don't have review environments yet so we need to do manual reviews in the interim.
1. When tagged to review a PR, checkout the branch locally
    ```shell
    git fetch origin
    git checkout -b branch-name origin/branch-name
    ```
1. Run `npm install` and `gatsby develop`.
1. Review the changes in http://localhost:8000
1. If things look kosher, merge the PR on github and then proceed to the Deploy section below!

## 💫 How to Deploy
The knowledge-base is currently hosted on Github pages and requires a manual deploy process.
1. Checkout your local master branch and pull in the latest changes.
    ```shell
    git checkout master
    git fetch origin
    git pull --rebase origin master
    ```
2. Deploy the site by running 
    ```shell
    npm install
    npm run deploy 
    ```
    When you run the deploy command, the gatsby site will be compiled for production and all contents of the public folder will be moved to the repository’s gh-pages branch.

## 😻 How to add content
All content is added in a seperately hosted CMS. To contribute, contact any project maintainer for a content editor account.
1. Log into the CMS with your editor account.
1. Create a new post or edit any post and Save.
1. Run through the deployment steps above to trigger a redeployment with the latest content updates.


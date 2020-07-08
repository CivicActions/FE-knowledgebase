(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{PSB1:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return l}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),o=a("L12J"),i=a("dmsj");var b={},r={_frontmatter:b};function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)("wrapper",Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o.a,{mdxType:"Layout"},Object(n.b)(i.a,{title:"about",mdxType:"SEO"}),Object(n.b)("h1",null,"About this knowledge base"),Object(n.b)("p",null,"This knowledge base is built using ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/"}),"Gatsby")," and ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://strapi.io/"}),"Strapi"),". All of the content is maintained by the CivicActions frontend engineers group."),Object(n.b)("h2",null,"How to contribute to this knowledge base."),Object(n.b)("h3",null,"🚀 Quick start"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Clone this Gatsby site.")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{}),"git clone git@github.com:CivicActions/FE-knowledgebase.git\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Start developing.")),Object(n.b)("p",{parentName:"li"},"Navigate into your new site’s directory and start it up."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{}),"cd FE-Knowledgebase/\nnpm install\ngatsby develop\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Open the source code and start editing!")),Object(n.b)("p",{parentName:"li"},"Your site is now running at http://localhost:8000"),Object(n.b)("p",{parentName:"li"},Object(n.b)("em",{parentName:"p"},"Note: You'll also see a second link: ",Object(n.b)("a",Object.assign({parentName:"em"},{href:"http://localhost:8000/___graphql"}),"http://localhost:8000/___graphql"),". This is a tool you can use to experiment with querying your data. Learn more about using this tool in the ",Object(n.b)("a",Object.assign({parentName:"em"},{href:"https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql"}),"Gatsby tutorial"),".")),Object(n.b)("p",{parentName:"li"},"Open the ",Object(n.b)("inlineCode",{parentName:"p"},"FE-Knowledgebase")," directory in your code editor of choice and edit ",Object(n.b)("inlineCode",{parentName:"p"},"src/pages/index.js"),". Save your changes and the browser will update in real time!"))),Object(n.b)("h3",null,"🧐 What's this & where's the  rest of it?"),Object(n.b)("p",null,"The FE Knowledge-base is a repository for our Front-End best practices and development tools. It can be viewed here: ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://civicactions.github.io/FE-knowledgebase/"}),"https://civicactions.github.io/FE-knowledgebase/")),Object(n.b)("p",null,"It is made up of:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"This github repo"),Object(n.b)("li",{parentName:"ol"},"A Component Library built with PatternLab:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Github Repo: ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/CivicActions/FE-component-library"}),"https://github.com/CivicActions/FE-component-library")),Object(n.b)("li",{parentName:"ul"},"Component Library: ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://civicactions.github.io/FE-component-library/"}),"https://civicactions.github.io/FE-component-library/")))),Object(n.b)("li",{parentName:"ol"},"A Static CMS built with Strapi: ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://fe-knowledgebase-cms.herokuapp.com/"}),"https://fe-knowledgebase-cms.herokuapp.com/"))),Object(n.b)("h3",null,"🏗 Development Workflow"),Object(n.b)("h4",null,"Adding new features"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Follow the quick start steps above to run the gatsby server."),Object(n.b)("li",{parentName:"ol"},"Make changes and commit."),Object(n.b)("li",{parentName:"ol"},"Create a feature branch  your commits and push to the git repo. ",Object(n.b)("inlineCode",{parentName:"li"},"git push origin"),"."),Object(n.b)("li",{parentName:"ol"},"Create a PR against the master branch from the remote branch."),Object(n.b)("li",{parentName:"ol"},"Add a description and any testing steps and tag a dev to review your PR.")),Object(n.b)("h4",null,"Code Review"),Object(n.b)("p",null,"We don't have review environments yet so we need to do manual reviews in the interim."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"When tagged to review a PR, checkout the branch locally"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{}),"git fetch origin\ngit checkout -b branch-name origin/branch-name\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Run ",Object(n.b)("inlineCode",{parentName:"p"},"npm install")," and ",Object(n.b)("inlineCode",{parentName:"p"},"gatsby develop"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Review the changes in http://localhost:8000")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If things look kosher, merge the PR on github and then proceed to the Deploy section below!"))),Object(n.b)("h3",null,"💫 How to Deploy"),Object(n.b)("p",null,"The knowledge-base is currently hosted on Github pages and requires a manual deploy process."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Checkout your local master branch and pull in the latest changes."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{}),"git checkout master\ngit fetch origin\ngit pull --rebase origin master\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Deploy the site by running"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{}),"npm install\nnpm run deploy\n")),Object(n.b)("p",{parentName:"li"},"When you run the deploy command, the gatsby site will be compiled for production and all contents of the public folder will be moved to the repository’s gh-pages branch."))),Object(n.b)("h3",null,"😻 How to add content"),Object(n.b)("p",null,"Content is split into a few types, there are top level pages and recipes. There are plans to also add Projects in the future."),Object(n.b)("p",null,"Top level pages are high level pages about particular frontend topics, these can contain basic descriptions and links to resources. Recipes are step by step walk throughs or tutorials on how to setup or do specific tasks."),Object(n.b)("p",null,"Top level pages are built as static ",Object(n.b)("inlineCode",{parentName:"p"},".mdx")," files. You can see these in the ",Object(n.b)("inlineCode",{parentName:"p"},"pages")," directory. These are edited and added in this repo."),Object(n.b)("p",null,"Recipes are added in a separately hosted Strapi CMS. To contribute to recipes, contact any project maintainer for a content editor account."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Log into the CMS with your editor account: ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://fe-knowledgebase-cms.herokuapp.com/"}),"https://fe-knowledgebase-cms.herokuapp.com/")),Object(n.b)("li",{parentName:"ol"},"Create a new recipe or edit any recipe and Save."),Object(n.b)("li",{parentName:"ol"},"Run through the deployment steps above to trigger a redeployment with the latest content updates.")),Object(n.b)("h3",null,"Making edits to Strapi"),Object(n.b)("p",null,"If you need to add a field or even a whole content type to the Strapi CMS you will need to pull down a local version of the CMS from this repo: ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/CivicActions/fe-knowledgebase-cms"}),"https://github.com/CivicActions/fe-knowledgebase-cms")),Object(n.b)("p",null,"After making your changes locally, submit a pull request to get them deployed to the CMS.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-about-mdx-9960965fcec201756dcf.js.map
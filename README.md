# Chess-blog

Chess-blog is a static blog site where you can add posts via **.md** files, **Contentful** or **Firebase**.

See the site live [here](https://chess-blog.netlify.app/)

## Configuration

In order to run the project, besides installing packages listed in **package.json**, you will need:

- **.env.development** file, which stores two environment variables:
  - CONTENTFUL_SPACE_ID
  - CONTENTFUL_ACCESS_TOKEN
- **.env.privateKey.json** file, which stores _firebase_ private key which you can download [here](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk)
  These files need to be located in the root folder _(next to **src** folder)_

In order to access data from firebase, you will need to modify **gatsby-source-firestore** plugin inside **gatsby-config.js** file.
You can see the documentation for that [here](https://www.gatsbyjs.com/plugins/gatsby-source-firestore/)

## Technology stack

- React
- Gatsby
- Graphql
- Firebase
- Contentful

## About

I created this site in order to learn **Gatsby** and **Graphql**. I also used typescript instead of javascript.
There are also many ways to expand current state of this site. For example:

- adding filtering news by tags, date etc.
- adding programmed chessboard in order to play chess on the site.
- adding chess puzzles
- adding comments section to posts
  and many more. I didn't implement these features because I already did something similar in other projects like [BnnCardMaker](https://github.com/BajKull/cardmaker)

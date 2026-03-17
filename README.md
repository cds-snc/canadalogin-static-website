# CanadaLogin

Landing page and central source of information for potential clients that are interested in CanadaLogin.


### Quick Start

1. Quickly get started by creating your own [Codespaces](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace?tool=webui)
    - Click the Code button at the top of the repo page to create your Codespace. You will have an option to continue working from the web version of VSCode or the VSCode Desktop app.

## Website Installation

- Navigate to the [website folder ](website)
- Run `npm install` to install all Node.js dependencies.
- Create a `.env` file in the `website` directory and add the following environment variable:
  ```
  ARTICLES_API_URL=https://articles.alpha.canada.ca/canadalogin-connexioncanada
  ```
- Run `npm run dev` if you are working locally.
- Run `npm run build` to initiate the Eleventy build process
- Run `npm start` to start a hot-reloading local web server.
- The site will be accessible on http://localhost:8080/en or http://localhost:8080/fr. You have to append the `/en` and `/fr` as there is no page available at the base url
  <br/>
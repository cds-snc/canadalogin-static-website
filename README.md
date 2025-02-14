# Growth Team

A spot for the Growth Team to track their work.


### Quick Start

1. Quickly get started by creating your own [Codespaces](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace?tool=webui)
    - Click the Code button at the top of the repo page to create your Codespace. You will have an option to continue working from the web version of VSCode or the VSCode Desktop app.

### Terraform Setup

1. Update the `account_id` to your account in [dev env_var](terragrunt/env/dev/env_vars.hcl) and update `domain_en` and `domain_fr`.
1. To build the infrastructure, navigate to the terragrunt [dev environment folder](terragrunt/env/dev) and run the `terragrunt plan` command to review the infrastructure. Once reviewed, run the `terragrunt apply` command to deploy the infrastructure to your account.

## Website Installation

- Navigate to the [website folder ](website)
- Run `npm install` to install all Node.js dependencies.
- Run `npm run dev` if you are working locally.
- Run `npm run build` to initiate the Eleventy build process
- Run `npm start` to start a hot-reloading local web server.
- The site will be accessible on http://localhost:8080/en or http://localhost:8080/fr. You have to append the `/en` and `/fr` as there is no page available at the base url
  <br/>
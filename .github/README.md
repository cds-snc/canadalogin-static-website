# GC Articles Automated Build Trigger

To trigger the website CI/CD automatically, a Personal Access Token needs to be created.

Purpose of PAT: Grants permission to GC Articles to trigger our Github Actions
Expiry: Current token will expire on Wed, Apr 21 2027

To create a PAT: 
1. Navigate to Profile -> Developer Settings -> Fine-grained Tokens: https://github.com/settings/personal-access-tokens
2. Generate New Token
3. Ensure the new token resource owner is `CDS` and the selected repository is `gc-signin-static-website`. Reference: [PAT Creation Reference](https://github.com/cds-snc/gc-signin-static-website/issues/753#issuecomment-4283333408)
4. Send the secret PAT via https://encrypted-message.cdssandbox.xyz
5. Share the link with the #platform-core-services team

The PAT gives GC Articles the permissions needed to trigger our repository GitHub Action.

Other CDS Repo's that use a similar trigger with `repository_dispatch` via GC Articles:
https://github.com/cds-snc/cds-website-pr-bot/blob/main/.github/workflows/strapi-update.yml#L4C3-L4C24
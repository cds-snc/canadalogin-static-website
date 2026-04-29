# GC Articles Automated Build Trigger

For GC Articles to trigger our CI/CD Pipeline, the platform core services team needs:
1. Our repo name
2. PAT Token
3. [repository_dispatch](https://github.com/cds-snc/gc-signin-static-website/blob/main/.github/workflows/release-pipeline.yml#L6) trigger in our workflow

To trigger the website CI/CD automatically, a Personal Access Token needs to be created.

- Purpose of PAT: Grants permission to GC Articles to trigger our Github Actions
- Expiry: Current token will expire on Wed, Apr 21 2027

To create a PAT: 
1. In your Github account, navigate to your Profile -> Developer Settings -> Fine-grained Tokens: https://github.com/settings/personal-access-tokens
2. Generate New Token
3. Ensure the new token resource owner is `CDS` and the selected repository is `gc-signin-static-website`. Example: [PAT Permission Reference](https://github.com/cds-snc/gc-signin-static-website/issues/753#issuecomment-4289798723)
    - Permissions: Contents: Read and Write
4. Save the secret PAT via https://encrypted-message.cdssandbox.xyz
5. Share the link with the #platform-core-services team

The PAT gives GC Articles the permissions needed to trigger our repository GitHub Action.
# Terragrunt configuration that deploys the root module in the `./terragrunt/aws` folder in the `production` environment.

terraform {
  source = "git::https://github.com/cds-snc/gc-signin-static-website//terragrunt/aws?ref=${get_env("INFRASTRUCTURE_VERSION")}"
}

include {
  path = find_in_parent_folders()
}

inputs = {}
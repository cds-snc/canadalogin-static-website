#
# Module Terragrunt config.  This example is setup with a single root module in
# `./terragrunt/aws` but could be split into multiple submodules by adding subfolders, 
# each with their own terragrunt.hcl:
#
# terragrunt/
# ├── aws/
# │   └── s3.tf
# └── env/
#     ├── dev/
#     │   └── env_vars.hcl
#     ├── prod/
#     │   └── env_vars.hcl      
#     └── terragrunt.hcl
#
terraform {
  source = "../..//aws"
}

include {
  path = find_in_parent_folders()
}


inputs = {
  # Allow to force destroy S3 resources
  s3_force_destroy = true
}
TF_MODULE_DIR := ./terragrunt/env/dev

.PHONY: fmt hclfmt validate
	
fmt:
	@terragrunt fmt --terragrunt-working-dir=${TF_MODULE_DIR}

hclfmt:
	@terragrunt hclfmt --terragrunt-working-dir=${TF_MODULE_DIR}

validate:
	@terragrunt validate --terragrunt-working-dir=${TF_MODULE_DIR}

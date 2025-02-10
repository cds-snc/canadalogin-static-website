variable "account_id" {
  description = "(Required) The account ID to perform actions on."
  type        = string
}

variable "billing_tag_key" {
  description = "(Optional, default 'CostCentre') Name of the billing tag."
  type        = string
  default     = "CostCentre"
}
variable "billing_code" {
  description = "(Required) Value of the billing tag."
  type        = string
}

variable "domain_en" {
  description = "The domain to use for the service in English."
  type        = string
}

variable "domain_fr" {
  description = "The domain to use for the service in French."
  type        = string
}

variable "product_name" {
  description = "(Required) The name of the product you are deploying."
  type        = string
}

variable "region" {
  description = "The current AWS region"
  type        = string
}

variable "env" {
  description = "The current running environment"
  type        = string
}

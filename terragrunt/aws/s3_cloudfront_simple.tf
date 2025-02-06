module "website" {
  source                  = "github.com/cds-snc/terraform-modules//simple_static_website?ref=v10.0.0"
  domain_name_source      = var.domain_en
  billing_tag_value       = var.billing_code
  s3_bucket_name          = "${var.product_name}-${var.env}"
  force_destroy_s3_bucket = true
  index_document          = "index.html"

  providers = {
    aws           = aws
    aws.dns       = aws # For scenarios where there is a dedicated DNS provder.
    aws.us-east-1 = aws.us-east-1
  }
}

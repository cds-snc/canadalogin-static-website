module "gc_signin_zone_en_website" {
  source                  = "github.com/cds-snc/terraform-modules//simple_static_website?ref=v10.0.0"
  domain_name_source      = var.domain_en
  billing_tag_value       = var.billing_code
  s3_bucket_name          = var.domain_en
  force_destroy_s3_bucket = true
  index_document          = "index.html"
  hosted_zone_id          = aws_route53_zone.gc_signin_zone_en.zone_id
  is_create_hosted_zone   = false

  providers = {
    aws           = aws
    aws.dns       = aws # For scenarios where there is a dedicated DNS provder.
    aws.us-east-1 = aws.us-east-1
  }
}

module "gc_signin_zone_fr_website" {
  source                  = "github.com/cds-snc/terraform-modules//simple_static_website?ref=v10.0.0"
  domain_name_source      = var.domain_fr
  billing_tag_value       = var.billing_code
  s3_bucket_name          = var.domain_fr
  force_destroy_s3_bucket = true
  index_document          = "index.html"
  hosted_zone_id          = aws_route53_zone.gc_signin_zone_fr.zone_id
  is_create_hosted_zone   = false

  providers = {
    aws           = aws
    aws.dns       = aws # For scenarios where there is a dedicated DNS provder.
    aws.us-east-1 = aws.us-east-1
  }
}

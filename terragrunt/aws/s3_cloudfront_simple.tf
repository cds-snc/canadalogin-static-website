module "gc_signin_zone_en_website" {
  source                  = "github.com/cds-snc/terraform-modules//simple_static_website?ref=v10.0.0"
  domain_name_source      = var.domain_en
  billing_tag_value       = var.billing_code
  s3_bucket_name          = var.domain_en
  force_destroy_s3_bucket = true
  index_document          = "index.html"
  hosted_zone_id          = aws_route53_zone.gc_signin_zone_en.zone_id
  is_create_hosted_zone   = false

  function_association = [
    {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.cloudfront_function_retrieve_index_html.arn
    }
  ]

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

  function_association = [
    {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.cloudfront_function_retrieve_index_html.arn
    }
  ]

  providers = {
    aws           = aws
    aws.dns       = aws # For scenarios where there is a dedicated DNS provder.
    aws.us-east-1 = aws.us-east-1
  }
}

resource "aws_cloudfront_function" "cloudfront_function_retrieve_index_html" {
  name    = "loadIndexFiles"
  runtime = "cloudfront-js-2.0"
  comment = "retrieve index.html from s3 - for example /contact -> /contact/index.html"
  publish = true
  code    = file("${path.module}/cf_redirect_to_index_html.js")
}


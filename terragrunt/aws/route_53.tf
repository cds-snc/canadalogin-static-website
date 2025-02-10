resource "aws_route53_zone" "gc_signin_zone_en" {
  name = var.domain_en

  tags = {
    CostCenter = var.billing_code
  }
}

resource "aws_route53_zone" "gc_signin_zone_fr" {
  name = var.domain_fr

  tags = {
    CostCenter = var.billing_code
  }
}

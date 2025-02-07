resource "aws_route53_zone" "gc_signin_zone_en" {
  name = var.domain_en

  tags = {
    CostCenter = "${var.product_name}-${var.env}"
  }
}

resource "aws_route53_zone" "gc_signin_zone_fr" {
  name = var.domain_fr

  tags = {
    CostCenter = "${var.product_name}-${var.env}"
  }
}

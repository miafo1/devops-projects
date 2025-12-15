output "alb_dns_name" {
  value = aws_lb.main.dns_name
}

output "db_endpoint" {
  value = aws_db_instance.default.endpoint
}

output "ecr_repository_backend" {
  value = aws_ecr_repository.backend.repository_url
}

output "ecr_repository_frontend" {
  value = aws_ecr_repository.frontend.repository_url
}

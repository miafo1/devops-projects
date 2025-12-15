resource "aws_cloudwatch_log_group" "food_delivery_logs" {
  name              = "/ecs/food-delivery"
  retention_in_days = 7

  tags = {
    Environment = var.environment
    Application = "FoodDelivery"
  }
}

resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  alarm_name          = "food-delivery-cpu-high"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = "60"
  statistic           = "Average"
  threshold           = "85"
  alarm_description   = "This metric monitors ec2 cpu utilization"
  
  dimensions = {
    ClusterName = aws_ecs_cluster.main.name
  }
}

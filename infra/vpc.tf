module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "food-delivery-vpc"
  cidr = var.vpc_cidr

  azs             = ["${var.aws_region}a", "${var.aws_region}b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = false  # Save cost for Free Tier (use Public Subnets for ECS if needed or accept no internet in private)
  # For this demo, we might put ECS in public subnets or enable 1 NAT GW if strictly required. 
  # To stay strictly free tier, putting containers in Public Subnets is safer cost-wise, 
  # but putting them in Private Subnets without NAT means they can't pull images or talk to internet.
  # Strategy: Use Public Subnets for Fargate Tasks to pull images (assign_public_ip=true).
  
  create_igw = true
  
  tags = {
    Terraform = "true"
    Environment = var.environment
  }
}

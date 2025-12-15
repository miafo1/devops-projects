resource "aws_db_instance" "default" {
  allocated_storage       = 20
  engine                  = "postgres"
  engine_version          = "16.3"
  instance_class          = "db.t3.micro" # Free tier eligible
  db_name                 = "food_delivery"
  username                = "postgres"
  password                = var.db_password
  db_subnet_group_name    = aws_db_subnet_group.default.name
  vpc_security_group_ids  = [aws_security_group.db_sg.id]
  skip_final_snapshot     = true
  publicly_accessible     = false
}

resource "aws_db_subnet_group" "default" {
  name       = "main"
  subnet_ids = module.vpc.private_subnets

  tags = {
    Name = "My DB subnet group"
  }
}

resource "aws_dynamodb_table" "cart" {
  name           = "ShoppingCarts"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "cart_id"

  attribute {
    name = "cart_id"
    type = "S"
  }
}

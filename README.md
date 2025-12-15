# Food Delivery DevOps Project

## Overview
A production-grade Food Delivery E-commerce Web Application designed to demonstrate end-to-end DevOps, Cloud Architecture, and Software Engineering skills. This project simulates a real-world environment with a focus on:
- **CI/CD Pipelines** (GitHub Actions)
- **Containerization** (Docker, ECS)
- **Infrastructure as Code** (Terraform)
- **Cloud Security** (IAM, WAF, Secrets Manager)
- **Observability** (CloudWatch, Grafana)
- **Cost Optimization** (AWS Free Tier)

## Architecture
The application follows a microservices-ready architecture:
- **Frontend**: React.js + Tailwind CSS (PWA)
- **Backend**: Django REST Framework
- **Database**: PostgreSQL (RDS), DynamoDB, Redis (ElastiCache)
- **Infrastructure**: AWS (VPC, ALB, ECS, S3, CloudFront)

## Tech Stack
- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Python, Django, DRF
- **DevOps**: Docker, Terraform, GitHub Actions, AWS

## Getting Started

### Prerequisites
- GitHub Codespaces (Recommended) or Local Dev Environment
- Docker
- AWS Account (Free Tier)

### Quick Start
1.  Clone the repository.
2.  Open in GitHub Codespaces.
3.  Run `docker-compose up --build` to start the local development environment.
4.  Access Frontend: http://localhost:80
5.  Access Backend API: http://localhost:8000/api/
6.  Access Swagger Docs: http://localhost:8000/swagger/

## Documentation
- [Architecture Details](docs/ARCHITECTURE.md)
- [API Documentation](http://localhost:8000/swagger/) (When running locally)

## License
MIT

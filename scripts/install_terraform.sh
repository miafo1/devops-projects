#!/bin/bash
# Install Terraform on Debian/Ubuntu systems (e.g., GitHub Codespaces)

echo "Installing Terraform..."

# Install dependencies
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common

# Install HashiCorp GPG Key
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null

# Verify key
gpg --no-default-keyring \
--keyring /usr/share/keyrings/hashicorp-archive-keyring.gpg \
--fingerprint

# Add HashiCorp Repo
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
sudo tee /etc/apt/sources.list.d/hashicorp.list

# Update and Install
sudo apt update
sudo apt-get install terraform -y

echo "Terraform installed successfully!"
terraform --version

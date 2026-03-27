#!/bin/bash
set -e

sudo apt update -y
sudo apt install -y curl git unzip

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

cd /home/ubuntu

if [ ! -d aws-employee-management-3tier ]; then
  git clone YOUR_GITHUB_REPO_URL aws-employee-management-3tier
fi

cd aws-employee-management-3tier/backend
npm install

cat <<EOF | sudo tee /etc/systemd/system/employee-backend.service
[Unit]
Description=Employee Backend
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/aws-employee-management-3tier/backend
Environment=NODE_ENV=production
Environment=AWS_REGION=ap-south-1
Environment=SECRET_NAME=employee-management/backend
ExecStart=/usr/bin/node app.js
Restart=always

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable employee-backend
sudo systemctl start employee-backend
sudo systemctl status employee-backend --no-pager
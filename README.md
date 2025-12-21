🚀 Cloudfolio — Cloud Engineer Portfolio (AWS + CI/CD)

Cloudfolio is a production-ready, serverless personal portfolio built to demonstrate real-world cloud engineering and DevOps practices using AWS.

🌐 Live Website: https://www.sslinfo.xyz

📦 Repository: https://github.com/sanvedlatkar/Cloudfolio-

📌 Overview

This project showcases how a modern frontend application can be deployed securely and efficiently using AWS managed services, following cloud-native and cost-efficient (Free Tier) best practices.

The focus is not just UI, but:

Infrastructure design

Secure delivery

CI/CD automation

CDN caching behavior

DNS & SSL management

🏗️ Architecture

High-level flow:

GitHub → GitHub Actions (CI/CD)
        → AWS S3 (Static Hosting)
        → AWS CloudFront (CDN + HTTPS)
        → Custom Domain via GoDaddy (DNS)
        → End Users (Global)


Key components:

AWS S3 – Static website hosting

AWS CloudFront – CDN, caching, HTTPS termination

AWS ACM – SSL/TLS certificate management

GitHub Actions – Automated CI/CD pipeline

GoDaddy DNS – Custom domain routing

Next.js (App Router) – Frontend framework

⚙️ Tech Stack
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

Responsive & SEO-friendly UI

Cloud & DevOps

AWS S3

AWS CloudFront

AWS Certificate Manager (ACM)

GitHub Actions (CI/CD)

Custom domain + HTTPS

Cost-optimized (AWS Free Tier)

🔁 CI/CD Pipeline

Every push to the main branch triggers:

Install dependencies

Build the Next.js application

Generate static output

Sync build artifacts to S3

CloudFront serves updated content globally

This ensures zero-downtime deployments with minimal manual intervention.

🔐 Security & Performance

HTTPS enforced using AWS ACM

Global edge caching via CloudFront

Reduced latency for end users

No servers to manage (fully serverless)

DNS validation and SSL lifecycle handled securely

🧠 Key Learnings

Designing serverless static architectures on AWS

Handling real-world CDN caching behavior

Managing DNS + SSL certificate validation

Automating deployments with GitHub Actions

Following production-grade cloud practices

📸 Preview

Clean UI, responsive design, and professional branding
Optimized for both recruiters and technical reviewers

🚧 Future Enhancements

CloudFront security headers (HSTS, CSP)

Access logs & monitoring

PWA support

Performance optimization audits

Infrastructure as Code (Terraform / CloudFormation)

👋 About Me

I’m a Cloud Engineering enthusiast with a strong interest in:

AWS

DevOps

CI/CD

Scalable and secure cloud architectures

Actively seeking Cloud / DevOps / Platform Engineering opportunities.

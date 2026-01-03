---
id: "csa"
title: "Canine Stick Authority"
description: "Full-stack TypeScript application for premium wooden stick registry with MongoDB, JWT auth, and PDF certificate generation."
technologies: ["typescript", "nodejs", "mongodb", "express"]
types: ["software", "web"]
topics: ["full-stack", "authentication", "database"]
imageUrl: "/projects/csa.png"
---

# Canine Stick Authority

A comprehensive stick registry and certification service built with modern full-stack technologies.

## Overview

The Canine Stick Authority (CSA) is a whimsical yet fully-functional web application that allows users to register, certify, and track premium wooden sticks. This project showcases enterprise-level architecture and best practices in a fun and engaging way.

## Key Features

- **User Authentication**: Secure JWT-based authentication with Google OAuth integration
- **Stick Registry**: Complete CRUD operations for stick management
- **PDF Certificates**: Automated generation of official stick certificates
- **MongoDB Database**: Robust data storage and retrieval
- **RESTful API**: Express.js backend with proper routing and middleware
- **Modern UI**: Nature-inspired design with earth tones using Next.js and Tailwind CSS

## Technical Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, Google OAuth 2.0
- **File Generation**: PDFKit for certificate generation

## Challenges & Solutions

One of the main challenges was implementing secure file upload handling while maintaining performance. This was solved by implementing streaming uploads with validation middleware and temporary file cleanup.

## Future Enhancements

- Real-time stick tracking with WebSockets
- Mobile app for iOS and Android
- AI-powered stick quality assessment
- Community features and social sharing

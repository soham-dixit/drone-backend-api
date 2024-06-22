# Backend API Documentation

This repository contains the backend API for managing users, drones, missions, and sites. Below you'll find details on endpoints, how to set up the project, and how to run the API.

## Table of Contents

- [Endpoints](#endpoints)
- [Setup](#setup)
- [Running the API](#running-the-api)
- [Docker Deployment](#docker-deployment)
- [Dependencies](#dependencies)

## Endpoints

### Authentication

- **POST /api/auth/register**

  - Register a new user.

- **POST /api/auth/login**
  - Login to obtain an access token.

### Sites

- **POST /api/sites/**
  - Create a new site.
- **GET /api/sites/**
  - Retrieve all sites belonging to the authenticated user.
- **PUT /api/sites/:id**
  - Update a site by ID.
- **DELETE /api/sites/:id**

  - Delete a site by ID.

- **GET /api/sites/:id/missions**

  - Retrieve all missions associated with a specific site.

- **GET /api/sites/:id/drones**
  - Retrieve all drones associated with a specific site.

### Drones

- **POST /api/drones/**
  - Create a new drone.
- **PUT /api/drones/:id**
  - Update a drone by ID.
- **DELETE /api/drones/:id**
  - Delete a drone by ID.

### Missions

- **POST /api/missions/**
  - Create a new mission.
- **PUT /api/missions/:id**
  - Update a mission by ID.
- **DELETE /api/missions/:id**
  - Delete a mission by ID.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd flytbase-backend-assignment
   ```

2. **Install dependencies:**
   ```bash
    npm install
   ```
3. **Set environment variables:**
   ```bash
    Create a .env file in the root directory.
    Define environment variables such as PORT, MONGODB_URI, and JWT_SECRET.
   ```

## Running the API

To start the server:

```bash
 npx nodemon server.js
```

## Docker Deployment

For Docker deployment, you can use the Docker image available on Docker Hub:

- [Docker Hub Repository](https://hub.docker.com/repository/docker/soham727/flytbase-backend-assignment)

To run the Docker container:

1. **Pull the Docker image:**

   ```bash
    docker run -d -p 3000:3000 --env-file .env soham727/flytbase-backend-assignment:latest
   ```

2. **Run the Docker container:**
   ```bash
    docker run -p 3000:3000 soham727/flytbase-backend-assignment:latest
   ```

## Dependencies

- **Express.js**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **JSON Web Token (JWT)**: Authentication mechanism.

FROM node:22-alpine

WORKDIR /app

# Install system dependencies needed for git-based deps and native modules (e.g., sharp)
RUN apk add --no-cache git python3 make g++ libc6-compat

COPY package*.json .

# Install dependencies
RUN npm ci

COPY . .

# Build Next.js app
RUN npm run build

# Expose app port (web service uses this)
EXPOSE 4001

# Default command (docker-compose overrides for web/worker services)
CMD ["npm", "run", "start"]
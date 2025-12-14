FROM node:22-alpine

WORKDIR /app

# Install system dependencies needed for git-based deps and native modules (e.g., sharp)
RUN apk add --no-cache git python3 make g++ libc6-compat

COPY package*.json .

# Install dependencies
RUN npm ci

COPY . .

# Vite exposes import.meta.env at BUILD time, so pass these as build args (Dokploy)
ARG VITE_FIREBASE_API_KEY
ARG VITE_FIREBASE_AUTH_DOMAIN
ARG VITE_FIREBASE_PROJECT_ID
ARG VITE_FIREBASE_STORAGE_BUCKET
ARG VITE_FIREBASE_MESSAGING_SENDER_ID
ARG VITE_FIREBASE_APP_ID

ENV VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY \
    VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN \
    VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID \
    VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET \
    VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID \
    VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID

# Build Vite app
RUN npm run build

# Expose app port (web service uses this)
EXPOSE 4001

# Default command (docker-compose overrides for web/worker services)
CMD ["npm", "run", "start"]
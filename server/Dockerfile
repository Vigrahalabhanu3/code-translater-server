# User Node.js 18 base image
FROM node:18-slim

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json and package-lock.json are copied.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Expose the port that the app listens on
EXPOSE 8080

# Start the service.
CMD [ "node", "server.js" ]

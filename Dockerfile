FROM node:16-alpine
RUN npm install -g pm2

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./.npmrc ./.npmrc

# Install node_modules
RUN npm install --force

# Production use node instead of root
# USER node

COPY ./ ./
# Remove .env file in sourecode
RUN rm -f /usr/src/app/.env

# Copy env file for production-build
COPY ./.env.production ./.env

RUN cat /usr/src/app/.env
# Build Next.JS
RUN npm run build

# Copy production env into dist directory for start production-container
COPY ./.env.production ./dist/apps/customer-web/.env

EXPOSE 3000
CMD pm2 list && pm2-runtime start ecosystem.config.js
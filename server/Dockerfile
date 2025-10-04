# Stage 1 — build
FROM node:18-alpine AS builder
WORKDIR /app
# only copy lockfiles first for better caching
COPY package*.json ./
# install all dependencies (including dev dependencies for potential build steps)
RUN npm ci
COPY . .
# Since this is a simple Express server, no build step needed
# RUN npm run build

# Stage 2 — runtime
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# create non-root user
RUN addgroup -S app && adduser -S app -G app
# copy package.json and install production deps
COPY package*.json ./
RUN npm ci --only=production
# copy source files (since no build step)
COPY --from=builder /app/index.js ./
# copy any other required assets
EXPOSE 8080
USER app
CMD ["node", "index.js"]

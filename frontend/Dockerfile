# ---- Base ----
FROM node:21-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# ---- Dev Stage ----
FROM base AS dev
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---- Build Stage ----
FROM base AS builder
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:21-alpine AS prod
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]

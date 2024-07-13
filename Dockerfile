FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

# Install build dependencies
# RUN apk add --no-cache \
#   python3 \
#   make \
#   g++ \
#   libc6-compat \
#   vips-dev

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 8000

CMD ["node", "dist/server.js"]

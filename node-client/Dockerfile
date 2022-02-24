FROM node:slim AS builder

WORKDIR /app

COPY ./package* /app/
RUN npm ci

COPY ./* /app/
RUN npm run build

## ----

FROM node:slim

WORKDIR /app
COPY --from=builder /app/dist/index.js /app/

CMD ["node", "index.js"]
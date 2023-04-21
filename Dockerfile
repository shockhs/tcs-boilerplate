FROM node:gallium-slim as build
WORKDIR /app
RUN apt update && apt install zlib1g-dev dh-autoreconf -y
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

FROM alpine:latest
WORKDIR /app/public
COPY --from=build /app/public .

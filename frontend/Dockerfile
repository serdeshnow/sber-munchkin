FROM node:lts-alpine AS build

ARG VITE_ENV
ARG VITE_APP_NAME
ARG VITE_API_URL

ENV VITE_ENV=${VITE_ENV}
ENV VITE_APP_NAME=${VITE_APP_NAME}
ENV VITE_API_URL=${VITE_API_URL}

WORKDIR /app

RUN npm install -g pnpm@latest
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM caddy:alpine

COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]

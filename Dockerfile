ARG NODE_VERSION=22.16.0

# -----------------------------------------------
# Install dependencies for building the image
# -----------------------------------------------
FROM node:${NODE_VERSION} AS dependencies

WORKDIR /app

# As we are using yarn berry we need the .yarn directory and .yarnrc.yml file
COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

RUN yarn install --immutable

# ----------------------------------------------
# BUILD
# ----------------------------------------------
FROM node:${NODE_VERSION} AS build

WORKDIR /app

COPY . .

# Copy dependencies from the dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

RUN yarn run build

# ----------------------------------------------
# PRODUCTION
# ----------------------------------------------
FROM node:${NODE_VERSION}-alpine AS production

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

WORKDIR /app

# Copy files for production
COPY --from=build --chown=node:node /app/.output ./

COPY --from=build /app/.env.${NODE_ENV} ./.env

# Ensure the data folder exists and is writable to the node user
RUN mkdir -p /app/data && chown -R node:node /app/data

# Change ownership of the app directory to the node user
USER node

EXPOSE 3000

CMD [ "node", "./server/index.mjs", "--host", "0.0.0.0", "--port", "3000" ]
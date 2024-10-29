FROM node:23 AS base

WORKDIR /usr/src/app

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git pkg-config && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

COPY package.* ./
RUN npm install -f

COPY . .

CMD ["npm", "run", "dev"]
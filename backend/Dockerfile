FROM node:10-alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=4444
ENV PORT $PORT

RUN npm i npm@latest -g

WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force

WORKDIR /opt
COPY . /opt

CMD ["npm", "run", "start"]
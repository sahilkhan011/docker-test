FROM node:20

RUN mkdir /docker-test

WORKDIR /docker-test

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

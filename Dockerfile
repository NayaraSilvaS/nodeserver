FROM node:12 

RUN apt-get update \
  && apt-get install --no-install-recommends -y \
  && apt-get install -y git \
  && apt-get install -y nano

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g tslint

EXPOSE 3000

CMD [ "node", "server.js" ]
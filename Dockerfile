FROM node:current-slim

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install --only=prod
COPY dist /app/dist

ENV NODE_ENV production
ENV PORT 8080

EXPOSE 8080

CMD ["npm", "run", "start-container"]

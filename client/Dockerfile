FROM node:alpine
COPY "./" "/app"
WORKDIR "/app"
RUN npm install
ENTRYPOINT [ "npm", "run", "start" ]
EXPOSE 3000
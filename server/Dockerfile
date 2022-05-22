FROM node:18.2.0
COPY "./" "/app"
WORKDIR "/app"
RUN npm install
ENTRYPOINT [ "node", "app" ]
EXPOSE 8080
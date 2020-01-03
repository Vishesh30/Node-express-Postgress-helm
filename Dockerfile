FROM node:10.15.3    

RUN mkdir /app
WORKDIR /app

COPY . .

RUN ["rm", "-rf", "package-lock.json"]
RUN ["npm", "install"]

EXPOSE 3000

CMD [ "npm", "run", "start" ]

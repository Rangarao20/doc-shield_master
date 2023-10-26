# Use an official Node.js runtime as the base image
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build
EXPOSE 15000
CMD ["npm", "start"]

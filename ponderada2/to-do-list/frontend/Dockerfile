# # Use the official Node.js image as the base image
# FROM node:14-slim

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the package.json and package-lock.json files into the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the contents of the "src" folder into the container
# COPY src ./src

# # Expose port 3000 for the React app
# EXPOSE 3000

# # Run the React app using the npm start command
# CMD ["npm", "start"]

# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start
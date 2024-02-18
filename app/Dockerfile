# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

WORKDIR /usr/local/app
ADD ./ /usr/local/app/

RUN npm install
RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/demo-app/browser /usr/share/nginx/html

EXPOSE 80

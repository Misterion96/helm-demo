FROM nginx:alpine

COPY ./public/index.html /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
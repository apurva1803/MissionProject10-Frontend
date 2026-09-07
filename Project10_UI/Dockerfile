FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY dist/project10-ui/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
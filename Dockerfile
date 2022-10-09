FROM node:16-alpine as SETUP
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:1.23-alpine 
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=SETUP /app/dist /usr/share/nginx/html
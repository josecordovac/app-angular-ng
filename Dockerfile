# Etapa 1: Construcción
FROM node:18.19 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa 2: Ejecución
FROM nginx:alpine
COPY --from=build /app/dist/app-ng/browser /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

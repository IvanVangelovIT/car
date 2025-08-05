FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Създаваме production билд
RUN npm run build

# Сервираме го с nginx
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80

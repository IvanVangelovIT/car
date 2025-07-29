# Използваме Node.js като базов образ
FROM node:22.17.1

# Създаваме работна директория
WORKDIR /app

# Копираме файловете и инсталираме зависимостите
COPY package*.json ./
RUN npm install

# Копираме останалите файлове
COPY . .

# Стартираме сървъра
CMD ["node", "index.js"]

EXPOSE 5000

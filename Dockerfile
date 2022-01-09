FROM node

WORKDIR /app

COPY package.json .

# Instalar as dependencias
RUN npm install 

# Rodar o container do mongo
RUN docker-compose up -d 

EXPOSE 3000

CMD ["npm", "start"]

COPY . .

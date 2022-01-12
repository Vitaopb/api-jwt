FROM node

USER node
WORKDIR /app

# Instalar as dependencias
COPY package.json .

RUN npm install 

EXPOSE 3000

COPY . .

CMD ["npm", "start"]
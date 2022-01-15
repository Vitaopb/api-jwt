FROM node

USER root
WORKDIR /app

# Instalar as dependencias
COPY package.json .

RUN npm install 

EXPOSE ${SERVER_PORT}

COPY . .

CMD ["npm", "start"]
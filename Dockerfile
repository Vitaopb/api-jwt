FROM node

USER node
WORKDIR /app

# Instalar as dependencias
COPY package.json .
COPY package-lock.json .
RUN npm install 

COPY . .

CMD ["npm", "start"]
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Set the correct permissions
RUN chmod -R 755 /usr/src/app

EXPOSE 3000
CMD ["node", "app.js"]

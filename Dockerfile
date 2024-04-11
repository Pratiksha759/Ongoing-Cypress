FROM cypress/included:11.2.0
FROM node:alpine
COPY . .
RUN npm install
CMD ["npx","cypress","run"]
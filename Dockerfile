FROM cypress/included:11.2.0
RUN mkdir /cypress-docker
WORKDIR /app
COPY . .
RUN npm install
CMD ["npx","cypress","run"]
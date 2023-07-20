# Uses the node base image with the latest LTS version
FROM node:18.14.2
# Informs Docker that the container listens on the 
# specified network ports at runtime
EXPOSE 4000
# Copies index.js, the two package files, and the spreadsheets from the local 
# directory to a new app directory on the container
COPY src index.js package.json yarn.lock spreadsheets  app/
# Changes working directory to the new directory just created
WORKDIR /app
# Installs dependencies on container
RUN yarn install --frozen-lockfile
# Command container will actually run when called
CMD ["node", "index.js"]
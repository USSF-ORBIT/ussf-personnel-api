# Uses the node base image with the latest LTS version
FROM node:18.16.0
# Informs Docker that the container listens on the 
# specified network ports at runtime
EXPOSE 4000
# Copy spreadsheets
COPY spreadsheets/ app/spreadsheets/
COPY tsconfig.json package.json yarn.lock app/
COPY src/ app/src/
# Changes working directory to the new directory just created
WORKDIR /app
# Installs dependencies on container
RUN yarn install --frozen-lockfile
RUN yarn compile
# Command container will actually run when called
CMD ["node", "./dist/index.js"]

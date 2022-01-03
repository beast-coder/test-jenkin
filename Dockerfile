FROM node:14

ENV PORT 2020
ENV DIR /opt/httpd/src/
# Create app directory
RUN mkdir -p ${DIR}
WORKDIR ${DIR}
#RUN mkdir -p pages

# Installing dependencies
COPY package*.json ${DIR}/
RUN npm install

# Copying source files
COPY . ${DIR}/

# Building app
RUN npm run build
EXPOSE ${PORT}

# Running the app
#CMD "npm" "run" "start"
CMD "npm" "start"

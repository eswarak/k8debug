FROM mhart/alpine-node:11
LABEL maintainer="IBM Hybrid Cloud CoC Team"

CMD mkdir /app
WORKDIR /app
COPY app.js .
COPY package.json .

RUN apk add --no-cache curl bash nano \
&& npm install

CMD ["node", "app.js"]
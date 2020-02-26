FROM mhart/alpine-node:11
LABEL maintainer="IBM Hybrid Cloud CoC Team"

CMD mkdir /app
WORKDIR /app
COPY app.js .
COPY package.json .
COPY public ./public

RUN apk add --no-cache curl bash nano \
&& npm install

EXPOSE 4100

CMD ["node", "app.js"]
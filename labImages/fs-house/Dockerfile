FROM alpine

CMD mkdir /app
WORKDIR /app
COPY app.sh .

RUN apk add curl bash nano \
&& chmod +x /app/app.sh 

CMD ["/bin/bash", "-c", "./app.sh house"]
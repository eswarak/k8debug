FROM alpine
LABEL maintainer="IBM Hybrid Cloud CoC Team"

CMD mkdir /app
WORKDIR /app
COPY app.sh .

RUN apk add --no-cache curl bash nano \
&& chmod +x /app/app.sh 

CMD ["/bin/bash", "-c", "./app.sh baker"]
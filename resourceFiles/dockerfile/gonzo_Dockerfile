FROM alpine
LABEL maintainer="IBM Hybrid Cloud CoC Team"

RUN addgroup -S appusers \ 
&& adduser -S appuser -G appusers

USER appuser
CMD mkdir /app
WORKDIR /app
COPY --chown=appuser:appusers app.sh .

USER root

RUN apk add --no-cache curl bash nano \
&& chmod +x /app/app.sh 

USER appuser

# Expect YAML to provide entrypoint
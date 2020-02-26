FROM mhart/alpine-node:11
LABEL maintainer="IBM Hybrid Cloud CoC Team"

RUN addgroup -S appusers \
&& adduser -S appuser -G appusers
USER appuser
CMD mkdir /app
WORKDIR /app
COPY --chown=appuser:appusers app.js .
COPY --chown=appuser:appusers package.json .

USER root
RUN apk add --no-cache curl bash nano \
&& npm install \
&& chmod -R 777 /app 

USER appuser

# Expect YAML to provide entrypoint
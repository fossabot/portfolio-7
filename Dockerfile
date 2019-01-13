FROM node:8.15.0-onbuild as builder

COPY . .
RUN npm i -g gatsby && npm install && gatsby build

FROM flashspys/nginx-static

COPY --from=builder /usr/src/app/public/ static/
COPY keybase.txt /static
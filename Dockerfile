FROM node:8.11.3-onbuild as builder

COPY . .
RUN npm install webpack -g && npm install && npm run build

FROM flashspys/nginx-static

COPY --from=builder /usr/src/app/dist/* static/
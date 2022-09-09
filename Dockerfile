FROM registry.cn-shenzhen.aliyuncs.com/cqcy/iview:3.1.5
# FROM nginx:1.13.7-alpine
COPY dist /usr/share/nginx/html
RUN chown -R nginx.nginx /usr/share/nginx/html
EXPOSE 80
# docker build -t financial-operating-system:v1.0 .

# frontend/Dockerfile

# Bước 1: Sử dụng Node.js để xây dựng ứng dụng
FROM node:18 AS build
WORKDIR /app

# Sao chép các tệp cấu hình và cài đặt các phụ thuộc
COPY package*.json ./
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Xây dựng ứng dụng Angular
RUN npm run build --prod

# Bước 2: Sử dụng Nginx để phục vụ ứng dụng
FROM nginx:alpine
# Sao chép các tệp đã xây dựng vào thư mục phục vụ của Nginx
COPY --from=build /app/dist/video-processing-app /usr/share/nginx/html

# Mở cổng 80
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]

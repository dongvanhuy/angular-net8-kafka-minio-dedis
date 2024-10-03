# video-processing-api/Dockerfile

# Sử dụng Node.js làm hình ảnh cơ sở
FROM node:18 AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép tệp package.json và package-lock.json (nếu có) từ thư mục hiện tại
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng
RUN npm run build --prod

# Chuyển sang hình ảnh Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép tệp đã xây dựng vào Nginx
COPY --from=build /app/dist/video-processing-app /usr/share/nginx/html

# Expose cổng 80
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]

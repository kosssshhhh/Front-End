# Node.js의 LTS 버전인 18.x를 베이스 이미지로 사용합니다.
FROM node:18-alpine AS build

# 컨테이너 내에서 작업 디렉토리를 설정합니다.
WORKDIR /app

# package.json과 yarn.lock 파일을 복사합니다.
COPY package.json yarn.lock ./

# 의존성을 설치합니다.
RUN yarn install

# 모든 소스 코드를 복사합니다.
COPY . .

# Vite를 사용하여 프로젝트를 빌드합니다.
RUN yarn build
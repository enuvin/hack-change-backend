FROM node:18-alpine

# Установите Python и необходимые зависимости
RUN apk add --no-cache python3 py3-pip

# Установите библиотеку python-dotenv в виртуальной среде
RUN python3 -m venv /venv
RUN /venv/bin/pip install python-dotenv
RUN /venv/bin/pip install langchain-gigachat

# Установите рабочую директорию
WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install --platform=linuxmusl --arch=x64 sharp

COPY . .

# Установите переменную окружения для использования виртуальной среды
ENV PATH="/venv/bin:$PATH"

EXPOSE 5000

CMD ["npm", "run", "dev"]
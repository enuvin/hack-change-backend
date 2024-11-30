FROM node:18-alpine

# RUN apk add --no-cache python3 py3-pip

# RUN python3 -m venv /venv
# RUN /venv/bin/pip install python-dotenv
# RUN /venv/bin/pip install langchain-gigachat

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install --platform=linuxmusl --arch=x64 sharp

COPY . .

# ENV PATH="/venv/bin:$PATH"

EXPOSE 5000

CMD ["npm", "run", "dev"]
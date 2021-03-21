FROM node:14.16.0

RUN mkdir /backend
WORKDIR ./backend

COPY [ "package.json", "package-lock.json*", "./" ]

RUN npm install
COPY . .

CMD ["npm", "run", "startdev"]

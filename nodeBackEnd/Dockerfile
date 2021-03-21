FROM node:14.16.0

RUN mkdir /backend
WORKDIR ./backend

COPY [ "package.json", "package-lock.json*", "./" ]

RUN npm install
COPY . .
ENTRYPOINT [ "sh", "./miig.sh" ]
CMD ["npm", "run", "startdev"]

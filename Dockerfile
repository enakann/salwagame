FROM node:10 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
RUN npm install -g serve
RUN yarn global add serve
CMD serve -s build

# Stage 2 - the production environment
#FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=react-build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]




#The build folder is ready to be deployed.
#You may serve it with a static server:

#  yarn global add serve
#  serve -s build

#Find out more about deployment here:

#  bit.ly/CRA-deploy


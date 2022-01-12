FROM ianwalter/puppeteer:latest
COPY . /app
WORKDIR /app
RUN yarn install
CMD yarn run ui --cucumberOpts.tagExpression='@Ui'
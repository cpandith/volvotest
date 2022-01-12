WebDriverIO
=============

Prerequisite
-----------------
* Docker is Insatlled
* NodeJS is Installed
* Yarn is Installed

On First Clone, Run:
```
yarn install
```

To Run UI Tests on Local Machine
---------------------
```
yarn run ui --cucumberOpts.tagExpression='@Ui' (Can use any Tag)
```

Reporting
---------------------

Allure is the Reporting tool, 

To View Reports:
```
yarn run report
```

To Run Tests on Docker
---------------------

Create Docker Image:
```
docker build -t volvotest .
```
Run Test on Docker Container:
```
docker run volvotest
```
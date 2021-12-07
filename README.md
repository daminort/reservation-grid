# Reservation Grid
A modular grid that allows managing reservations for a hotel

## Local development

In order to have an ability test package locally without need to publish it to the NPM follow the next steps:

1. Build package
```
npm run build
```

2. Go to the package in which you are planning to use Reservation Grid and link it there (in our case - `example` folder)
```
cd example
npm run relink
```
This command will remove folder `node_modules/@daminort` and create new actual linked folder.

3. Go back to the package folder and link React package. It is needed to avoid errors regarding different React instances:
```
cd ..
npm run relink
```

You should go through points 1-2 every time you update package.


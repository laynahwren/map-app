# Map Application

An application that leverages [MapBox](https://www.mapbox.com) and the [National Obesity by State dataset](https://catalog.data.gov/dataset/national-obesity-by-state-d765a) to display a map of the United States obesity percentages by state population. Data can be viewed in map form or table form.

## Menu
- [Application Highlights](#application-highlights)
- [Tech Stack](#tech-stack)
- [Getting Started Locally](#getting-started-locally)

## Application Highlights

### Map View
![Screenshot 2023-10-21 143727](https://github.com/laynahwren/map-app/assets/106330802/807f86d0-1605-4527-84ba-6ce3e90d61b7)

### Map Interaction
![Screenshot 2023-10-21 143949](https://github.com/laynahwren/map-app/assets/106330802/b16a9e9f-23b6-4415-b210-e26d98e5d198)

### Table View Sorted by State
![Screenshot 2023-10-21 144127](https://github.com/laynahwren/map-app/assets/106330802/d6dc5847-e3b7-414d-8c6c-de106f69085d)

### Table View Sorted by Obesity
![Screenshot 2023-10-21 145853](https://github.com/laynahwren/map-app/assets/106330802/eed410d6-f84a-44d3-b7ca-14c99182afed)

## Tech Stack

### React
I used `create-react-app` to create the application since it could all be done on the client side. React is the framework I have the strongest experience with, and leveraging `create-react-app` is a quick and simple way to get started with a basic single-page application such as this one. Using React allowed me to use `fetch` to get the necessary data. I was also able to use hooks like `useState` and `useEffect`.

### JavaScript
React uses JavaScript by default so the `App` component is written in JavaScript. This is also the language I have to most experience with.

### TypeScript
I have limited experience with TypeScript, so I used it for my `Table` and `Map` components to get more familiar with the differences between it and JavaScript in the context of a React app.

### CSS
I often use frameworks for components and styling and wanted to create this application with plain CSS instead to get more practice with it.

### HTML
HTML is necessary for creating components for web applications.

### MapBox
This was a requirement, and it was my first time using MapBox. I utilized the studio to create a custom map style and a tileset layer for the obesity geo data. I then integrated the custom map and added an interactive layer so that clicking on an individual state would show a popup with the obesity percentage for that state. The interactive layer is styled based on the percentages.

## Getting Started Locally

### Open Folder
The `map-app` folder contains all the necessary files and dependencies for running the application locally. Open in an IDE (I used VSCode).

### Install
Open a terminal and `cd` to the `map-app` directory. Run `npm install` to install all necessary modules.

### Run
Once everything is installed, run `npm start` in the same terminal. This will build the application and start it on [http://localhost:3000/](http://localhost:3000/)

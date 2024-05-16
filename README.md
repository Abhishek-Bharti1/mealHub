# Recipe List Drag and Drop

This project is a recipe list application with drag-and-drop functionality using React, Redux, and `react-dnd` with the HTML5 backend. Users can reorder recipes by dragging and dropping them, and view detailed information for each recipe.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Acknowledgements](#acknowledgements)

## Features

- Fetch and display a list of recipes.
- Drag and drop recipes to reorder them.
- View detailed information for each recipe by clicking on it.
- Smooth animations and user-friendly UI.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (>=12.x)
- npm (>=6.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Abhishek-Bharti1/mealHub.git
   cd mealHub
   
2. Install dependencies:
    npm install
    
3. Start the development server:
   npm run dev
   
### Usage

- Fetch Recipes: The application automatically fetches a list of recipes when it starts.
- Reorder Recipes: Click and drag a recipe to change its position in the list.
- View Recipe Details: Click on a recipe to view more details about it.

### Project structure
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── DraggableRecipe.js
│   │   └── RecipeList.js
│   ├── features
│   │   └── recipes
│   │       ├── recipesSlice.js
│   │       └── ...
│   ├── styles
│   │   └── RecipeList.module.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...

 ### Acknowledgements
    - React
    - Redux toolkit
    - React DnD
    - React Router
    - Framer Motion
    - CSS

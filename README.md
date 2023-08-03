# Recipe App
## Live Link: https://fatihay-blog-app.vercel.app/
## Description
This is a simple recipe application that allows users to search and explore various food recipes. Users can view recipes on the home page and access detailed information by clicking on them. The application supports user registration and login using Firebase authentication. The app features a customizable navbar and an appealing design.

## Features
- <span style="font-size: larger;">**User Authentication (Login) and Registration (Register)**</span>: Utilizes Firebase for user authentication and authorization. Allows users to register and login to the application.
- <span style="font-size: larger;">**Recipe Listing**</span>: Displays a list of various recipes with images, titles, and brief descriptions on the home page.
- <span style="font-size: larger;">**Recipe Details**</span>: Provides detailed information about each recipe, including ingredients, preparation steps, and cooking time.
- <span style="font-size: larger;">**Search Functionality**</span>: Enables users to search for specific recipes based on keywords, ingredients, or categories.
- <span style="font-size: larger;">**Firebase Integration**</span>: Utilizes Firebase for user authentication and data storage, ensuring a scalable and reliable backend infrastructure.
- <span style="font-size: larger;">**Responsive Design**</span>: Enjoy a smooth and intuitive user experience on various devices, including desktops, tablets, and mobile phones.

## Project Skeleton
```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.js
│   ├── assets
│   │   └── [your files...]
│   ├── auth
│   │   └── firebase.js
│   ├── components
│   │   ├── footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── header
│   │   │   ├── Header.jsx
│   │   │   └── HeaderStyles.jsx
│   │   └── navbar
│   │       ├── Navbar.jsx
│   │       └── NavbarStyles.jsx
│   ├── context
│   │   └── AuthContext.js
│   ├── helpers
│   │   └── ToastNotify.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── about
│   │   │   ├── About.jsx
│   │   │   └── AboutStyles.jsx
│   │   ├── details
│   │   │   ├── Details.jsx
│   │   │   └── DetailsStyles.jsx
│   │   ├── home
│   │   │   ├── Home.jsx
│   │   │   ├── HomeStyles.jsx
│   │   │   └── RecipeCard.jsx
│   │   ├── login
│   │   │   ├── Login.jsx
│   │   │   └── LoginStyles.jsx
│   │   └── register
│   │       └── register.jsx
│   └── router
│       ├── AppRouter.jsx
│       └── PrivateRouter.jsx
└── tailwind.config.js
```
## Expected Outcomes
<div >
<img width="660px" src="./blog-app.gif"/>
<img width="160px" src="./blog-app1.gif"/>
</div>

## Technologies and Libraries
- <span style="font-size: larger;">**React.js**</span>: A powerful JavaScript library for building interactive user interfaces.
- <span style="font-size: larger;">**Firebase**</span>: A cloud-based platform provided by Google that offers various services, including authentication, real-time database, and hosting.
- <span style="font-size: larger;">**React Router**</span>: A library that enables navigation and routing in a React application.
- <span style="font-size: larger;">**Tailwind CSS**</span>: A highly customizable CSS framework for creating stunning designs with minimal effort.
- <span style="font-size: larger;">**Context API**</span>: A built-in feature in React used for state management and global data sharing.
- <span style="font-size: larger;">**Styled-components**</span>: A library for styling React components using tagged template literals.
- <span style="font-size: larger;">**React-toastify**</span>: A library for displaying toast notifications in React applications.
- <span style="font-size: larger;">**Axios**</span>: A popular JavaScript library used for making HTTP requests from the browser.
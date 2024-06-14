# GitHub Finder

GitHub Finder is a React application that allows users to search for GitHub profiles by username. It fetches and displays user data from the GitHub API, providing a quick and easy way to find GitHub profiles. I am using:
- GitHub API
- framer-motion to create a nice transition between pages.
- 'axios' instead of 'fetch' for getting the GitHub data.
- Hooks (useState, useEffect, useParams, useNavigate).
- react-router-dom features to redirect the user to the profile page.

## Features

- Search for GitHub users by username
- View user profiles with details such as name, avatar, and repositories
- Responsive and user-friendly interface

## DEMO

See DEMO [here](https://github-finder-wellfc.netlify.app/)

## Technologies used
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/wellfc/github-finder.git
   cd github-finder

2. Install dependencies:

   ```sh
   npm install

## Environment Variables
To run this project, you will need to add the following environment variable to your .env file:

    REACT_APP_GH_TOKEN=your_github_token

## Usage
1. Start the development server:
    ```sh
    npm start

2. Open http://localhost:3000 in your browser to view the app.

3. Enter a GitHub username in the search bar and click "Search" to view the user's profile.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). 

# Eddflix

Join Eddflix & harness the power of education to "change the world, one payment at a time."

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Eddflix is an educational platform aimed at leveraging the power of education to make a global impact. This project includes various sections such as Hero Section, Perks Section, Steps Section, Benefits Section, and a Footer, all designed to provide a seamless user experience.

## Features

- **Hero Section**: Highlights the main message and call to action.
- **Perks Section**: Details the perks of joining Eddflix.
- **Steps Section**: Guides users through the process of getting started.
- **Benefits Section**: Outlines the benefits of using Eddflix.
- **Footer**: Provides links to important pages and social media icons.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Next.js**: Framework for server-rendered React applications.
- **CSS Modules**: For styling components.
- **FontAwesome**: For adding icons.
- **GitHub Pages**: For deployment.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/eddflix.git
cd eddflix
```

2. Install the dependencies:

```bash
npm install
```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

## Deployment

This project can be deployed to GitHub Pages using the following steps:

1. Build the project:

```bash
npm run build
```

2. Export the project:

```bash
npm run export
```

3. Deploy the `out` directory to GitHub Pages. You can use the `gh-pages` package to do this easily:

```bash
npm install --save-dev gh-pages
```

Add the following scripts to your `package.json`:

```json
"scripts": {
  "predeploy": "npm run build && npm run export",
  "deploy": "gh-pages -d out"
}
```

Deploy the project:

```bash
npm run deploy
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes tests for any new functionality.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


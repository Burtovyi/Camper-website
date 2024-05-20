# Camper Website

This is a web application for browsing and booking campers. The project is built using React and Vite, with state management handled by Redux.

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   git clone https://github.com/Burtovyi/Camper-website.git
   cd camper-website

   ## Install the dependencies:
   npm install
   or 
   yarn install


   The optimized build will be stored in the dist directory.

Deployment

The project is configured to deploy on Vercel. To deploy the project, follow these steps:

	1.	Install the Vercel CLI:
    npm install -g vercel

    2.	Run the deployment command:
    vercel

    Project Details

Components

	•	BookForm: Handles the booking form for campers.
	•	BtnLoadMore: A button component to load more items.
	•	CamperDetailsModal: A modal component to show details of a camper.
	•	CampersList: Displays a list of campers.
	•	CampersListItem: Represents an individual camper in the list.
	•	DatePicker: A date picker component.
	•	Features: Displays features of a camper.
	•	Filters: Handles the filtering of campers.
	•	Loader: A loading spinner component.
	•	Location: Displays location details.
	•	Navigation: The navigation bar of the application.
	•	PropsList: Displays a list of properties.
	•	Reviews: Displays reviews for campers.
	•	StarsList: Displays a star rating.
	•	VehicleDetails: Displays details of a vehicle.

Pages

	•	CatalogPage: The main catalog page that lists all campers.
	•	CatalogPage.jsx: The main component for the catalog page.
	•	CatalogPage.module.css: Styles for the catalog page.
	•	index.js: The entry point for the catalog page.
	•	FavoritesPage: Displays the user’s favorite campers.
	•	FavoritesPage.jsx: The main component for the favorites page.
	•	FavoritesPage.module.css: Styles for the favorites page.
	•	index.js: The entry point for the favorites page.
	•	Home: The home page of the application.
	•	Home.jsx: The main component for the home page.
	•	Home.module.css: Styles for the home page.
	•	index.js: The entry point for the home page.

Redux

The redux directory contains the Redux setup for state management.

Services

The service directory contains service-related code, including the main entry point (main.jsx) and styles (index.css).

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Contact

If you have any questions or suggestions, feel free to open an issue or contact the project maintainers.


This `README.md` provides an overview of the project, instructions for setting up and running the project, and a detailed explanation of the project's structure and components. Adjust the links, contact information, and any other specific details to fit your actual project information.
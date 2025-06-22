# Algerian Recipe Book


A bilingual web application for managing and sharing traditional Algerian recipes, with full Arabic (RTL) language support.

> **⚠️ Development Status Notice:** This project is currently in early development. The recipe data model has not been created yet, and frontend-backend integration has not yet taken place. API endpoints and features described in this README represent the planned functionality.

## Features

- 🍲 **Recipe Management**: Create, view, edit, and organize your personal recipe collection
- 💾 **User Profiles**: Secure account creation with personalized dashboards and statistics
- ⭐ **Favorites System**: Save and organize your favorite recipes
- 🔍 **Search & Filter**: Find recipes by category, difficulty level, or ingredients
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Theme Options**: Choose between light and dark mode
- 🌐 **Multi-language**: Full support for both Arabic and English with RTL layout

## Technology Stack

### Frontend
- **React** - Component-based UI development
- **Tailwind CSS** - Utility-first styling framework
- **Vite** - Fast development environment and build tool
- **Lucide React** - Modern icon library
- **Axios** - API request handling

### Backend
- **Django** - Python web framework
- **Django REST Framework** - API development
- **SimpleJWT** - Token-based authentication
- **PostgreSQL** - Relational database

## Getting Started

### Prerequisites
- Node.js (v14+)
- Python (v3.8+)
- PostgreSQL

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/recipe-book.git
cd recipe-book/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd ../backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment variables
cp .env.example .env
# Edit the .env file with your database credentials

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

## Installation

### Database Setup
```bash
# Create PostgreSQL database
createdb recipe_book_db

# The application will use the database credentials from your .env file
```

### Environment Configuration
Make sure to update the following in your .env file:
- Database connection details
- Secret keys
- API credentials (if using external services)

## Usage

### User Registration and Login
1. Navigate to the registration page
2. Create an account with email and password
3. Log in with your credentials

### Creating Recipes
1. From your dashboard, click "Add New Recipe"
2. Fill in the recipe details, including:
   - Name (in Arabic and English)
   - Ingredients
   - Preparation steps
   - Cooking time
   - Difficulty level
   - Category
3. Add images to showcase your recipe
4. Save and publish

### Searching for Recipes
Use the search functionality to find recipes by:
- Name
- Ingredients
- Category
- Preparation time
- Difficulty level

## API Documentation

The backend provides a RESTful API with the following endpoints:

### Authentication
- `POST /api/auth/register/` - Create a new user account
- `POST /api/auth/login/` - Get access tokens
- `POST /api/auth/refresh/` - Refresh access token

### Recipes
- `GET /api/recipes/` - List all recipes
- `POST /api/recipes/` - Create a new recipe
- `GET /api/recipes/{id}/` - Retrieve a specific recipe
- `PUT /api/recipes/{id}/` - Update a recipe
- `DELETE /api/recipes/{id}/` - Delete a recipe

### User Profiles

## Contributing

We welcome contributions to the Algerian Recipe Book project!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's style guidelines and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

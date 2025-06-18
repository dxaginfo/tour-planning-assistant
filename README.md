# Tour Planning Assistant

A comprehensive web application designed to help musicians, bands, and their management teams plan, organize, and execute successful tours.

## Project Overview

The Tour Planning Assistant streamlines the entire tour planning process, from scheduling venues and coordinating travel logistics to managing accommodations and sharing itineraries with team members.

## Features

- **Tour Creation and Management**: Create, manage, and track tours with complete details
- **Venue Management**: Store venue information, technical requirements, and history
- **Date Planning**: Schedule performances and manage load-in, soundcheck, and set times
- **Travel Logistics**: Plan transportation between venues with optimal routing
- **Accommodation Management**: Track hotels, room assignments, and booking details
- **Team Collaboration**: Enable real-time updates and role-based access
- **Itinerary Generation**: Create and share comprehensive tour schedules
- **Budget and Expense Tracking**: Manage tour finances with detailed reporting
- **External Integrations**: Connect with calendars, maps, and weather services
- **Notifications**: Automated reminders and alerts for important events

## Technology Stack

### Frontend
- React.js with Redux
- Material-UI
- Google Maps API integration
- Responsive design for all devices

### Backend
- Node.js with Express
- MongoDB database
- RESTful API architecture
- JWT authentication

### DevOps
- Docker containerization
- AWS hosting (EC2, S3, CloudFront)
- GitHub Actions for CI/CD

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/dxaginfo/tour-planning-assistant.git
cd tour-planning-assistant
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Set up environment variables:
   - Create a `.env` file in the server directory using `.env.example` as a template
   - Add your MongoDB connection string and JWT secret

5. Start the development servers:
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend server (from client directory)
npm start
```

## Project Structure

```
tour-planning-assistant/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # React components and logic
│       ├── components/     # Reusable UI components
│       ├── pages/          # Page components
│       ├── redux/          # State management
│       ├── services/       # API service calls
│       └── utils/          # Utility functions
│
├── server/                 # Backend Node.js/Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Express middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   └── utils/              # Utility functions
│
├── .github/                # GitHub Actions workflows
├── docker/                 # Docker configuration
└── docs/                   # Documentation
```

## API Documentation

API documentation is available at `/api/docs` when running the development server.

## Deployment

Detailed deployment instructions are available in the [deployment guide](./docs/deployment.md).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Maps API for routing functionality
- OpenWeatherMap API for weather data
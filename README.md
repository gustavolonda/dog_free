# DogFree - Dog Breeds Explorer
A React application built with Vite that displays dog breeds information from the [Dog API](https://dogapi.dog/).

## Features- 
View detailed information about different dog breeds- Search functionality to filter breeds- Responsive design with Bootstrap- TypeScript support- Docker and Kubernetes deployment ready
## Technologies Used

- React 18
- Vite
- TypeScript
- Bootstrap 5
- Axios for API calls
- Docker
- Kubernetes
## Project Structure
dog_free/ <br>
├── src/ <br>
│ ├── components/ # React components <br>
│ ├── context/ # Global context <br>
│ ├── hooks/ # Custom hooks <br>
│ ├── models/ # TypeScript interfaces <br>
│ ├── services/ # API services <br>
│ ├── App.tsx # Main application component 
│ └── main.tsx # Application entry point 
├── Dockerfile # Docker configuration 
├── nginx.conf # Nginx server configuration 
├── k8s-deployment.yaml # Kubernetes deployment 
├── k8s-service.yaml # Kubernetes service 
└── README.md # This file

## Getting Started

### Prerequisites

- Node.js v22.19.0
- npm/yarn
- Docker (for containerization)
- Kubernetes cluster (for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:gustavolonda/dog_free.git
   cd dog_free
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
## Docker Deployment
1. Build the Docker image:
   ```bash
   docker build -t dog_free 
   ```
2. Run the Docker container:
   ```bash
   docker run -p 8080:80 dog_free
   ```
## Kubernetes Deployment:
1. First build your Docker image:
  ```bash
docker build -t dogfree-app 
   ```
2. Apply Kubernetes configurations:
```bash
kubectl apply -f k8s-deployment.yaml
kubectl apply -f k8s-service.yaml
   ```
3. Access your application:
  ```bash
kubectl port-forward service/dogfree-service 8080:80
   ```
4. Check the service:
   ```bash
   kubectl get services
   ```   
## License
Distributed under the MIT License.
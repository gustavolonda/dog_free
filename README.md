# DogFree - Dog Breeds Explorer

A React application built with Vite that displays dog breeds information from the [Dog API](https://dogapi.dog/).

## Features

- View detailed information about different dog breeds
- Search functionality to filter breeds
- Responsive design with Bootstrap
- TypeScript support
- Docker and Kubernetes deployment ready

## Technologies Used

- React 18
- Vite
- TypeScript
- Bootstrap 5
- Axios for API calls
- Docker
- Kubernetes

## Project Structure
Trae AI




Used 1 context
Here are the Kubernetes deployment and service configuration files for your DogFree application:

First, create a deployment file:
k8s-deployment.yaml
Apply
apiVersion: apps/v1kind: Deploymentmetadata:  name: dogfree-app  labels:    app: dogfreespec:  replicas: 3  selector:    matchLabels:      app: dogfree  template:    metadata:      labels:        app: dogfree    spec:      containers:      - name: dogfree-app        image: your-dockerhub-username/        dogfree-app:latest        ports:        - containerPort: 80        resources:          requests:            cpu: "100m"            memory: "128Mi"          limits:            cpu: "200m"            memory: "256Mi"      imagePullSecrets:      - name: regcred  # Only needed if using       private registry
Then create a service file:
k8s-service.yaml
Apply
apiVersion: v1kind: Servicemetadata:  name: dogfree-servicespec:  selector:    app: dogfree  ports:    - protocol: TCP      port: 80      targetPort: 80  type: LoadBalancer  # Use NodePort for bare   metal clusters
To apply these configurations:

bash
Run
kubectl apply -f k8s-deployment.yamlkubectl apply -f k8s-service.yaml
Notes:

Replace your-dockerhub-username/dogfree-app:latest with your actual Docker image name
The imagePullSecrets is only needed if you're using a private Docker registry
Adjust resource requests/limits based on your needs
For production, consider adding:
Liveness and readiness probes
Horizontal Pod Autoscaler
ConfigMaps for environment variables
Ingress for routing
Gustavo Londa
Copy
Delete
crear el readme explicar lo que se uso y como se ejecuta en docker y kuberntes
Trae AI
Used 1 context
k8s-service.yaml
2-2
Here's a comprehensive README.md file for your project:

README.md
Apply
# DogFree - Dog Breeds ExplorerA React application built with Vite that displays dog breeds information from the [Dog API](https://dogapi.dog/).## Features- View detailed information about different dog breeds- Search functionality to filter breeds- Responsive design with Bootstrap- TypeScript support- Docker and Kubernetes deployment ready## Technologies Used- React 18- Vite- TypeScript- Bootstrap 5- Axios for API calls- Docker- Kubernetes## Project Structure
dog_free/ ├── src/ │ ├── components/ # React components │ ├── context/ # Global context │ ├── hooks/ # Custom hooks │ ├── models/ # TypeScript interfaces │ ├── services/ # API services │ ├── App.tsx # Main application component │ └── main.tsx # Application entry point ├── Dockerfile # Docker configuration ├── nginx.conf # Nginx server configuration ├── k8s-deployment.yaml # Kubernetes deployment ├── k8s-service.yaml # Kubernetes service └── README.md # This file

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
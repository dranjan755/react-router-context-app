pipeline {
    agent any

    environment {
        IMAGE_NAME = 'react-scm-docker-app'
        CONTAINER_NAME = 'react-scm-container'
    }

    stages {
        stage('Install & Build') {
            steps {
                sh 'npm install'
                sh 'npx vite build'
            }
        }

        stage('Clean Docker') {
            steps {
                sh 'docker stop $CONTAINER_NAME || true'
                sh 'docker rm $CONTAINER_NAME || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:80 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }
}

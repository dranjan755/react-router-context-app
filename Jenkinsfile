pipeline {
    agent any

    environment {
        IMAGE_NAME = 'react-docker-demo'
        CONTAINER_NAME = 'react-container'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/dranjan755/react-router-context-app.git'
                // or use local repo setup if not pushed yet
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Clean Up Old Container') {
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

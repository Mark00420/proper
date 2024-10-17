pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'your-docker-hub-username/bubble-app'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/yourusername/bubble-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_HUB_REPO}:latest")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    def container = docker.run("${DOCKER_HUB_REPO}:latest", '-p 3000:3000')
                }
            }
        }
    }
}

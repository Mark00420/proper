pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'mark00420/bubble-app'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Mark00420/proper.git'
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

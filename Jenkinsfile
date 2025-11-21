pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // Configure this in Jenkins if needed
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/sriramkishnu/birthday', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true, allowEmptyArchive: true
            }
        }
    }
}

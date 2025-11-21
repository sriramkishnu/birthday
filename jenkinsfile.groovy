pipeline {

    agent any
 
    tools {

        jdk 'jdk17'

        maven 'maven3'

    }
 
    stages {
 
        stage('Checkout') {

            steps {

                git url: 'https://github.com/sriramkishnu/birthday.git', branch: 'main'

            }

        }
 
        stage('Build & Test') {

            steps {

                sh 'mvn clean package'

            }

        }
 
        stage('Archive Artifact') {

            steps {

                archiveArtifacts artifacts: 'target/*.jar', fingerprint: true

            }

        }

    }

}
pipeline {
    agent none

    stages {
        stage('Deploy to Development') {
            agent {
                ecs {
                inheritFrom 'jenkins-slave'
                cpu 2048
                memory 4096
                }
            }

            when {
                beforeAgent true
                branch 'develop'
            }

            environment {
                EMAIL_API="https://a3d8nglf5a.execute-api.ap-southeast-2.amazonaws.com/develop/contactus"
                CAPTCHA_KEY="6LeZat8UAAAAANf9l71IAN15RCJLFcoZqKizI7vU"
                GOOGLE_MAP_API_KEY="AIzaSyBdAzYf-6m4AW9DNJvwp_mSbd1KV5PP9wQ"
            }

            steps {
                echo 'Start....'

                sh script: '''
                    #!/usr/bin/env bash

                    apt-get update

                    apt-get install -y build-essential
                ''', label: "Install build essentials"

                sh script: '''
                    #!/usr/bin/env bash

                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

                    . $HOME/.bashrc > /dev/null 2>&1

                    nvm install 12 > /dev/null 2>&1
                    nvm use 12 > /dev/null 2>&1

                    npm config set user 0
                    npm config set unsafe-perm true
                ''', label: "Bootstrap NodeJS runtime"

                withCredentials([[
                    $class: "AmazonWebServicesCredentialsBinding",
                    credentialsId: "blockbit-solutions-dev-aws",
                    accessKeyVariable: "AWS_ACCESS_KEY_ID",
                    secretKeyVariable: "AWS_SECRET_ACCESS_KEY"
                    ]]) {
                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        npx yarn install
                    ''', label: "Installing dependencies ..."

                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        npm run lint
                    ''', label: "Running eslint..."

                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        npm run test
                    ''', label: "Running test..."

                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        npm run deploy
                    ''', label: "Deploying to AWS..."

                   sh script: '''
                        echo "deb http://ftp.de.debian.org/debian testing main" >> /etc/apt/sources.list
                        apt-get update -y
                        apt-get install -y python3.7 python3.7-distutils

                        alias python3=python3.7

                        curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

                        python3 get-pip.py

                        pip install awscli --upgrade
                    ''', label: "Install aws-cli"

                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        aws s3 cp s3://6pc4tyt-oxwoa4k/public/cached s3://6pc4tyt-oxwoa4k/public/cached --recursive --metadata-directive REPLACE --cache-control max-age=365000000,immutable --region us-east-1
                    ''', label: "Adding cache-control header..."
                }

                echo 'Congratulations! Your website is ready on https://d3i3a8vb8ype2j.cloudfront.net!'
            }
        }

        stage('Deploy to Production') {
            agent {
                ecs {
                inheritFrom 'jenkins-slave'
                cpu 2048
                memory 4096
                }
            }

            when {
                beforeAgent true
                branch 'master'
            }

            input {
                message "Would you like to continue deploying to production?"
            }

            environment {
                EMAIL_API="https://a3d8nglf5a.execute-api.ap-southeast-2.amazonaws.com/develop/contactus"
                CAPTCHA_KEY="6LdWat8UAAAAAOH4rRy0iKXGdcrGzwKo2g79m9kb"
                GOOGLE_MAP_API_KEY="AIzaSyBdAzYf-6m4AW9DNJvwp_mSbd1KV5PP9wQ"
            }

            steps {
                echo 'Start....'

                sh script: '''
                    #!/usr/bin/env bash

                    apt-get update

                    apt-get install -y build-essential
                ''', label: "Install build essentials"

                sh script: '''
                    #!/usr/bin/env bash

                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

                    . $HOME/.bashrc > /dev/null 2>&1

                    nvm install 12 > /dev/null 2>&1
                    nvm use 12 > /dev/null 2>&1

                    npm config set user 0
                    npm config set unsafe-perm true
                ''', label: "Bootstrap NodeJS runtime"

                withCredentials([[
                    $class: "AmazonWebServicesCredentialsBinding",
                    credentialsId: "blockbit-solutions-nextjs-production",
                    accessKeyVariable: "AWS_ACCESS_KEY_ID",
                    secretKeyVariable: "AWS_SECRET_ACCESS_KEY"
                    ]]) {
                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        npx yarn install
                    ''', label: "Installing dependencies ..."

                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        npm run lint
                    ''', label: "Running eslint..."

                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        npm run test
                    ''', label: "Running test..."

                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        npm run deploy
                    ''', label: "Deploying to AWS..."

                    sh script: '''
                        echo "deb http://ftp.de.debian.org/debian testing main" >> /etc/apt/sources.list
                        apt-get update -y
                        apt-get install -y python3.7 python3.7-distutils

                        alias python3=python3.7

                        curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

                        python3 get-pip.py

                        pip install awscli --upgrade
                    ''', label: "Install aws-cli"

                    sh script: '''
                        #!/usr/bin/env bash

                        . $HOME/.bashrc > /dev/null 2>&1

                        aws s3 cp s3://ipm7ntk-2qdxi1/public/cached s3://ipm7ntk-2qdxi1/public/cached --recursive --metadata-directive REPLACE --cache-control max-age=365000000,immutable --region us-east-1
                    ''', label: "Adding cache-control header..."
                }

                echo 'Congratulations! Your website is ready on https://d5wemzsga0ddk.cloudfront.net!'
            }
        }
    }
}

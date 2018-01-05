yarn build
awscreds alexleone
s3cmd sync build/ s3://leone-tech-client
aws cloudfront create-invalidation --distribution-id E284I975XFZXU3 --paths '/*'

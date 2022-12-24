### Soundwav Backend API
A serverless API using TypeScript, AWS CDK, Lambda, API Gateway and DynamoDB.

#### Useful links:
- [AWS CloudFormation console](https://console.aws.amazon.com/cloudformation/home)
- [AWS Lambda Console](https://console.aws.amazon.com/lambda/home#/functions)
- [AWS ApiGateway Console](https://console.aws.amazon.com/apigateway/home)

#### Instructions:

```shell
# Synthesize a template from your app
cdk synth

# Bootstrapping an environment
cdk bootstrap

# Compare deployed stack with current state
cdk diff

# Deployment to your AWS account/region
cdk deploy --all

# Local development
cdk synth && sam local start-api -t ./cdk.out/Serculate.template.json

# Destroy all services and stacks
cdk destroy --all
```

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


```bash
# Run SSO
aws configure sso
# Set AWS environment variables
# Add a profile to your AWS credentials file
vi ~/.aws/credentials
cat ~/.aws/credentials
```

```bash
cdk bootstrap --context environment=Development aws://${MY_ACCOUNT_ID}/${MY_REGION}
```

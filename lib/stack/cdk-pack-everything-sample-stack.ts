import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { VpcConstruct } from "../construct/vpc";

interface CdkPackEverythingSampleStackProps extends cdk.StackProps {
  envName: string;
}

export class CdkPackEverythingSampleStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: CdkPackEverythingSampleStackProps,
  ) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkPackEverythingSampleQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new VpcConstruct(this, "VpcConstruct", {
      vpcName: "test",
      cidr: "192.168.224.0/19",
    });
  }
}

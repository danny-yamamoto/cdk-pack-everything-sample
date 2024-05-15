import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
//import { aws_s3 as s3 } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { VpcConstruct } from '../construct/vpc';

interface CdkPackEverythingSampleStackProps extends cdk.StackProps {
  envName: string;
}

export class CdkPackEverythingSampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: CdkPackEverythingSampleStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkPackEverythingSampleQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    /*
    const vpc = new ec2.Vpc(this, 'SampleVpc', {
      ipAddresses: ec2.IpAddresses.cidr('192.168.0.0/19'),
      vpcName: 'cdk-sample-vpc'
    });
    */
    new VpcConstruct(this, "VpcConstruct", {
      vpcName: "test",
      cidr: "192.168.224.0/19"
    });
  }
}
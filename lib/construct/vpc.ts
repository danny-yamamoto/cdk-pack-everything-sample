import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";

export interface VpcConstructProps extends cdk.StackProps {
  vpcName: string;
  cidr: string;
}

export class VpcConstruct extends Construct {
  constructor(scope: Construct, id: string, props: VpcConstructProps) {
    super(scope, id);
    const vpc = new ec2.Vpc(this, props.vpcName, {
      ipAddresses: ec2.IpAddresses.cidr(props.cidr),
      vpcName: props.vpcName,
    });
  }
}

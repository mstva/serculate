#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";

export class SerculateStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
    }

}

const app = new cdk.App();
new SerculateStack(app, 'SerculateStack');
app.synth()

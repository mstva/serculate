#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";

export class SoundwavApiStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
    }

}

const app = new cdk.App();
new SoundwavApiStack(app, 'SoundwavApiStack');
app.synth()

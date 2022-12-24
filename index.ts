#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {Stack, StackProps, aws_apigateway} from "aws-cdk-lib";
import {Construct} from "constructs";
import {ProjectStack} from "./stacks/project_stack";
import {app_name} from "./utils/constants";
import {project_routes} from "./routes/project_routes";

export class SerculateStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const api = new aws_apigateway.RestApi(this, `${app_name}_routes`);

        const project_stack = new ProjectStack(this)
        project_routes(api, project_stack)

    }

}

const app = new cdk.App();
new SerculateStack(app, 'SerculateStack');
app.synth()

import {aws_lambda, aws_apigateway} from "aws-cdk-lib";
import {Construct} from "constructs";
import {app_name} from "./constants";
import {NodejsFunction, NodejsFunctionProps} from "aws-cdk-lib/aws-lambda-nodejs";

export const create_lambda_function = (scope: Construct, handler: string) => {

    const _file_name = handler.split(".")[0]
    const _func_name = handler.split(".")[1]

    const _functions_path = "functions"
    const _function_name = `${app_name}_${_func_name}_function`

    const _function_props: NodejsFunctionProps = {
        runtime: aws_lambda.Runtime.NODEJS_16_X,
        functionName: _function_name,
        entry: `${_functions_path}/${_file_name}.ts`,
        handler: _func_name,
    }

    const _function = new NodejsFunction(scope, _function_name, _function_props)

    return new aws_apigateway.LambdaIntegration(_function);

}

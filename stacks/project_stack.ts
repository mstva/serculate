import {Construct} from "constructs";
import {aws_apigateway} from "aws-cdk-lib";
import {create_lambda_function} from "../utils/helpers";
import {
    project_list,
    project_update,
    project_get,
    project_create,
    project_delete
} from "../functions/project_functions";


export class ProjectStack {

    public readonly project_list_function: aws_apigateway.LambdaIntegration
    public readonly project_create_function: aws_apigateway.LambdaIntegration
    public readonly project_get_function: aws_apigateway.LambdaIntegration
    public readonly project_update_function: aws_apigateway.LambdaIntegration
    public readonly project_delete_function: aws_apigateway.LambdaIntegration

    constructor(scope: Construct) {

        const _project_functions = "project_functions"
        const _project_list_handler = `${_project_functions}.${project_list.name}`
        const _project_create_handler = `${_project_functions}.${project_create.name}`
        const _project_get_handler = `${_project_functions}.${project_get.name}`
        const _project_update_handler = `${_project_functions}.${project_update.name}`
        const _project_delete_handler = `${_project_functions}.${project_delete.name}`

        this.project_list_function = create_lambda_function(scope, _project_list_handler)
        this.project_create_function = create_lambda_function(scope, _project_create_handler)
        this.project_get_function = create_lambda_function(scope, _project_get_handler)
        this.project_update_function = create_lambda_function(scope, _project_update_handler)
        this.project_delete_function = create_lambda_function(scope, _project_delete_handler)

    }

}

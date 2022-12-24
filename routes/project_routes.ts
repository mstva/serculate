import {aws_apigateway} from "aws-cdk-lib";
import {ProjectStack} from "../stacks/project_stack";
import {HTTP_METHOD} from "../utils/constants";

export const project_routes = (api: aws_apigateway.RestApi, project_stack: ProjectStack) => {

    const projects = api.root.addResource('projects');
    const project = projects.addResource('{project_id}');

    // api/projects
    projects.addMethod(HTTP_METHOD.GET, project_stack.project_list_function);
    projects.addMethod(HTTP_METHOD.POST, project_stack.project_create_function);
    // api/projects/{project_id}
    project.addMethod(HTTP_METHOD.GET, project_stack.project_get_function);
    project.addMethod(HTTP_METHOD.DELETE, project_stack.project_delete_function);
    project.addMethod(HTTP_METHOD.PUT, project_stack.project_update_function);
    project.addMethod(HTTP_METHOD.PATCH, project_stack.project_update_function);

}

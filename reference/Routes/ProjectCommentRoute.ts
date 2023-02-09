import { ApiDefaultRoute } from './ApiDefaultRoute'

export class ProjectCommentsRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ProjectComments')
  }

  GetProjectCommentById(projectCommentId?: number): string {
    projectCommentId = (projectCommentId === undefined) ? 0 : projectCommentId
    return `${this.uri}/${projectCommentId}?&MappingType=0`
  }
}

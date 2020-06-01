import { IWorkspaceModel } from '../database/mainDB';

export interface IWorkspacesState {
  isFetchingOne: boolean,
  isFetchingList: boolean,
  isCreating: boolean,
  workspaces: IWorkspaceModel[],
  workspace: null | IWorkspaceModel,
}

export enum IWorkspaceActionTypes {
  CREATE_WORKSPACE_START = 'CREATE_WORKSPACE_START',
  CREATE_WORKSPACE_SUCCESS = 'CREATE_WORKSPACE_SUCCESS',
  GET_WORKSPACES_START = 'GET_WORKSPACES_START',
  GET_WORKSPACES_SUCCESS = 'GET_WORKSPACES_SUCCESS',
  GET_WORKSPACE_START = 'GET_WORKSPACE_START',
  GET_WORKSPACE_SUCCESS = 'GET_WORKSPACE_SUCCESS',
}

export interface CreateWorkspaceStart {
  type: IWorkspaceActionTypes.CREATE_WORKSPACE_START;
}

export interface CreateWorkspaceSuccess {
  type: IWorkspaceActionTypes.CREATE_WORKSPACE_SUCCESS;
  workspace: IWorkspaceModel;
}

export interface GetWorkspacesStart {
  type: IWorkspaceActionTypes.GET_WORKSPACES_START
}

export interface GetWorkspacesSuccess {
  type: IWorkspaceActionTypes.GET_WORKSPACES_SUCCESS;
  workspaces: IWorkspaceModel[];
}

export interface GetWorkspaceStart {
  type: IWorkspaceActionTypes.GET_WORKSPACE_START
}

export interface GetWorkspaceSuccess {
  type: IWorkspaceActionTypes.GET_WORKSPACE_SUCCESS;
  workspace: IWorkspaceModel;
}

export type IWorkspacesAction =
  | CreateWorkspaceStart
  | CreateWorkspaceSuccess
  | GetWorkspacesStart
  | GetWorkspacesSuccess
  | GetWorkspaceStart
  | GetWorkspaceSuccess;

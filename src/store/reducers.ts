import { combineReducers } from 'redux';
import workspaces, { initialState as workspacesState } from '../reducers/workspaces';
import collections, { initialState as collectionsState } from '../reducers/collections';

export const initialState = {
  workspaces: workspacesState,
  collections: collectionsState,
};

export default combineReducers({
  workspaces,
  collections
});
import { USER_CHANGED } from "./Types";
import { IUser } from "../interfaces";


interface IState{
  user?: IUser
}

const INITIAL_STATE: IState = {
  user: undefined,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case USER_CHANGED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
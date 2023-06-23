import { BehaviorSubject } from "rxjs";
import { IUserState } from "./types";

export const rawUser$ = new BehaviorSubject<IUserState>({} as IUserState);

fetch("https://athena-api-staff.herokuapp.com/api/v1/users/sign_in")
  .then((response) => response.json())
  .then((data) => {
    rawUser$.next(data.user);
  });

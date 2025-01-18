import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn =localStorage.getItem("sign") 
 
 if (isLoggedIn!="true") { 
 return false; 
 } 
 return true;

};

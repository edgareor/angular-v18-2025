import { CanActivateFn, Router } from '@angular/router';

export const protectGuard: CanActivateFn = (route, state) => {

  let token = sessionStorage.getItem('token');
  if(token){
    return true;
  } else {
    window.location.href = `/angular-v18-2025/login`;
    return false;
  }
};

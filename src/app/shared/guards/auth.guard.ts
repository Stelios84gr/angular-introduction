import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.user$() && !userService.isTokenExpired) {  // αν η signal έχει data και δεν έχει γίνει expire το acess token
    return true;
  }

  return router.navigate(['login']);  // αν δεν έχει, να στείλει τον χρήστη στη σελίδα login
};

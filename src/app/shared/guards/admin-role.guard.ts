import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { has } from 'lodash-es';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  
  const userRoles = userService.user$()?.roles;
  const hasPermission = userRoles?.includes("ADMIN");
  console.log("ADMIN ROLE GUARD, ", userRoles, hasPermission);

  if (userService.user$() && hasPermission) { // αν το signal έχει λάβει τιμές και το roles περιέχει "ADMIN"
    return true;
  }

  return router.navigate(['resticted-content']);  // αν όχι, στέλνει τον χρήστη στη σελίδα restricted content
};

import { profileHandlers } from './handlers/profile.handlers';
import { addressesHandlers } from './handlers/addresses.handlers';
import { organizationsHandlers } from './handlers/organizations.handlers';
import { formsHandlers } from './handlers/forms.handlers';
import { loginHandlers } from './handlers/login.handlers';

export const handlers = [
  ...profileHandlers,
  ...addressesHandlers,
  ...organizationsHandlers,
  ...formsHandlers,
  ...loginHandlers,
];

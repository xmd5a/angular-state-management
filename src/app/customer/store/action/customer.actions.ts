import { createAction } from '@ngrx/store';
import { Customer } from '../../../models/customer';

export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({ customer })
);

export const removeCustomer = createAction(
  '[Customer] Rmove Customer',
  (id: number) => ({ id })
);

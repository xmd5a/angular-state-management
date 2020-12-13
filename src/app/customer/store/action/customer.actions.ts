import { createAction } from '@ngrx/store';
import { Customer } from '../../../models/customer';

export const addCustomer = createAction(
  '[Customer] Add Customers',
  (customer: Customer) => ({ customer })
);

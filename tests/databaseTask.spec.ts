import { test, expect } from '@playwright/test';
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  randomEmail,
  randomName
} from '../utils/database';

test('PostgreSQL CRUD operations', async () => {
    const name =  await randomName();
    const email =  await randomEmail();
    const updatedName = await `${name} updated`


  await createUser(name, email);

  const user = await getUser(email);
  expect(user.name).toBe(name);

  await updateUser(email, updatedName);
  const updated = await getUser(email);
  expect(updated.name).toBe(updatedName);

  await deleteUser(email);
  const deleted = await getUser(email);
  expect(deleted).toBeUndefined();
});

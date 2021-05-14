// *********
// Задание 2
// *********

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState1 = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    resolve(allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user));
    }
  );
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState1(users, 'Mango', logger);
// toggleUserState1(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
use('cinema-online');

db.createUser({
  user: 'app_user',
  pwd: 'app_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'cinema-online',
    },
  ],
});

db.createCollection('User');
db.createCollection('Genre');
db.createCollection('Actor');
db.createCollection('Movie');

db.User.insertOne({
  username: 'test_user',
  email: 'test_user@example.com',
});

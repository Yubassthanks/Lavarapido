
// auth.js (authentication route file)
const bcrypt = require('bcrypt');

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if(!user) {
      return next({ status: 401 })
    }
    else {
      bcrypt.compare(req.body.password, user.password, (error, result) => {
        if(result) {
          res.send(user)
        }
        else {
          console.log(error)
          return next({ status: 401 })
        }
      })
    }
  })
  .catch(error => next(error));
  
})
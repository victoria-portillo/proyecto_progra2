var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let posteosRouter = require('./routes/posteos')
var app = express();

const session = require('express-session')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "Nuestro mensaje secreto",
  resave: false,
  saveUninitialized: true
}));

app.use(function (req, res, next) {
  if (req.session.user) {
    res.locals.user = req.session.user
  }
  return next();
})

app.use(function (req, res, next) {
  if (req.cookies.idUsuario != undefined && req.session.user == undefined) {
    let userId = req.cookies.idUsuario;
    Usuario.findByPk(userId)
      .then(function (user) {
        req.session.user = user.dataValues
        res.locals.user = user.dataValues
        return next();
      })
      .catch(error => console.log(error))
  } else {
    return next();
  }
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posteos', posteosRouter)


app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

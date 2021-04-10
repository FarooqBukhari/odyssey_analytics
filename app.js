var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var adminRouter = require('./admin');
var db = require("./src/db");

var app = express();

db.sequelize.sync();

//view engine setup
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
hbs.registerHelper("add", function(val1, val2) {
  return val1 + val2;
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', indexRouter);


//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

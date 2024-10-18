const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set up Handlebars
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./controllers/index');
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
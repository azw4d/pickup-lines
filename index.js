// Requirements.
const express = require('express');
const { randomLine, lineByType } = require('./handler');
const app = express();

// So that it can be used from website JS too.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Get a random line.
app.get('/', (req, res) => {
  res.json(randomLine());
});

// Get a random line, sorted by type.
app.get('/:type', (req, res) => {
  res.json(lineByType(req.params.type, 1));
});

// If there's an error, say it.
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

// Listen on the default HTTP port.
app.listen(80, () => console.log(`Listening on 80.`));

// Uncaught exception errors stop the process, this prevents that.
process.on("uncaughtException", function (err) {
  console.log("NOT STOPPING: " + err);
});

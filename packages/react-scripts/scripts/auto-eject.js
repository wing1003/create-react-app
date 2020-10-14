'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

function autoEject() {
  // ...
}

module.exports = autoEject;

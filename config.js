const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~wZZWGQ4b#92P6zbcLfj1EYXKqYTKd4sXZep27sbA7xQnaYsRIW5I'
};

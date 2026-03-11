const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.get("*", (req, res) => {
    res.send({msg: 'Startup service is functional'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
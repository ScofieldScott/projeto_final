const app = require('./index');

const port = 8000;
app.listen(port, () => {
    console.log('Listenig to request on port 8000');
});
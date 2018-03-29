import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

app.listen(port, () => {
  console.log('Express is listening on port', port);
});

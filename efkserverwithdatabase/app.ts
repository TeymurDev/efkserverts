const express = require('express');
const categoryRouter = require('./routes/routes')

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api', categoryRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));


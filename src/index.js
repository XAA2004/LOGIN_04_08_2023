import app from './app.js';
import { conectDB } from './db.js';

conectDB();
app.listen(5000, () => console.log(`Server on PORT 5000`));


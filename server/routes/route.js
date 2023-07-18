import express from 'express';

import { saveSendEmails } from '../controllers/email-controller.js';
import { getEmails } from '../controllers/email-controller.js';
import { toggleStarredEmail } from '../controllers/email-controller.js';
import { deleteEmails } from '../controllers/email-controller.js';
import { moveEmailsToBin } from '../controllers/email-controller.js';


const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.post('/save-draft', saveSendEmails);
routes.get('/emails/:type', getEmails);
routes.post('/starred', toggleStarredEmail);
routes.delete('/delete', deleteEmails);
routes.post('/bin', moveEmailsToBin);

export default routes;
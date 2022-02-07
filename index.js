import { Presentation } from './presentation';
import {Service} from './service';

const service = new Service();
const menu = new Presentation(service);
menu.demarrer();
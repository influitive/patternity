import { create } from 'jss';
import reactJss from 'react-jss';
import nested from 'jss-nested';

const jss = create();
jss.use(nested());

export default reactJss(jss);

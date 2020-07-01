import tedious, { Connection } from 'tedious';
import keys from './keys';


const poolSQL = new Connection(keys.databaseSQL);
poolSQL.on('connect', (err: any) => {
    if (err) {
        console.log("sqlError", err);

    } else {
        console.log('ya funciona wey');
    }


});

export default poolSQL;



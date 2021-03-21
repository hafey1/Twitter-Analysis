import { executeQueryArray } from '../utils/queryFunctions';

const migration__23_2_21__54_27_10 = `
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR DEFAULT '',
    message VARCHAR NOT NULL
)`;

const migration__21_3_21__30_22_16 = `
INSERT INTO messages(name, message)
SELECT ('joe', 'my name is joe'), ('notjoe', 'my name is notjoe')
WHERE NOT EXISTS (SELECT * FROM messages);
`

executeQueryArray([migration__23_2_21__54_27_10]);
executeQueryArray([migration__21_3_21__30_22_16]);

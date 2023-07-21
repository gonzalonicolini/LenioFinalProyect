//levantamos la api
const API_URL = 'https://gateway.marvel.com/v1/public';
const TS = 1;
const HASH = 'e5b632fd93e55218586b2087d8547036';
const API_KEY = 'f0e53e300e9262583101c217e4c657b2';

const AUTH_QUERIES = `apikey=${API_KEY}&ts=${TS}&hash=${HASH}`;

const TOTAL_CHARACTERS = 1562;

export { TS, HASH, API_URL, API_KEY, TOTAL_CHARACTERS, AUTH_QUERIES };
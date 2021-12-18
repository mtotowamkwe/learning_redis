import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';
import Lists from './lists';
import Sets from './sets';
import Sortedsets from './sortedsets';

const redis = new Redis({password: 'man3294ehd'});

Strings(redis);

Hashes(redis);

Lists(redis);

Sets(redis);

Sortedsets(redis);
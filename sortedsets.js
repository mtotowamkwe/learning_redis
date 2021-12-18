const Sortedsets = (redis) => {
  redis.zadd('rocket', 1969, 'apollo 11', 1998, 'Deep space 1', 2008, 'Falcon 1', 1966, 'Luna 9');

  redis.zrangebyscore('rocket', '-inf', 2000, 'withscores', (err, result) => {
    console.log(result);
  });
}

export default Sortedsets;
const Sets = (redis) => {
  redis.sadd('cart', 'apples', 'cherries', 'pears', 'red meat', 'meat');

  redis.sadd('cart', 'cereals raisin brand');

  redis.smembers('cart', (err, result) => {
    console.log(result);
  });

  redis.sadd('cart:"red meat"', 'pork chops', 'rib eye');

  redis.smembers('cart:"red meat"', (err, result) => {
    console.log(result);
  });

  redis.sunionstore('cart:"meat"', 'cart:"red meat"');

  redis.smembers('cart:"meat"', (err, result) => {
    console.log(result);
  });
}

export default Sets;
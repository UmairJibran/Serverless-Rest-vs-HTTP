import fetch from 'node-fetch';

(async () => {
  for (let i = 0; i < 50; i++) {
    console.time('REST');
    await fetch(
      'https://q8aq37f51i.execute-api.us-east-1.amazonaws.com/dev/rest',
      {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.timeEnd('REST');
    console.time('HTTP');
    await fetch('https://70xb4bxt6h.execute-api.us-east-1.amazonaws.com/http', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    });
    console.timeEnd('HTTP');
  }
})();

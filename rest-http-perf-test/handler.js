'use strict';

module.exports.rest = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'IT IS REST!',
    }),
  };
};

module.exports.http = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'IT IS HTTP!',
    }),
  };
};

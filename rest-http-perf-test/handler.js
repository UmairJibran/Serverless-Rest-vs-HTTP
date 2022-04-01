'use strict';

module.exports.rest = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'IT IS REST!',
    }),
  };
};

module.exports.http = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'IT IS HTTP!',
    }),
  };
};

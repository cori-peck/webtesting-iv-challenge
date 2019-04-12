const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(code) {
  const [ id ] = await db('discountCodes').insert(code)

    return db('discountCodes')
      .where({ id })
      .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('discountCodes');
}

function findById(id) {
  return null;
}
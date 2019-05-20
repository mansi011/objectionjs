const { Model } = require('objection');

class MinimalModel extends Model {
  static get tableName() {
    return 'someTableName';
  }
}

module.exports = MinimalModel;

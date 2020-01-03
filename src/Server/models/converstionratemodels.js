'use strict';
module.exports = (sequelize, DataTypes) => {
  const converstionRateModels = sequelize.define('converstionRateModels', {
    sourceQty: DataTypes.STRING,
    targetQty: DataTypes.STRING,
    converstionRate: DataTypes.FLOAT
  }, {});
  converstionRateModels.associate = function(models) {
    // associations can be defined here
  };
  return converstionRateModels;
};
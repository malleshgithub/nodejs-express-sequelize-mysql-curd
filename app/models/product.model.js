module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      productname: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Product;
  };
  
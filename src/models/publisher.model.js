module.exports = (sequelize, Sequelize) => {
    const Publisher = sequelize.define("publisher", {
      name: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      phone:{
          type: Sequelize.STRING
      },
       website:
       {
         type: Sequelize.STRING
      }
    
    });  
    return Publisher;
  };


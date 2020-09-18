module.exports = {
    HOST: "127.0.0.1:5432",
    
    USER: "postgres",
    PASSWORD: "Summer69",
    DB: "bookstores",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  
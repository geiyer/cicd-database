CREATE TABLE Customers
(
    CustomerID  SMALLINT,
    LastName VARCHAR(10) NOT NULL,
    FirstName VARCHAR(10) NOT NULL,
    Address VARCHAR(20),
    City VARCHAR(12),
    State VARCHAR(2),
    Zip VARCHAR(5),
    Referred SMALLINT,
    Region CHAR(2)
);

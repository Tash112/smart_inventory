CREATE TABLE Users (
    id VARCHAR (255)NOT NULL,
    name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) UNIQUE NOT NULL,
    password NVARCHAR(255) NOT NULL,
    phone NVARCHAR(20) NULL,
    role NVARCHAR(50)  DEFAULT'user',
    status NVARCHAR(20) DEFAULT '0',
    address NVARCHAR(255) NULL,
    profilePicture NVARCHAR(255) NULL,
    lastLogin DATETIME NULL,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE(),
    isdeletedAT DATETIME DEFAULT GETDATE()
);

select * from users
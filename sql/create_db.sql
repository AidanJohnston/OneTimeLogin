CREATE TABLE users (
    uid int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    email varchar(255),
    token varchar(255) NOT NULL,
    PRIMARY KEY (uid)
)

CREATE TABLE sessions (
    uid varchar(23) NOT NULL,
    code varchar(6) NOT NULL,
    token varchar(255) NOT NULL,
    PRIMARY KEY(uid)
)
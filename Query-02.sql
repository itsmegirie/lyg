CREATE TABLE lygDestination(
    DestinationCode CHAR(2) NOT NULL PRIMARY KEY,
    DestinationName VARCHAR(50) DEFAULT NULL
);

CREATE TABLE lygStyleSize(
    StyleCode       VARCHAR(50) NOT NULL,
    SizeSort        INT NOT NULL,
    SizeName        VARCHAR(10) NOT NULL
);

CREATE TABLE lygSewingOutput(
    TrnDate         DATE NOT NULL,
    OperatorName    VARCHAR(50) NOT NULL,
    StyleCode       VARCHAR(50) NOT NULL,
    SizeName        VARCHAR(10) NOT NULL,
    DestinationCode CHAR(2) NOT NULL,
    QtyOutput       INT DEFAULT NULL,

    FOREIGN KEY (DestinationCode) REFERENCES lygDestination(DestinationCode)
);
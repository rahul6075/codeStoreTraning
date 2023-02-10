-- User Table Schema
CREATE TABLE `authdb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) NOT NULL,
  `role` ENUM('user', 'admin', 'super-user') NULL DEFAULT user,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  PRIMARY KEY (`id`));

  -- userToken Table

  CREATE TABLE `authdb`.`usertoken` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL,
  `token` VARCHAR(500) NULL,
  `createdAt` TIMESTAMP(2) NULL,
  PRIMARY KEY (`id`),
  INDEX `userId_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `userId`
    FOREIGN KEY (`userId`)
    REFERENCES `authdb`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

    
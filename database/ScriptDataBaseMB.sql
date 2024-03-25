

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DBMB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DBMB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DBMB` DEFAULT CHARACTER SET utf8 ;
USE `DBMB` ;

-- -----------------------------------------------------
-- Table `DBMB`.`Generos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`Generos` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`Generos` (
  `id_genero` INT NOT NULL AUTO_INCREMENT,
  `genero` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_genero`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBMB`.`Tipos_clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`Tipos_clientes` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`Tipos_clientes` (
  `id_tipo` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_tipo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBMB`.`Estados_clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`Estados_clientes` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`Estados_clientes` (
  `id_estado` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_estado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBMB`.`Clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`Clientes` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`Clientes` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) ,
  `documento_identidad` VARCHAR(45),
  `contacto` VARCHAR(45),
  `email` VARCHAR(45),
  `fecha_nacimiento` DATE ,
  `genero` INT ,
  `relacion` INT,
  `tipo` INT,
  `estado` INT,
  PRIMARY KEY (`id_cliente`),
  INDEX `fk_Clientes_Generos1_idx` (`genero` ASC) VISIBLE,
  INDEX `familiar_idx` (`relacion` ASC) VISIBLE,
  INDEX `fk_Clientes_Tipos_clientes1_idx` (`tipo` ASC) VISIBLE,
  INDEX `fk_Clientes_Estados_clientes1_idx` (`estado` ASC) VISIBLE,
  CONSTRAINT `fk_Clientes_Generos1`
    FOREIGN KEY (`genero`)
    REFERENCES `DBMB`.`Generos` (`id_genero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `familiar`
    FOREIGN KEY (`relacion`)
    REFERENCES `DBMB`.`Clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Clientes_Tipos_clientes1`
    FOREIGN KEY (`tipo`)
    REFERENCES `DBMB`.`Tipos_clientes` (`id_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Clientes_Estados_clientes1`
    FOREIGN KEY (`estado`)
    REFERENCES `DBMB`.`Estados_clientes` (`id_estado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBMB`.`Propuestas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`Propuestas` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`Propuestas` (
    `id_propuesta` INT NOT NULL AUTO_INCREMENT, `fecha_creacion` DATE , `estado` VARCHAR(50) , `comentarios` TEXT , `id_detalle` INT  , PRIMARY KEY (`id_propuesta`), INDEX `fk_Propuestas_detalle_propuesta1_idx` (`id_detalle` ASC) VISIBLE, CONSTRAINT `fk_Propuestas_detalle_propuesta1` FOREIGN KEY (`id_detalle`) REFERENCES `DBMB`.`detalle_propuesta` (`id_detalles`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBMB`.`detalle_propuesta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`detalle_propuesta` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`detalle_propuesta` (
    `id_detalles` INT NOT NULL AUTO_INCREMENT, `destino` VARCHAR(100) NOT NULL, `trasporte` VARCHAR(50) , `inicio` DATE , `fin` DATE , `precio_adulto` DECIMAL NULL, `precio_niños` DECIMAL NULL, `precio_ancianos` DECIMAL NULL, `inc_desayuno` TINYINT NULL, `inc_almuerzo` TINYINT NULL, `inc_cena` TINYINT NULL, `inc_babida` TINYINT NULL, `inc_alcohol` TINYINT NULL, PRIMARY KEY (`id_detalles`)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBMB`.`Inteacciones_redes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`Inteacciones_redes` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`Inteacciones_redes` (
  `id_inteaccion` INT NOT NULL AUTO_INCREMENT,
  `red_social` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_inteaccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBMB`.`Publicaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`Publicaciones` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`Publicaciones` (
  `id_publicacion` INT NOT NULL AUTO_INCREMENT,
  `id_propuesta` INT NOT NULL,
  `Inid_inteaccion` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `metrica` INT NOT NULL,
  PRIMARY KEY (`id_publicacion`),
  INDEX `fk_Publicaciones_Propuestas1_idx` (`id_propuesta` ASC) VISIBLE,
  INDEX `fk_Publicaciones_Inteacciones_redes1_idx` (`Inid_inteaccion` ASC) VISIBLE,
  CONSTRAINT `fk_Publicaciones_Propuestas1`
    FOREIGN KEY (`id_propuesta`)
    REFERENCES `DBMB`.`Propuestas` (`id_propuesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Publicaciones_Inteacciones_redes1`
    FOREIGN KEY (`Inid_inteaccion`)
    REFERENCES `DBMB`.`Inteacciones_redes` (`id_inteaccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBMB`.`Promocion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBMB`.`Promocion` ;

CREATE TABLE IF NOT EXISTS `DBMB`.`Promocion` (
  `id_promocion` INT NOT NULL AUTO_INCREMENT,
  `id_publicacion` INT NOT NULL,
  `Clientes_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_promocion`),
  INDEX `fk_Preventas_Publicaciones1_idx` (`id_publicacion` ASC) VISIBLE,
  INDEX `fk_Preventas_Clientes1_idx` (`Clientes_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_Preventas_Publicaciones1`
    FOREIGN KEY (`id_publicacion`)
    REFERENCES `DBMB`.`Publicaciones` (`id_publicacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Preventas_Clientes1`
    FOREIGN KEY (`Clientes_id_cliente`)
    REFERENCES `DBMB`.`Clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO generos (genero) VALUES ('Femenino'), ('Masculino');

INSERT INTO tipos_clientes (tipo) VALUES ('C.I'), ('RIF');

INSERT INTO
    inteacciones_redes (red_social)
VALUES ('facebook'),
    ('instagram'),
    ('tiktok'),
    ('X');

INSERT INTO
    estados_clientes (estado)
VALUES ('Completo'),
    ('Pendiente');

use dbmb

ALTER TABLE clientes MODIFY COLUMN direccion  DROP NOT NULL;


INSERT INTO 
clientes (
    nombre, apellido, direccion, documento_identidad, contacto, email, fecha_nacimiento,genero, tipo, estado, relacion
)
VALUES 
(
    'Luis', 'González', 'Calle 123', '123456789', '123-456-7890', 'luis@email.com', '1990-05-15', 2, 1, 2, null
),
(
    'María', 'Martínez', 'Avenida 456', '987654321', '987-654-3210', 'maria@email.com', '1985-10-20', 1, 1, 1, NULL
),
(
    'Carlos', 'Ramírez', 'Carrera 789', '456789123', '456-789-1230', 'carlos@email.com', '1978-03-25', 2, 2, 2, null
),
(
    'Ana', 'López', 'Pasaje 567', '789123456', '789-123-4560', 'ana@email.com', '1995-12-10', 1, 2, 2, NULL
),
(
    'wilita', 'mala paga', 'Antimano', '200901231', '04161239213123', 'wilita_tovar@gmail.com', '1995-03-01', 2, 1, 1, 4
);



INSERT INTO propuestas (fecha_creacion, estado, comentarios)
VALUES 
('2024-02-01','revision',NULL),
('2024-03-01','aprovado',NULL),
('2024-03-10','revicion',NULL),
('2024-01-10','revicion',NULL),
('2023-12-29','revicion',NULL),
('2023-01-20','revicion',NULL),
('2023-03-05','revicion',NULL),
('2023-02-25','revicion',NULL),
('2023-01-28','revicion',NULL),
('2023-03-07','revicion',NULL);


INSERT INTO 
detalle_propuesta (destino,trasporte,inicio,fin, precio_adulto, precio_niños, precio_ancianos, inc_desayuno, inc_almuerzo, inc_cena,inc_babida,inc_alcohol)
VALUES 
('montana','metro','2024-02-10','2024-02-10',2.0,1.0,0.5,TRUE,TRUE,FALSE,TRUE,FALSE),
('vayes','autobus','2024-03-10','2024-03-11',2.0,1.0,0.5,TRUE,TRUE,TRUE,TRUE,FALSE),
('desierto','en burro','2024-02-01','2024-02-01',2.0,1.0,0.5,TRUE,TRUE,TRUE,TRUE,FALSE),
('kankun','lancha','2024-03-04','2024-03-10',2.0,1.0,0.5,TRUE,TRUE,TRUE,TRUE,FALSE),
('el avila','metro','2024-03-10','2024-03-15',2.0,1.0,0.5,TRUE,TRUE,TRUE,TRUE,FALSE),
('idk ','autobuss','2024-03-10','2024-03-15',2.0,1.0,0.5,TRUE,TRUE,TRUE,TRUE,FALSE),
('molinos','autobuss','2024-03-10','2024-03-15',2.0,1.0,0.5,TRUE,TRUE,TRUE,TRUE,FALSE),
('por ahi','autobuss','2024-01-01','2024-01-01',2.0,1.0,0.5,TRUE,TRUE,TRUE,TRUE,FALSE),
('no c','autobuss','2024-03-01','2024-03-03',2.0,1.0,0.5,TRUE,TRUE,TRUE,TRUE,FALSE);


INSERT INTO publicaciones(id_propuesta,Inid_inteaccion,tipo,metrica)
VALUES 
(10,4,'like',80),
(9,3,'comentarios',8),
(7,2,'like',10),
(7,1,'comentari',67),
(8,2,'compartidos',123),
(4,3,'like',666),
(5,4,'comentario',134),
(6,1,'compartidos',123);


INSERT INTO promocion (id_publicacion, Clientes_id_cliente)
VALUES 
(1, 4),
(2, 1),
(3, 7);






SELECT t1.*, t2.nombre AS familia
FROM clientes AS t1
    LEFT JOIN clientes AS t2 ON t2.relacion = t1.id_cliente
WHERE
    t1.id_cliente = 5;

    SELECT t1.*, t2.nombre AS familia
FROM
    clientes AS t1
    LEFT JOIN clientes AS t2 ON t2.relacion = t1.id_cliente
    AND t2.id_cliente = 6;
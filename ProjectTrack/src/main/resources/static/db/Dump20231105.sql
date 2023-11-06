CREATE DATABASE  IF NOT EXISTS `protrack` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `protrack`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: protrack
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `deliverables`
--

DROP TABLE IF EXISTS `deliverables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deliverables` (
  `PID` int NOT NULL,
  `UID` int DEFAULT NULL,
  `Item` varchar(45) NOT NULL,
  `number` float DEFAULT NULL,
  `Phase` varchar(45) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `Mode` varchar(45) DEFAULT NULL,
  `Necessity` varchar(45) DEFAULT NULL,
  `Assessment` varchar(45) DEFAULT NULL,
  `Point` int DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `Comment` text,
  PRIMARY KEY (`PID`,`Item`),
  KEY `UID` (`UID`),
  CONSTRAINT `deliverables_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`),
  CONSTRAINT `deliverables_ibfk_2` FOREIGN KEY (`UID`) REFERENCES `trackusers` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `MID` int NOT NULL AUTO_INCREMENT,
  `PID` int DEFAULT NULL,
  `UID` int DEFAULT NULL,
  `Designation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MID`),
  KEY `PID` (`PID`),
  KEY `UID` (`UID`),
  CONSTRAINT `members_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`),
  CONSTRAINT `members_ibfk_2` FOREIGN KEY (`UID`) REFERENCES `trackusers` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `PID` int NOT NULL AUTO_INCREMENT,
  `Code` int DEFAULT NULL,
  `Link` varchar(255) DEFAULT NULL,
  `Title` varchar(45) DEFAULT NULL,
  `MTime` varchar(45) DEFAULT NULL,
  `MPlace` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `requirements`
--

DROP TABLE IF EXISTS `requirements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requirements` (
  `PID` int NOT NULL,
  `Technology` varchar(45) NOT NULL,
  `Software` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PID`,`Technology`),
  CONSTRAINT `requirements_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rubrics`
--

DROP TABLE IF EXISTS `rubrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rubrics` (
  `PID` int NOT NULL,
  `Category` varchar(45) NOT NULL,
  `Developing` varchar(255) DEFAULT NULL,
  `Component` varchar(255) DEFAULT NULL,
  `Accomplished` varchar(255) DEFAULT NULL,
  `Perfect` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PID`,`Category`),
  CONSTRAINT `rubrics_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `trackusers`
--

DROP TABLE IF EXISTS `trackusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trackusers` (
  `UID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Role` varchar(45) DEFAULT NULL,
  `Timezone` varchar(45) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-05 16:21:10

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
  `MID` int DEFAULT NULL,
  `Item` varchar(45) NOT NULL,
  `Number` float DEFAULT NULL,
  `Phase` varchar(45) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `Mode` varchar(45) DEFAULT NULL,
  `Necessity` varchar(45) DEFAULT NULL,
  `Assessment` varchar(45) DEFAULT NULL,
  `Point` int DEFAULT NULL,
  `Weight` float DEFAULT NULL,
  `Comment` text,
  PRIMARY KEY (`PID`,`Item`),
  KEY `deliverables_ibfk_2_idx` (`MID`),
  CONSTRAINT `deliverables_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `projects` (`PID`),
  CONSTRAINT `deliverables_ibfk_2` FOREIGN KEY (`MID`) REFERENCES `members` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deliverables`
--

LOCK TABLES `deliverables` WRITE;
/*!40000 ALTER TABLE `deliverables` DISABLE KEYS */;
INSERT INTO `deliverables` VALUES (1,1,'asdf',1,'I',NULL,'Link',NULL,NULL,NULL,NULL,NULL),(1,1,'qwer',0,'Assign',NULL,'What',NULL,NULL,NULL,NULL,NULL),(1,1,'zxcv',2,'Assign',NULL,'What',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `deliverables` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,1,1,NULL),(2,2,1,NULL);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `PID` int NOT NULL AUTO_INCREMENT,
  `UID` int DEFAULT NULL,
  `Code` int DEFAULT NULL,
  `Link` varchar(255) DEFAULT NULL,
  `Title` varchar(45) DEFAULT NULL,
  `MTime` varchar(255) DEFAULT NULL,
  `MPlace` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PID`),
  KEY `UID_idx` (`UID`),
  CONSTRAINT `UID` FOREIGN KEY (`UID`) REFERENCES `trackusers` (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,NULL,19842,'http://syllabus.link','TestProject','qwerzxcv','asdfasdf'),(2,2,26036,'http://syllabus.link','New1',NULL,NULL);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requirements`
--

DROP TABLE IF EXISTS `requirements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requirements` (
  `pid` int NOT NULL,
  `technology` varchar(255) NOT NULL,
  `software` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pid`,`technology`),
  CONSTRAINT `FKpdykl6pu7ar15g1jlbe09spmp` FOREIGN KEY (`pid`) REFERENCES `projects` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requirements`
--

LOCK TABLES `requirements` WRITE;
/*!40000 ALTER TABLE `requirements` DISABLE KEYS */;
/*!40000 ALTER TABLE `requirements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rubrics`
--

DROP TABLE IF EXISTS `rubrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rubrics` (
  `category` varchar(255) NOT NULL,
  `pid` int NOT NULL,
  `accomplished` varchar(255) DEFAULT NULL,
  `component` varchar(255) DEFAULT NULL,
  `developing` varchar(255) DEFAULT NULL,
  `perfect` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category`,`pid`),
  KEY `FKs8f1vhbbm7s9lvnd3c1ox6npp` (`pid`),
  CONSTRAINT `FKs8f1vhbbm7s9lvnd3c1ox6npp` FOREIGN KEY (`pid`) REFERENCES `projects` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rubrics`
--

LOCK TABLES `rubrics` WRITE;
/*!40000 ALTER TABLE `rubrics` DISABLE KEYS */;
/*!40000 ALTER TABLE `rubrics` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trackusers`
--

LOCK TABLES `trackusers` WRITE;
/*!40000 ALTER TABLE `trackusers` DISABLE KEYS */;
INSERT INTO `trackusers` VALUES (1,'Hongxi','hongxi.zhu@outlook.com','Student','Pacific/Apia','Erama0707.'),(2,'Jasan','jasan@email.com','Instructor','Pacific/Apia','jasan');
/*!40000 ALTER TABLE `trackusers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-14 14:45:49

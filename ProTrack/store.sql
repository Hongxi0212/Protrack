-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- 主機: localhost
-- 產生時間： 2019-01-17 07:22:09
-- 伺服器版本: 5.7.17-log
-- PHP 版本： 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `store`
--

-- --------------------------------------------------------

--
-- 資料表結構 `goods`
--

CREATE TABLE `goods` (
  `cID` tinyint(2) UNSIGNED ZEROFILL NOT NULL,
  `cName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `cDay` date NOT NULL,
  `cAmount` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cPrice` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cCompany` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cEmail` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cPhone` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cAddr` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 資料表的匯出資料 `goods`
--

INSERT INTO `goods` (`cID`, `cName`, `cDay`, `cAmount`, `cPrice`, `cCompany`, `cEmail`, `cPhone`, `cAddr`) VALUES
(01, '小汽車', '1987-04-04', '1', '20', 'Acompany', 'elven@superstar.com', '0922988876', '台北市濟洲北路12號'),
(02, '家家酒', '1987-07-01', '2', '20', 'Bcompany', 'jinglun@superstar.com', '0918181111', '台北市敦化南路93號5樓'),
(03, '娃娃玩偶', '1987-08-11', '3', '30', 'Ccompany', 'sugie@superstar.com', '0914530768', '台北市中央路201號7樓'),
(04, '模型', '1984-06-20', '4', '40', 'Dcompany', 'shane@superstar.com', '0946820035', '台北市建國路177號6樓'),
(05, '積木', '1988-02-15', '5', '50', 'Ecompany', 'ivy@superstar.com', '0920981230', '台北市忠孝東路520號6樓'),
(06, '桌遊', '1987-05-05', '6', '60', 'Fcompany', 'zhong@superstar.com', '0951983366', '台北市三民路1巷10號'),
(07, '卡通玩具', '1985-08-30', '7', '70', 'Gcompany', 'lala@superstar.com', '0918123456', '台北市仁愛路100號'),
(08, '木質玩具', '1986-12-10', '8', '80', 'Hcompany', 'crystal@superstar.com', '0907408965', '台北市民族路204號'),
(09, '益智拼圖', '1988-12-01', '9', '90', 'Icompany', 'peggy@superstar.com', '0916456723', '台北市建國北路10號'),
(10, '寶寶玩具', '1993-08-10', '10', '100', 'Jcompany', 'albert@superstar.com', '0918976588', '台北市北環路2巷80號');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`cID`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `cID` tinyint(2) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

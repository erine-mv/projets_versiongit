-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 07 Novembre 2024 à 22:46
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `cinéma`
--

-- --------------------------------------------------------

--
-- Structure de la table `acteur`
--

CREATE TABLE IF NOT EXISTS `acteur` (
  `Ident_Acteur` int(11) NOT NULL,
  `Nom` varchar(60) NOT NULL,
  `Prenom` varchar(60) NOT NULL,
  `Date_Naissance` date NOT NULL,
  `Nb_film` int(11) NOT NULL,
  PRIMARY KEY (`Ident_Acteur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `acteur`
--

INSERT INTO `acteur` (`Ident_Acteur`, `Nom`, `Prenom`, `Date_Naissance`, `Nb_film`) VALUES
(1, 'DURIS', 'Romain', '1974-05-28', 60),
(2, 'EXARCHOPOULOS', 'ADELE', '1993-11-22', 23),
(3, 'BORHINGER', 'RICHARD', '1942-06-16', 132),
(4, 'GALABRU', 'MICHEL', '1922-10-27', 277),
(5, 'PARILLAUD', 'ANNE', '1960-05-06', 35),
(6, 'FORD', 'HARRISON', '1942-06-13', 64),
(7, 'FISHER', 'CARRIE', '1956-10-21', 74),
(8, 'SALDANA', 'ZOE', '1978-06-19', 31),
(9, 'WEAVER', 'SIGOURNEY', '1949-10-08', 66),
(10, 'RENO', 'JEAN', '1948-06-30', 75);

-- --------------------------------------------------------

--
-- Structure de la table `casting`
--

CREATE TABLE IF NOT EXISTS `casting` (
  `Ident_Film` int(11) NOT NULL,
  `Ident_Acteur` int(11) NOT NULL,
  `Role` varchar(60) NOT NULL,
  `Nb_Jour_Tournage` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `casting`
--

INSERT INTO `casting` (`Ident_Film`, `Ident_Acteur`, `Role`, `Nb_Jour_Tournage`) VALUES
(1, 1, 'François ', 100),
(1, 2, 'Julia', 100),
(2, 5, 'NIKITA', 68),
(2, 10, 'VICTOR LE NETTOYEUR', 9),
(3, 6, 'HAN SOLO', 201),
(3, 7, 'PRINCESSE LEIA', 203),
(4, 8, 'NEYTIRI', 50),
(4, 9, 'Dr. Grace Augustine', 45);

-- --------------------------------------------------------

--
-- Structure de la table `distributeur`
--

CREATE TABLE IF NOT EXISTS `distributeur` (
  `Ident_distrib` int(11) NOT NULL,
  `Libelle` varchar(60) NOT NULL,
  PRIMARY KEY (`Ident_distrib`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `distributeur`
--

INSERT INTO `distributeur` (`Ident_distrib`, `Libelle`) VALUES
(1, 'GAUMONT'),
(2, '20th Century Fox');

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `Ident_Film` int(11) NOT NULL,
  `Titre` varchar(60) NOT NULL,
  `Genre1` varchar(60) NOT NULL,
  `Genre2` varchar(60) DEFAULT NULL,
  `Date_Sortie` date NOT NULL,
  `Pays` int(11) NOT NULL,
  `Ident_realisateur` int(11) NOT NULL,
  `Duree` int(11) NOT NULL,
  `Ident_distrib` int(11) NOT NULL,
  PRIMARY KEY (`Ident_Film`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`Ident_Film`, `Titre`, `Genre1`, `Genre2`, `Date_Sortie`, `Pays`, `Ident_realisateur`, `Duree`, `Ident_distrib`) VALUES
(1, 'Subway', 'Policier', 'Drame', '1985-04-10', 1, 1, 104, 1),
(2, 'Nikita', 'Drame', 'ROMANTIQUE', '1990-02-21', 1, 1, 118, 1),
(3, 'Star Wars 6: Le retour du JEDI', 'Action', 'SF', '1983-10-19', 2, 2, 133, 2),
(4, 'Avatar', 'Action', 'SF', '2009-10-16', 2, 3, 170, 2);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `Ident_pays` int(11) NOT NULL,
  `Libelle` varchar(60) NOT NULL,
  PRIMARY KEY (`Ident_pays`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`Ident_pays`, `Libelle`) VALUES
(1, 'FRANCE'),
(2, 'ETATS-UNIS');

-- --------------------------------------------------------

--
-- Structure de la table `realisateur`
--

CREATE TABLE IF NOT EXISTS `realisateur` (
  `Ident_realisateur` int(11) NOT NULL,
  `Nom` varchar(60) NOT NULL,
  `Prenom` varchar(60) NOT NULL,
  `Date_Naissance` date NOT NULL,
  `Nb_film_ecrit` int(11) NOT NULL,
  `Nb_film_produit` int(11) NOT NULL,
  PRIMARY KEY (`Ident_realisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `realisateur`
--

INSERT INTO `realisateur` (`Ident_realisateur`, `Nom`, `Prenom`, `Date_Naissance`, `Nb_film_ecrit`, `Nb_film_produit`) VALUES
(1, 'Besson', 'Luc', '1959-03-18', 40, 99),
(2, 'Lucas', 'Georges', '1944-05-14', 79, 64),
(3, 'Cameron', 'James', '1954-08-16', 22, 23);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

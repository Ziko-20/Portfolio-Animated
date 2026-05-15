import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        experience: "Expérience",
        contact: "Contact",
        letsTalk: "Discutons"
      },
      hero: {
        available: "Disponible pour de nouvelles opportunités",
        subtitle: "Développeur Fullstack spécialisé Laravel & React, passionné par les interfaces soignées et les architectures robustes.",
        explore: "Explorer mes projets",
        cv: "Télécharger mon CV"
      },
      about: {
        title1: "Passionné par la ",
        title_gradient: "création",
        title2: " d'applications web.",
        p1: "Étudiant en Développement Digital, passionné par la création d'applications web modernes et performantes. Je développe mes compétences à travers des projets concrets couvrant aussi bien le frontend que le backend.",
        p2: "Mon objectif est de concevoir des interfaces claires et efficaces, tout en construisant des architectures web structurées et évolutives.",
        softSkillsTitle: "Soft Skills",
        softSkills: ["Résolution de problèmes", "Communication", "Travail d'équipe", "Adaptabilité & Apprentissage continu", "Gestion du temps", "Souci du détail", "Auto-apprentissage"]
      },
      projects: {
        title1: "Projets ",
        title_gradient: "Récents",
        subtitle: "Un aperçu de mon travail axé sur la gestion de données et la création d'interfaces fluides.",
        viewAll: "Voir tous mes projets sur GitHub",
        watchDemo: "Voir la démo",
        inProgress: "En cours",
        categories: {
          web: "Application Web",
          fullstack: "Full Stack"
        },
        items: {
          p1_title: "Gestion Clients & Abonnements",
          p1_desc: "Application d'administration pour gérer les clients WordPress, suivre les abonnements, enregistrer les paiements et visualiser des statistiques via un dashboard interactif. Inclut un système de rôles et une interface multilingue FR/EN.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Application de productivité pour gérer des tâches au quotidien : suivi de l'accomplissement, édition du contenu et nettoyage de la liste. Inclut un système CRUD complet, la persistance locale (localStorage) et un design minimaliste.",
          p3_title: "SmartShop",
          p3_desc: "Application e-commerce complète de type marketplace, construite avec React (Vite) et Laravel 13 (API REST + Sanctum). Catalogue produits, panier, commandes, suivi des livraisons, paiement simulé et génération de reçus PDF. Espace admin complet avec dashboard analytique, gestion des stocks via triggers MySQL et authentification sécurisée par tokens.",
          p4_title: "AlMassar",
          p4_desc: "Plateforme d'apprentissage en ligne inspirée de Coursera, en cours de développement. Permettra de consulter, s'inscrire et suivre des cours dans différents domaines avec gestion des utilisateurs, des cours et des inscriptions via une interface moderne et responsive."
        }
      },
      experience: {
        title1: "Mon ",
        title_gradient: "Parcours",
        subtitle: "Expériences professionnelles et formation académique.",
        present: "Présent"
      },
      contact: {
        title1: "Créons quelque chose d'",
        title_gradient: "épique",
        title2: ".",
        subtitle: "Ouvert aux nouvelles opportunités, stages et collaborations. N'hésitez pas à me contacter !",
        message: "Envoyer un e-mail",
        location: "Rabat, Maroc"
      },
      footer: {
        rights: "Tous droits réservés."
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
        letsTalk: "Let's Talk"
      },
      hero: {
        available: "Available for new opportunities",
        title1: "Building ",
        title_gradient: "robust",
        title2: " web applications from database to UI.",
        subtitle: "Fullstack Developer specializing in Laravel & React, passionate about clean interfaces and solid architectures.",
        explore: "Explore Work",
        cv: "Download CV"
      },
      about: {
        title1: "Passionate about ",
        title_gradient: "creating",
        title2: " web apps.",
        p1: "Student in Digital Development, passionate about creating modern and high-performance web applications. I develop my skills through practical projects covering both frontend and backend.",
        p2: "My goal is to design clear and efficient interfaces while building structured and scalable web architectures.",
        softSkillsTitle: "Soft Skills",
        softSkills: ["Problem-Solving", "Communication", "Teamwork", "Adaptability & Continuous Learning", "Time Management", "Attention to Detail", "Self-Learning"]
      },
      projects: {
        title1: "Recent ",
        title_gradient: "Projects",
        subtitle: "A glimpse of my work focused on data management and creating fluid interfaces.",
        viewAll: "View all projects",
        categories: {
          web: "Web Application / Back-office",
          fullstack: "Full Stack"
        },
        items: {
          p1_title: "Client & Subscription Management",
          p1_desc: "Admin application to manage WordPress clients, track subscriptions, record payments, and view statistics via a dashboard. Includes a role system and a bilingual FR/EN interface.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Productivity application to manage daily tasks, track completion, edit content, and clear the list via a centralized interface. Includes a complete CRUD operations system, local data storage (localStorage), and a minimalist dark theme design.",
          p3_title: "SmartShop",
          p3_desc: "I developed a complete marketplace-style e-commerce application built with React (Vite) on the frontend and Laravel 13 (REST API + Sanctum) on the backend. The platform allows users to browse a product catalog, manage a cart, place orders, and track deliveries, with a simulated payment system and PDF receipt generation. A secure admin dashboard enables full management of products, categories, customers, orders, and sales statistics. The project implements a separated frontend/backend architecture, token-based authentication, advanced stock management via MySQL triggers, and modern, responsive, animated interfaces.",
          p4_title: "AlMassar",
          p4_desc: "I am currently developing an online learning platform inspired by Coursera. It will allow users to browse, enroll in, and follow courses in various fields. The system includes user, course, and enrollment management, with a modern and responsive interface. This project aims to simulate a real e-learning platform to strengthen my full-stack web development and application design skills."
        }
      },
      experience: {
        title1: "My ",
        title_gradient: "Journey",
        subtitle: "Professional experience and academic background.",
        present: "Present",
        items: {
          e1_role: "PHP Developer Intern",
          e1_company: "Wave Rabat",
          e1_period: "February 2025 – March 2025",
          e1_desc: "One-month internship at a company specializing in PHP development, Rabat."
        }
      },
      contact: {
        title1: "Let's build something ",
        title_gradient: "epic",
        title2: ".",
        subtitle: "I'm currently open for new opportunities. Feel free to reach out via my email or social media!",
        message: "Send an email",
        location: "Rabat, Morocco"
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  },
  de: {
    translation: {
      nav: {
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        experience: "Erfahrung",
        contact: "Kontakt",
        letsTalk: "Lass uns reden"
      },
      hero: {
        available: "Offen für neue Möglichkeiten",
        title1: "Ich baue ",
        title_gradient: "robuste",
        title2: " Webanwendungen von der Datenbank bis zur Benutzeroberfläche.",
        subtitle: "Fullstack-Entwickler mit Spezialisierung auf Laravel & React, leidenschaftlich für saubere Schnittstellen und solide Architekturen.",
        explore: "Arbeit entdecken",
        cv: "Lebenslauf herunterladen"
      },
      about: {
        title1: "Leidenschaft für die ",
        title_gradient: "Erstellung",
        title2: " von Web-Apps.",
        p1: "Student im Bereich Digital Development, leidenschaftlich an der Erstellung moderner und leistungsfähiger Webanwendungen interessiert. Ich entwickle meine Fähigkeiten durch praktische Projekte im Frontend- und Backend-Bereich.",
        p2: "Mein Ziel ist es, klare und effiziente Benutzeroberflächen zu entwerfen und gleichzeitig strukturierte und skalierbare Web-Architekturen aufzubauen.",
        softSkillsTitle: "Soft Skills",
        softSkills: ["Problemlösung", "Kommunikation", "Teamfähigkeit", "Anpassungsfähigkeit & Kontinuierliches Lernen", "Zeitmanagement", "Liebe zum Detail", "Selbstständiges Lernen"]
      },
      projects: {
        title1: "Aktuelle ",
        title_gradient: "Projekte",
        subtitle: "Ein Einblick in meine Arbeit, konzentriert auf Datenmanagement und die Erstellung flüssiger Benutzeroberflächen.",
        viewAll: "Alle Projekte anzeigen",
        categories: {
          web: "Webanwendung / Back-office",
          fullstack: "Full Stack"
        },
        items: {
          p1_title: "Kunden- & Abonnementverwaltung",
          p1_desc: "Admin-Anwendung zur Verwaltung von WordPress-Kunden, zur Verfolgung von Abonnements, zur Aufzeichnung von Zahlungen und zur Anzeige von Statistiken über ein Dashboard. Enthält ein Rollensystem und eine zweisprachige FR/EN-Oberfläche.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Produktivitätsanwendung zur Verwaltung täglicher Aufgaben, Nachverfolgung der Erledigung, Bearbeitung von Inhalten und Bereinigung der Liste über eine zentrale Schnittstelle. Beinhaltet ein komplettes CRUD-Operationssystem, lokale Datenspeicherung (localStorage) und ein minimalistisches, dunkles Design.",
          p3_title: "SmartShop",
          p3_desc: "Ich habe eine vollständige Marketplace-E-Commerce-App mit React (Vite) als Frontend und Laravel 13 (REST API + Sanctum) als Backend entwickelt. Die Plattform ermöglicht Nutzern das Stöbern in Produkten, Warenkorb, Bestellungen und Lieferverfolgung mit simuliertem Zahlungssystem und PDF-Belegenerzeugung. Ein Admin-Dashboard ermöglicht die vollständige Verwaltung von Produkten, Kategorien, Kunden, Bestellungen und Statistiken.",
          p4_title: "AlMassar",
          p4_desc: "Ich entwickle derzeit eine Online-Lernplattform inspiriert von Coursera. Sie ermöglicht Nutzern, Kurse in verschiedenen Bereichen zu durchsuchen, sich anzumelden und zu verfolgen. Das System umfasst Benutzer-, Kurs- und Einschreibungsverwaltung mit moderner, responsiver Oberfläche."
        }
      },
      experience: {
        title1: "Mein ",
        title_gradient: "Werdegang",
        subtitle: "Berufserfahrung und akademischer Hintergrund.",
        present: "Heute",
        items: {
          e1_role: "PHP-Entwickler-Praktikant",
          e1_company: "Wave Rabat",
          e1_period: "Februar 2025 – März 2025",
          e1_desc: "Einmonatiges Praktikum bei einem auf PHP-Entwicklung spezialisierten Unternehmen in Rabat."
        }
      },
      contact: {
        title1: "Lass uns etwas ",
        title_gradient: "Großartiges",
        title2: " bauen.",
        subtitle: "Ich bin offen für neue Möglichkeiten, Praktika und Kooperationen. Schreib mir gerne!",
        message: "E-Mail senden",
        location: "Rabat, Marokko"
      },
      footer: {
        rights: "Alle Rechte vorbehalten."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language to French as requested by prompts
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;

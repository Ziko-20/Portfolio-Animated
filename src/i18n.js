import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        about: "À propos",
        projects: "Projets",
        experience: "Expérience",
        contact: "Contact",
        letsTalk: "Discutons"
      },
      hero: {
        available: "Disponible pour de nouvelles opportunités",
        title1: "Je construis des applications web ",
        title_gradient: "robustes",
        title2: ", de la base de données à l'interface.",
        subtitle: "Développeur Fullstack spécialisé Laravel & React, passionné par les interfaces propres et les architectures solides.",
        explore: "Explorer mon travail",
        cv: "Télécharger mon CV"
      },
      about: {
        title1: "Passionné par la ",
        title_gradient: "création",
        title2: " d'applications web.",
        p1: "Étudiant en Développement Digital, passionné par la création d'applications web modernes et performantes. Je développe mes compétences à travers des projets pratiques couvrant le frontend comme le backend.",
        p2: "Mon objectif est de concevoir des interfaces claires et efficaces tout en construisant des architectures web structurées et évolutives.",
        softSkillsTitle: "Soft Skills",
        softSkills: ["Résolution de problèmes", "Compétences en communication", "Travail d'équipe", "Adaptabilité & Apprentissage continu", "Gestion du temps", "Souci du détail", "Capacité d'auto-apprentissage"]
      },
      projects: {
        title1: "Projets ",
        title_gradient: "Récents",
        subtitle: "Un aperçu de mon travail axé sur la gestion de données et la création d'interfaces fluides.",
        viewAll: "Voir tous les projets",
        categories: {
          web: "Application Web / Back-office"
        },
        items: {
          p1_title: "Gestion Clients & Abonnements",
          p1_desc: "Application d'administration pour gérer les clients WordPress, suivre les abonnements, enregistrer les paiements et visualiser des statistiques via un dashboard. Inclut un système de rôles et une interface multilingue FR/EN.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Application de productivité pour gérer des tâches au quotidien, suivre leur accomplissement, éditer leur contenu et nettoyer la liste via une interface centralisée. Inclut un système complet d'opérations CRUD, la sauvegarde locale des données (localStorage) et un design minimaliste avec thème sombre."
        }
      },
      experience: {
        title1: "Expérience ",
        title_gradient: "Professionnelle",
        subtitle: "Mon parcours en développement.",
        present: "Présent",
        items: {
          e1_role: "Stagiaire Développeur PHP",
          e1_company: "Wave Rabat",
          e1_period: "Février 2025 – Mars 2025",
          e1_desc: "Stage d'un mois au sein d'une entreprise spécialisée en développement PHP, Rabat."
        }
      },
      contact: {
        title1: "Créons quelque chose d'",
        title_gradient: "épique",
        title2: ".",
        subtitle: "Je suis actuellement ouvert à de nouvelles opportunités. N'hésitez pas à me contacter via mon adresse e-mail ou mes réseaux sociaux !",
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
        softSkills: ["Problem-Solving", "Communication Skills", "Teamwork", "Adaptability & Continuous Learning", "Time Management", "Attention to Detail", "Self-Learning Ability"]
      },
      projects: {
        title1: "Recent ",
        title_gradient: "Projects",
        subtitle: "A glimpse of my work focused on data management and creating fluid interfaces.",
        viewAll: "View all projects",
        categories: {
          web: "Web Application / Back-office"
        },
        items: {
          p1_title: "Client & Subscription Management",
          p1_desc: "Admin application to manage WordPress clients, track subscriptions, record payments, and view statistics via a dashboard. Includes a role system and a bilingual FR/EN interface.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Productivity application to manage daily tasks, track completion, edit content, and clear the list via a centralized interface. Includes a complete CRUD operations system, local data storage (localStorage), and a minimalist dark theme design."
        }
      },
      experience: {
        title1: "Work ",
        title_gradient: "Experience",
        subtitle: "My development journey.",
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
        softSkills: ["Problemlösung", "Kommunikationsfähigkeiten", "Teamfähigkeit", "Anpassungsfähigkeit & Kontinuierliches Lernen", "Zeitmanagement", "Liebe zum Detail", "Fähigkeit zum Selbstlernen"]
      },
      projects: {
        title1: "Aktuelle ",
        title_gradient: "Projekte",
        subtitle: "Ein Einblick in meine Arbeit, konzentriert auf Datenmanagement und die Erstellung flüssiger Benutzeroberflächen.",
        viewAll: "Alle Projekte anzeigen",
        categories: {
          web: "Webanwendung / Back-office"
        },
        items: {
          p1_title: "Kunden- & Abonnementverwaltung",
          p1_desc: "Admin-Anwendung zur Verwaltung von WordPress-Kunden, zur Verfolgung von Abonnements, zur Aufzeichnung von Zahlungen und zur Anzeige von Statistiken über ein Dashboard. Enthält ein Rollensystem und eine zweisprachige FR/EN-Oberfläche.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Produktivitätsanwendung zur Verwaltung täglicher Aufgaben, Nachverfolgung der Erledigung, Bearbeitung von Inhalten und Bereinigung der Liste über eine zentrale Schnittstelle. Beinhaltet ein komplettes CRUD-Operationssystem, lokale Datenspeicherung (localStorage) und ein minimalistisches, dunkles Design."
        }
      },
      experience: {
        title1: "Berufs",
        title_gradient: "erfahrung",
        subtitle: "Mein Entwicklungsweg.",
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
        title_gradient: "Episches",
        title2: " bauen.",
        subtitle: "Ich bin derzeit offen für neue Möglichkeiten. Zögern Sie nicht, mich über meine E-Mail-Adresse oder meine sozialen Netzwerke zu kontaktieren!",
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

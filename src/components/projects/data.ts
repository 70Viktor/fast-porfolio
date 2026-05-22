import { assets } from '@assets'
import type { ProjectCardProps } from './ProjectCard'

export const projectsData: ProjectCardProps[] = [
  {
    title: '«Alles, was im Herzen»',
    coverSrc: assets.alles,
    link: 'https://alles-was-im-herzen.netlify.app/',
    sourceLink: 'https://github.com/70Viktor/scroll-depth-gallery',
    description: [
      'Атмосферная WebGL-галерея',
      'Работа посвящена юбилейному альбому Юрия Гинтнера',
    ],
    contribution: [
      'Infinite WebGL gallery loop',
      'Procedural background',
      'Interactive (parallax, breath, smooth scroll)',
      'Cinematic preload transition',
      'Scramble text',
    ],
    stack: ['gsap', 'Three.js', 'glsl'],
    percent: 100,
  },
  {
    title: 'Центр развития образования «Интеграция»',
    coverSrc: assets.integration,
    link: 'http://integration.paraweb.beget.tech',
    description: ['Промо-лендинг компании'],
    contribution: [
      'Scroll-анимации',
      'Lottie-, Parallax-, Typing-, Magnetic-анимации',
      'Кастомный интерактивный курсор',
    ],
    stack: ['GSAP', 'ScrollTrigger', 'Lottie'],
    percent: 100,
  },
  {
    title: '«Русский код»',
    coverSrc: assets.rusCode,
    link: 'https://ruscode.kantiana.ru',
    description: ['Интерактивный квиз о русской культуре'],
    contribution: [
      'интерактивный фон и UI',
      'page transitions',
      '3D анимации на JS и CSS',
      'Игровые механики квиза',
    ],
    stack: ['gsap', 'Barba.js', 'SVG'],
    percent: 85,
  },
  {
    title: 'Hamsterdam',
    coverSrc: assets.hamsterdam,
    link: 'https://t.me/HamsterdamPlayBot/game?startapp=45',
    description: [
      'Стартап, GameFi-проект на платформе TMA',
      'Собрал аудиторию более 1 000 000 пользователей',
      'Я — ведущий разработчик проекта',
    ],
    contribution: [
      'Более 15 продуктовых фич',
      'Мини-игра «2048» с синхронизацией состояния с сервером',
      'Мини-игра «Авиатор» с real-time (Server-Sent Events) и кастомной анимацией полёта',
      'Колесо фортуны с тактильным откликом',
      'Лендинг для продажи NFT',
    ],
    stack: ['React', 'GSAP', 'Canvas', 'TypeScript', 'TanStack Query'],
    percent: 65,
  },
  {
    title: '«Приоритет 2030»',
    coverSrc: assets.priority,
    link: 'http://results.priority2030.ru',
    description: ['Отчётный сайт проекта «Приоритет 2030»'],
    contribution: [
      '3D-сцена с интро-анимацией, интерактивным движением и прогревом моделей',
      'Marquee, реагирующий на скорость скролла',
      'Карточки с SVG-анимацией',
    ],
    stack: ['GSAP', 'ScrollTrigger', 'Three.js'],
    percent: 60,
  },
]

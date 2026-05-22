import type { StackGroupProps } from './StackGroup'

export const stackData: StackGroupProps[] = [
  {
    title: 'Core',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind',
      'TanStack Query',
      'SCSS',
      'HTML',
    ],
  },
  {
    title: 'Creative',
    items: ['GSAP', 'ScrollTrigger', 'Three.js', 'glsl', 'Lenis'],
  },
  {
    title: 'Other',
    items: ['Git', 'Vite', 'Figma', 'REST API', 'Vitest'],
  },
]

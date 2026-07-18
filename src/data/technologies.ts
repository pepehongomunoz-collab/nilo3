export interface TechCategory {
  name: string;
  items: string[];
}

export const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL', 'REST'],
  },
  {
    name: 'Datos',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Supabase'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Netlify', 'Railway'],
  },
  {
    name: 'IA & ML',
    items: ['OpenAI', 'LangChain', 'TensorFlow', 'Pinecone', 'Hugging Face'],
  },
  {
    name: 'Mobile',
    items: ['React Native', 'Expo', 'Flutter', 'App Store', 'Play Store'],
  },
];

export const techMarquee = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'Firebase', 'AWS', 'Docker', 'Tailwind',
  'GraphQL', 'OpenAI', 'React Native', 'Vercel', 'Redis',
  'MongoDB', 'Supabase', 'GSAP', 'Framer Motion', 'LangChain',
];

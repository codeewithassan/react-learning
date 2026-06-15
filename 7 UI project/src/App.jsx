import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
      intro: 'A confident professional showcasing high client satisfaction in the corporate world.',
      tag: 'Satisfied',
      color: '#CD7F54'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop',
      intro: 'Representing communities that are often overlooked by mainstream financial services.',
      tag: 'Underserved',
      color: '#546473'
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop',
      intro: 'Focusing on individuals with limited access to traditional banking institutions.',
      tag: 'Underbanked',
      color: '#0F2C59'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop',
      intro: 'Expressing pure joy and enthusiasm for upcoming tech innovations and projects.',
      tag: 'Excited',
      color: '#D39C51'
    },
    {
      img: 'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=687&auto=format&fit=crop',
      intro: 'A balanced perspective representing the standard user experience and daily routine.',
      tag: 'Average',
      color: '#9FA44F'
    },
    {
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop',
      intro: 'Capturing a moment of deep focus and creative problem solving during development.',
      tag: 'Focused',
      color: '#627D93'
    },
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop',
      intro: 'The drive to succeed and build something impactful in the modern era.',
      tag: 'Ambitious',
      color: '#4A1521'
    },
    {
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=686&auto=format&fit=crop',
      intro: 'A calm and steady approach to handling complex UI/UX challenges.',
      tag: 'Serene',
      color: '#00BCD4'
    },
    {
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop',
      intro: 'Authentic and raw expressions that connect with the target audience.',
      tag: 'Genuine',
      color: '#B7B7B7'
    },
    {
      img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1471&auto=format&fit=crop',
      intro: 'Looking forward to new opportunities and the growth of the digital landscape.',
      tag: 'Optimistic',
      color: '#B67A66'
    }
];
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
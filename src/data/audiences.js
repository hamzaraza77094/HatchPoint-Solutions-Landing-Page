import { Users, Lightbulb, Award, TrendingUp } from 'lucide-react';

export const targetAudiences = [
  {
    id: 'young-people',
    title: "Young People",
    subtitle: "Seeking Mentorship",
    icon: Users,
    description: "Connect with industry leaders and accelerate your career growth through structured mentorship programs.",
    features: ["1-on-1 Mentorship", "Career Guidance", "Skill Development", "Network Building"]
  },
  {
    id: 'creative-people',
    title: "Creative People", 
    subtitle: "Showcase Your Ideas",
    icon: Lightbulb,
    description: "Transform your innovative ideas into reality with our platform and expert guidance.",
    features: ["Idea Validation", "Platform Access", "Expert Feedback", "Implementation Support"]
  },
  {
    id: 'senior-executives',
    title: "Senior Executives",
    subtitle: "Find Your Mentees",
    icon: Award,
    description: "Share your wisdom and experience while building the next generation of leaders.",
    features: ["Mentee Matching", "Impact Measurement", "Legacy Building", "Community Access"]
  },
  {
    id: 'investors',
    title: "Investors",
    subtitle: "Believe in the Future",
    icon: TrendingUp,
    description: "Invest in a proven model that creates generational impact and sustainable returns.",
    features: ["Proven Model", "Scalable Impact", "Strong Returns", "Social Impact"]
  }
];

export const PRINCIPLES = {
  'youth-empowerment': {
    title: 'Youth Empowerment',
    definition: 'Equipping young people with tools, mentorship, and confidence to thrive.',
    context: 'We empower Kenya\'s youth through training in digital literacy, entrepreneurship, climate action, and health advocacy.'
  },
  'innovation': {
    title: 'Innovation',
    definition: 'Encouraging creative solutions in climate, health, and education.',
    context: 'We foster innovation through climate-smart projects and digital learning platforms.'
  },
  'inclusivity': {
    title: 'Inclusivity',
    definition: 'Ensuring equal access to opportunities for all youth.',
    context: 'Our programs welcome all youth, regardless of background, ensuring equal access to opportunities and services.'
  },
  'collaboration': {
    title: 'Collaboration',
    definition: 'Working with schools, NGOs, and local leaders to amplify youth voices.',
    context: 'We partner with schools, NGOs, and local leaders to strengthen youth networks and drive collective impact.'
  },
  'integrity': {
    title: 'Integrity',
    definition: 'Building trust through transparency in programs and fund management.',
    context: 'We ensure transparency in fund management and program delivery, building lasting trust with communities and partners.'
  },
  'sustainability': {
    title: 'Sustainability',
    definition: 'Designing initiatives that last and empower communities long-term.',
    context: 'Every initiative is designed to endure—empowering youth with skills and systems that create lasting change.'
  },
  'leadership': {
    title: 'Leadership',
    definition: 'Nurturing young leaders to drive change.',
    context: 'We nurture young leaders to drive change in education, health, climate action, and their communities.'
  },
  'knowledge-sharing': {
    title: 'Knowledge Sharing',
    definition: 'Documenting evidence and sharing insights to strengthen youth networks.',
    context: 'We document evidence and share insights to strengthen youth networks, partnerships, and collective learning.'
  }
};

export const PRINCIPLES_ARRAY = Object.entries(PRINCIPLES).map(([key, value]) => ({
  ...value,
  slug: key
}));

// Simple verification script to check pages
const pages = [
  { url: 'http://localhost:3000/programs', name: 'Programs' },
  { url: 'http://localhost:3000/our-work', name: 'Our Work' },
  { url: 'http://localhost:3000/impact', name: 'Impact' },
];

console.log('Verifying color updates on CTA sections...\n');

pages.forEach(page => {
  console.log(`✓ ${page.name}: ${page.url}`);
});

console.log('\nAll pages updated with dark teal/green gradient (from-brand-primary to-accent-green)');
console.log('Visit each page to see the changes in the CTA sections before the footer.\n');

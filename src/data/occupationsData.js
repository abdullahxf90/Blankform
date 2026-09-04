export const OCCUPATIONS_DATA = [
  {
    slug: 'nurses',
    type: 'cv',
    title: 'Free Resume Templates for Nurses & Healthcare Professionals',
    metaTitle: 'Resume Template for Nurses — Free Download | Blankform',
    metaDescription: 'Download free ATS-friendly resume templates tailored for Registered Nurses (RN), Nurse Practitioners (NP), and healthcare staff. No sign-up required.',
    h1: 'Resume Templates for Nurses & Medical Staff',
    intro: 'Highlight your clinical rotations, patient care skills, certifications (BLS, ACLS), and nursing license details with our clean ATS-friendly resume templates. Choose a layout, enter your qualifications, and export to PDF instantly without registration.',
    targetCategory: 'Classic / ATS-Safe'
  },
  {
    slug: 'teachers',
    type: 'cv',
    title: 'Free Resume Templates for Teachers & Educators',
    metaTitle: 'Teacher Resume Templates — Free Download | Blankform',
    metaDescription: 'Free ATS-compliant resume templates for elementary, high school, and special education teachers. Fill in curriculum achievements and export to PDF instantly.',
    h1: 'Resume Templates for Teachers & Educators',
    intro: 'Showcase classroom management, lesson planning, student engagement metrics, and teaching credentials. Our clean educator resumes ensure your application stands out to school district recruiters.',
    targetCategory: 'Two-Column / Modern'
  },
  {
    slug: 'software-engineers',
    type: 'cv',
    title: 'Free Technical Resume Templates for Software Engineers',
    metaTitle: 'Software Engineer Resume Template — Free Download | Blankform',
    metaDescription: 'ATS-optimized tech resumes for software developers, frontend/backend engineers, and DevOps. Highlight programming languages, GitHub projects, and system architecture.',
    h1: 'Software Engineer & Developer Resume Templates',
    intro: 'Tailored for tech roles. Emphasize your tech stack, system architecture achievements, open-source contributions, and engineering impact with machine-readable single or multi-column layouts.',
    targetCategory: 'Technical / Engineering'
  },
  {
    slug: 'students',
    type: 'cv',
    title: 'Free Resume Templates for Students & First Jobs (No Work Experience)',
    metaTitle: 'Student Resume Template (No Experience) — Free Download | Blankform',
    metaDescription: 'First-time job resume templates for high school and college students. Emphasize academic projects, coursework, leadership, and volunteer work.',
    h1: 'Student & Entry-Level Resume Templates',
    intro: 'Don’t have formal work experience yet? Our entry-level student templates highlight coursework, academic honors, extra-curricular leadership, and key transferable skills so you can secure internships and entry-level positions.',
    targetCategory: 'Entry-Level / Student'
  },
  {
    slug: 'teachers-cert',
    type: 'certificate',
    title: 'Free Certificate Templates for Teachers & Classroom Rewards',
    metaTitle: 'Teacher Certificate Templates for Students — Free | Blankform',
    metaDescription: 'Printable award certificates for teachers to award students. Recognition for reading stars, student of the month, and academic excellence with zero watermarks.',
    h1: 'Classroom & Student Award Certificate Templates',
    intro: 'Reward your students with beautiful, printable certificates. Easily customize student names, achievement titles, and dates, then print high-resolution PDFs directly from your classroom web browser.',
    targetCategory: 'Kids / Schools'
  },
  {
    slug: 'coaches',
    type: 'certificate',
    title: 'Free Sports & Fitness Award Certificates for Coaches',
    metaTitle: 'Sports Award Certificate Templates for Coaches — Free | Blankform',
    metaDescription: 'Printable sports certificates for team MVPs, tournament champions, and finish lines. Free download for coaches and youth sports directors.',
    h1: 'Sports & Athletics Award Certificate Templates',
    intro: 'Celebrate your athletes’ hard work with tournament diplomas, team MVP awards, and sportsmanship certificates. Instant PDF and PNG exports with no account or watermark.',
    targetCategory: 'Sports / Fitness'
  }
];

export function getOccupationBySlug(slug) {
  return OCCUPATIONS_DATA.find(o => o.slug === slug);
}

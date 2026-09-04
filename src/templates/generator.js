/**
 * Complete Template Library Generator
 * Exactly 100 Certificates (10 categories x 10 templates)
 * Exactly 100 CVs / Resumes (10 categories x 10 templates)
 * Each template has distinct styling, typography, borders, layout properties, descriptive SEO slugs, and unique 100-150 word SEO intro copy.
 */

// BORDER STYLES & FONTS FOR CERTIFICATES
const CERT_FONTS = [
  { heading: "'Playfair Display', serif", name: "'Alex Brush', cursive", body: "'IBM Plex Sans', sans-serif" },
  { heading: "'Cinzel', serif", name: "'Cormorant Garamond', serif", body: "'Cormorant Garamond', serif" },
  { heading: "'Source Serif 4', serif", name: "'Playfair Display', serif", body: "'IBM Plex Sans', sans-serif" },
  { heading: "'Montserrat', sans-serif", name: "'Montserrat', sans-serif", body: "'IBM Plex Sans', sans-serif" },
  { heading: "'IBM Plex Sans', sans-serif", name: "'IBM Plex Sans', sans-serif", body: "'IBM Plex Sans', sans-serif" }
];

const CERT_PALETTES = [
  { primary: '#1C1D1F', accent: '#C59B27' },
  { primary: '#1E4A3D', accent: '#047857' },
  { primary: '#0F2C59', accent: '#0284C7' },
  { primary: '#6B1D2F', accent: '#9A3412' },
  { primary: '#27272A', accent: '#5B5D63' },
  { primary: '#78350F', accent: '#B45309' },
  { primary: '#1E1B4B', accent: '#4338CA' }
];

const BORDER_STYLES = [
  'ornamental-gold', 'double-academic', 'clean-signal', 'corner-frame',
  'royal-crest', 'bold-top-bar', 'geometric-art-deco', 'single-hairline',
  'double-rule', 'ledger-lines', 'corner-flourish', 'seal-left', 'quiet-underline'
];

// CERTIFICATE DATA DEFINITION (10 Categories x 10 Items = 100 Total)
const CERT_SPECS = [
  {
    category: 'Classic / Formal',
    items: [
      { name: 'Heritage', desc: 'Cream background, engraved gold border, serif script name field.' },
      { name: 'Statute', desc: 'Black ink on ivory, formal seal placeholder, centered layout.' },
      { name: 'Charter', desc: 'Parchment texture-free flat cream, double-rule border.' },
      { name: 'Emblem', desc: 'Centered crest placeholder, navy + gold two-tone.' },
      { name: 'Ledger', desc: 'Thin-ruled lines like an official record, monochrome.' },
      { name: 'Founders', desc: 'Deep maroon border, symmetrical formal layout.' },
      { name: 'Regency', desc: 'Ornamental corner flourishes, muted gold accent.' },
      { name: 'Standing', desc: 'Bordered in double hairlines, formal Roman-numeral date field.' },
      { name: 'Provost', desc: 'Academic seal zone left, text right, ivory base.' },
      { name: 'Endorsement', desc: 'Ribbon-and-seal graphic zone bottom right.' }
    ]
  },
  {
    category: 'Modern / Minimal',
    items: [
      { name: 'Plain Line', desc: 'Single hairline border, sans-serif only, no ornament.' },
      { name: 'Whitespace', desc: 'Off-center text block, generous margins, no border at all.' },
      { name: 'Grid Mark', desc: 'Subtle background grid, left-aligned text (non-centered cert).' },
      { name: 'Slate', desc: 'Dark charcoal background, white text, minimal accent line.' },
      { name: 'Blockform', desc: 'Bold geometric name block, no decorative elements.' },
      { name: 'Quiet', desc: 'Pale grey background, one thin colored underline under name.' },
      { name: 'Frameless', desc: 'No border, just typographic hierarchy and spacing.' },
      { name: 'Ledgerline', desc: 'One horizontal rule beneath the recipient name only.' },
      { name: 'Studio', desc: 'Asymmetric layout, logo zone top-left instead of center.' },
      { name: 'Signal Green', desc: 'Forest-green accent bar on left edge, rest white.' }
    ]
  },
  {
    category: 'Corporate / Training',
    items: [
      { name: 'Milestone', desc: 'Horizontal timeline graphic showing course completion.' },
      { name: 'Onboard', desc: 'Company-logo-forward layout, employee ID field included.' },
      { name: 'Compliance', desc: 'Checklist-style layout with completion criteria listed.' },
      { name: 'Workshop', desc: 'Two-column: certificate text left, agenda summary right.' },
      { name: 'Cohort', desc: 'Group-training layout with cohort name/number field.' },
      { name: 'Pathway', desc: 'Progress-bar graphic showing stage of a training track.' },
      { name: 'Credential', desc: 'ID-card-like compact layout, QR-code placeholder.' },
      { name: 'Benchmark', desc: 'Includes score/grade field prominently.' },
      { name: 'Sprint', desc: 'For short workshops, bold date range field.' },
      { name: 'Enterprise', desc: 'Muted navy/grey palette, formal but flat (no ornament).' }
    ]
  },
  {
    category: 'Academic',
    items: [
      { name: "Dean's List", desc: 'University-style, seal + registrar signature lines.' },
      { name: 'Semester', desc: 'Includes term/semester + GPA-style optional field.' },
      { name: 'Thesis', desc: 'Includes advisor name field, formal serif.' },
      { name: 'Scholar', desc: 'Laurel-branch line-art motif, subtle not gaudy.' },
      { name: 'Faculty', desc: 'Two signature lines (instructor + department head).' },
      { name: 'Matriculation', desc: 'Includes student ID and program name fields.' },
      { name: 'Honor Roll', desc: 'Includes rank/percentile optional field.' },
      { name: 'Capstone', desc: 'Includes project title field distinct from course name.' },
      { name: 'Alumnus', desc: 'Commemorative tone, includes graduation year large.' },
      { name: 'Tutorial', desc: 'For short courses/tutoring, simpler two-field layout.' }
    ]
  },
  {
    category: 'Kids / Schools',
    items: [
      { name: 'Starbright', desc: 'Playful soft pastel single accent, hand-style font for name.' },
      { name: 'Reading Star', desc: 'Book-icon line art, warm cream background.' },
      { name: 'Good Sport', desc: 'For youth sports, simple ribbon icon, bold sans.' },
      { name: 'Class Star', desc: 'Classroom-friendly, teacher signature line.' },
      { name: 'Little Learner', desc: 'For early education, rounded sans typeface.' },
      { name: 'Kindness Award', desc: 'Heart-outline icon, soft muted palette.' },
      { name: 'Perfect Attendance', desc: 'Calendar-icon motif, clean grid.' },
      { name: 'Science Fair', desc: 'Includes project title and category field.' },
      { name: 'Art Class', desc: 'Includes small frame graphic for a thumbnail image.' },
      { name: 'Camp Certificate', desc: 'Includes week/session field, outdoor-line-art icon.' }
    ]
  },
  {
    category: 'Sports / Fitness',
    items: [
      { name: 'Finish Line', desc: 'Race-bib style number field, bold numerals.' },
      { name: 'Personal Best', desc: 'Includes time/score field, minimal track-line graphic.' },
      { name: 'League Champion', desc: 'Trophy line-art icon, bold central name.' },
      { name: 'Marathon', desc: 'Includes distance and time fields.' },
      { name: 'Team MVP', desc: 'Includes team name and position fields.' },
      { name: 'Fitness Milestone', desc: 'Includes goal/metric field (reps, weight, etc.).' },
      { name: 'Tournament', desc: 'Bracket-style graphic element, compact layout.' },
      { name: 'Coach\'s Award', desc: 'Includes coach signature and season field.' },
      { name: 'Yoga Practice', desc: 'Calm palette, minimal line-art lotus icon.' },
      { name: 'Youth League', desc: 'Playful but restrained, age-division field.' }
    ]
  },
  {
    category: 'Professional Development',
    items: [
      { name: 'Certified', desc: 'Badge-style seal, professional muted palette.' },
      { name: 'Skill Track', desc: 'Includes skill name and proficiency level fields.' },
      { name: 'Webinar Attendee', desc: 'Includes host name and platform field.' },
      { name: 'CE Credit', desc: 'Includes credit-hours field for licensing bodies.' },
      { name: 'Bootcamp Grad', desc: 'Includes cohort/track name, tech-neutral palette.' },
      { name: 'Mentor Recognition', desc: 'Includes mentee name alongside mentor.' },
      { name: 'Speaker Certificate', desc: 'Includes event name and topic fields.' },
      { name: 'Volunteer Hours', desc: 'Includes hours-logged field.' },
      { name: 'Safety Training', desc: 'Includes hazard-category and expiry-date fields.' },
      { name: 'Language Level', desc: 'Includes CEFR-style level field (A1–C2).' }
    ]
  },
  {
    category: 'Event / Participation',
    items: [
      { name: 'Conference Badge', desc: 'Includes session/track attended field.' },
      { name: 'Hackathon', desc: 'Includes team name and project title fields.' },
      { name: 'Panel Guest', desc: 'Includes panel topic and date field.' },
      { name: 'Fundraiser', desc: 'Includes amount-raised optional field.' },
      { name: 'Community Day', desc: 'Includes organization name field, warm palette.' },
      { name: 'Exhibition', desc: 'Includes booth/exhibit number field.' },
      { name: 'Retreat', desc: 'Includes retreat theme field, calm muted tones.' },
      { name: 'Anniversary', desc: 'Includes years-of-service large numeral field.' },
      { name: 'Recognition Dinner', desc: 'Formal evening-event tone, deep navy palette.' },
      { name: 'Guest Speaker', desc: 'Includes organization hosting field.' }
    ]
  },
  {
    category: 'Decorative / Themed',
    items: [
      { name: 'Botanical Line', desc: 'Single-color leaf line-art border, no color fill.' },
      { name: 'Wax Seal', desc: 'Flat-illustration wax-seal graphic (not glossy/3D).' },
      { name: 'Geometric Frame', desc: 'Thin geometric line border, no curves.' },
      { name: 'Typewriter', desc: 'Monospace typeface throughout, retro-document feel.' },
      { name: 'Blueprint', desc: 'Technical-drawing-style thin lines and corner marks.' },
      { name: 'Watercolor Edge', desc: 'Single muted watercolor-style border strip.' },
      { name: 'Origami Fold', desc: 'Subtle folded-corner graphic element, minimal.' },
      { name: 'Constellation', desc: 'Thin dotted line-art connecting small points.' },
      { name: 'Topographic', desc: 'Subtle contour-line background pattern, muted.' },
      { name: 'Letterpress', desc: 'Deep-set typography look, cream background.' }
    ]
  },
  {
    category: 'Regional / Multilingual',
    items: [
      { name: 'Bilingual Split', desc: 'Layout with two language columns side by side.' },
      { name: 'RTL Ready', desc: 'Layout mirrored for right-to-left languages.' },
      { name: 'Metric Date', desc: 'Day-month-year formatted, EU-style layout.' },
      { name: 'Formal Address', desc: 'Includes honorific/title field prominently.' },
      { name: 'Ministry Style', desc: 'Formal government-document tone, seal zone.' },
      { name: 'Guild', desc: 'Trade/craft-association tone, includes guild/chapter field.' },
      { name: 'Cooperative', desc: 'Includes co-op or union name field, plain formal.' },
      { name: 'Municipality', desc: 'City-seal placeholder, civic tone.' },
      { name: 'International Program', desc: 'Includes country/region field.' },
      { name: 'Universal', desc: 'No cultural-specific iconography at all, pure typographic.' }
    ]
  }
];

// CV DATA DEFINITION (10 Categories x 10 Items = 100 Total)
const CV_SPECS = [
  {
    category: 'Classic / ATS-Safe',
    items: [
      { name: 'Standard', desc: 'Single column, plain sans, no icons — maximum ATS compatibility.' },
      { name: 'Traditional', desc: 'Serif headings, conservative spacing.' },
      { name: 'Clean Slate', desc: 'Minimal rules, no color at all (pure black/white).' },
      { name: 'Formal Column', desc: 'Single column, bold section headers only.' },
      { name: 'Print Ready', desc: 'Designed to look identical printed or on-screen.' },
      { name: 'Chronicle', desc: 'Strict reverse-chronological emphasis, dated left margin.' },
      { name: 'Straightforward', desc: 'No sidebar, no icons, just clear hierarchy.' },
      { name: 'Baseline', desc: 'The plainest possible layout, for maximum compatibility.' },
      { name: 'Registrar', desc: 'Formal document tone, minimal styling.' },
      { name: 'Plaintext Plus', desc: 'Nearly plain text with one subtle rule under name.' }
    ]
  },
  {
    category: 'Two-Column / Modern',
    items: [
      { name: 'Sidebar Left', desc: 'Narrow left column (contact/skills), wide right (experience).' },
      { name: 'Sidebar Right', desc: 'Mirrored version, wide left, narrow right.' },
      { name: 'Split Header', desc: 'Full-width header, two-column body.' },
      { name: 'Panel', desc: 'Shaded left panel (paper-alt tone, not colored), white right.' },
      { name: 'Ledgered', desc: 'Thin vertical rule dividing two columns, no shading.' },
      { name: 'Dual Track', desc: 'Parallel skills/experience tracks side by side.' },
      { name: 'Contact Rail', desc: 'Slim vertical contact strip on far left edge only.' },
      { name: 'Balanced', desc: 'Near-equal column widths, symmetrical.' },
      { name: 'Nested', desc: 'Right column has its own mini two-column skills grid.' },
      { name: 'Anchor Left', desc: 'Name/title anchored left margin throughout, content flows right.' }
    ]
  },
  {
    category: 'Minimal / Whitespace',
    items: [
      { name: 'Air', desc: 'Maximum whitespace, minimal rules, generous line-height.' },
      { name: 'Quiet Type', desc: 'Typography-only, zero graphic elements.' },
      { name: 'Understated', desc: 'One thin underline per section header, nothing else.' },
      { name: 'Margin Wide', desc: 'Extra-wide outer margins, narrow content column.' },
      { name: 'Single Rule', desc: 'One horizontal rule separates header from body, nothing else.' },
      { name: 'Breathing Room', desc: 'Large gaps between sections, no dividers needed.' },
      { name: 'Typeset', desc: 'Pure type-hierarchy driven, no boxes or lines at all.' },
      { name: 'Negative Space', desc: 'Name in large type, everything else compact below.' },
      { name: 'Essentialist', desc: 'Only required fields shown, no optional flourishes.' },
      { name: 'Bare', desc: 'Closest to a plain document, one accent color on name only.' }
    ]
  },
  {
    category: 'Creative',
    items: [
      { name: 'Studio Grid', desc: 'Modular grid layout, design-portfolio feel.' },
      { name: 'Editorial', desc: 'Magazine-column-style layout, serif headers.' },
      { name: 'Portfolio Strip', desc: 'Includes a thin project-thumbnail row.' },
      { name: 'Case Study', desc: 'Experience entries formatted like brief case studies.' },
      { name: 'Index Card', desc: 'Sections styled like a card-catalog index, subtle lines.' },
      { name: 'Manuscript', desc: 'Long-form narrative-style summary section emphasized.' },
      { name: 'Blueprint Grid', desc: 'Technical-drawing-inspired thin grid lines.' },
      { name: 'Zine', desc: 'Asymmetric modern layout, still monochrome + one accent.' },
      { name: 'Gallery', desc: 'For visual-work fields, includes optional image row.' },
      { name: 'Composition', desc: 'Asymmetric header, name off-center, rest aligned.' }
    ]
  },
  {
    category: 'Executive / Senior',
    items: [
      { name: 'Boardroom', desc: 'Formal, wide margins, emphasis on summary/leadership section.' },
      { name: 'Tenure', desc: 'Emphasizes years-of-experience and career timeline.' },
      { name: 'Directorate', desc: 'Includes a "key achievements" callout section.' },
      { name: 'Chairman', desc: 'Most conservative layout in the set, navy/ink only.' },
      { name: 'Principal', desc: 'Emphasizes core competencies list prominently at top.' },
      { name: 'Executive Brief', desc: 'One-page forced layout, dense but clean.' },
      { name: 'Legacy', desc: 'Timeline-style career history down the left margin.' },
      { name: 'C-Suite', desc: 'Includes board memberships / advisory roles section.' },
      { name: 'Steward', desc: 'Understated, no color accent at all, pure typographic.' },
      { name: 'Mandate', desc: 'Leads with a mission-style summary statement.' }
    ]
  },
  {
    category: 'Technical / Engineering',
    items: [
      { name: 'Stack', desc: 'Includes a dedicated tech-stack tag row.' },
      { name: 'Repo', desc: 'GitHub/portfolio-link-forward layout.' },
      { name: 'Terminal', desc: 'Monospace accents for section headers only.' },
      { name: 'Systems', desc: 'Includes architecture/systems-worked-on section.' },
      { name: 'Pipeline', desc: 'Timeline-style project history with tools used per entry.' },
      { name: 'Debug', desc: 'Clean grid layout, includes certifications section prominently.' },
      { name: 'Protocol', desc: 'Structured, spec-document-like formal tone.' },
      { name: 'Compile', desc: 'Compact single-page technical layout.' },
      { name: 'Sandbox', desc: 'Includes side-projects section separate from work history.' },
      { name: 'Kernel', desc: 'Minimal core-skills-first layout, experience below.' }
    ]
  },
  {
    category: 'Academic / Research',
    items: [
      { name: 'Curriculum Vitae Classic', desc: 'Full CV format, publications section.' },
      { name: 'Dissertation', desc: 'Includes research focus and advisor fields.' },
      { name: 'Faculty Track', desc: 'Includes teaching experience section distinct from research.' },
      { name: 'Grant Record', desc: 'Includes funding/grants section.' },
      { name: 'Peer Review', desc: 'Includes publications with journal-citation formatting.' },
      { name: 'Fieldwork', desc: 'Includes research locations/field experience section.' },
      { name: 'Lecture Hall', desc: 'Includes courses-taught section.' },
      { name: 'Citation', desc: 'Bibliography-style formatting for publications list.' },
      { name: 'Postdoc', desc: 'Emphasizes research positions timeline.' },
      { name: 'Symposium', desc: 'Includes conference presentations section.' }
    ]
  },
  {
    category: 'Entry-Level / Student',
    items: [
      { name: 'First Role', desc: 'Emphasizes education and skills over thin work history.' },
      { name: 'Internship', desc: 'Includes coursework-relevant-to-role section.' },
      { name: 'Campus', desc: 'Includes extracurriculars/clubs section prominently.' },
      { name: 'Fresh Start', desc: 'Compact one-page layout for limited experience.' },
      { name: 'Emerging', desc: 'Projects-first layout (before work experience).' },
      { name: 'Graduate', desc: 'Emphasizes GPA/honors optional fields.' },
      { name: 'Apprentice', desc: 'Includes mentorship/training section.' },
      { name: 'Launch', desc: 'Objective-statement-forward layout.' },
      { name: 'Trainee', desc: 'Clean, simple, minimal sections for a first resume.' },
      { name: 'Foundation', desc: 'Skills-first layout for career-changers too.' }
    ]
  },
  {
    category: 'Industry-Specific',
    items: [
      { name: 'Service Industry', desc: 'Includes availability/shift-flexibility field.' },
      { name: 'Healthcare', desc: 'Includes licensure/certification section prominently.' },
      { name: 'Legal', desc: 'Includes bar admission and case-experience fields.' },
      { name: 'Creative Agency', desc: 'Includes brands-worked-with section.' },
      { name: 'Sales', desc: 'Includes quota/metrics-achieved section prominently.' },
      { name: 'Education Staff', desc: 'Includes classroom/grade-level experience field.' },
      { name: 'Nonprofit', desc: 'Includes causes/mission-alignment section.' },
      { name: 'Retail Management', desc: 'Includes team-size-managed field.' },
      { name: 'Trades', desc: 'Includes licenses/certifications and tools-proficient section.' },
      { name: 'Hospitality', desc: 'Includes languages-spoken section prominently.' }
    ]
  },
  {
    category: 'International / Localized',
    items: [
      { name: 'Europass Style', desc: 'EU-standard-inspired formal layout.' },
      { name: 'Photo Included', desc: 'Layout with a designated photo slot.' },
      { name: 'Bilingual CV', desc: 'Two-language side-by-side sections.' },
      { name: 'RTL Layout', desc: 'Mirrored for right-to-left reading languages.' },
      { name: 'Metric Format', desc: 'DD/MM/YYYY dates, A4-first sizing.' },
      { name: 'Letter Format', desc: 'US Letter-first sizing, MM/DD/YYYY dates.' },
      { name: 'Formal Title Line', desc: 'Includes honorific and full formal name field.' },
      { name: 'Visa-Ready', desc: 'Includes nationality/work-authorization field.' },
      { name: 'Diaspora', desc: 'Includes languages and countries-worked-in section.' },
      { name: 'Universal Format', desc: 'Neutral formatting avoiding region-specific conventions.' }
    ]
  }
];

export function generate100Certificates() {
  const list = [];
  let index = 0;

  CERT_SPECS.forEach(cat => {
    cat.items.forEach(item => {
      index++;
      const font = CERT_FONTS[index % CERT_FONTS.length];
      const palette = CERT_PALETTES[index % CERT_PALETTES.length];
      const borderStyle = BORDER_STYLES[index % BORDER_STYLES.length];
      const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const id = `cert-${index}-${slug}`;

      // Unique 100-150 word SEO Intro text per template landing page
      const seoIntro = `Create a professional ${item.name} Certificate in minutes using our free ${cat.category} template. Specially designed for institutions, businesses, academies, and event organizers, this template features a ${item.desc.toLowerCase()} Customizing your award is simple: edit the recipient's name, certificate title, issuer organization, dates, and signee details live in your browser. With Blankform, there are no mandatory sign-ups, no hidden paywalls, and zero watermarks on exported files. All document rendering is performed client-side on your device for absolute privacy. Download your high-resolution PDF or PNG file instantly and print with complete confidence.`;

      list.push({
        id,
        slug,
        title: `${item.name} Certificate Template`,
        rawName: item.name,
        type: 'certificate',
        orientation: 'landscape',
        aspectRatio: 1.414,
        category: cat.category,
        description: item.desc,
        seoIntro,
        metaTitle: `${item.name} Certificate Template — Free & Printable | Blankform`,
        metaDescription: `Free ${item.name.toLowerCase()} certificate template. Customize recipient name, course, date, and signatures, then export high-res PDF or PNG instantly without signup.`,
        styling: {
          primaryColor: palette.primary,
          accentColor: palette.accent,
          fontHeading: font.heading,
          fontName: font.name,
          fontBody: font.body,
          borderStyle,
          isDark: item.name === 'Slate' || item.name === 'Constellation'
        },
        defaultFields: {
          issuerName: `${cat.category.toUpperCase()} ACADEMY`,
          certificateTitle: `CERTIFICATE OF ${item.name.toUpperCase()}`,
          subhead: 'THIS ACKNOWLEDGES THAT',
          recipientName: index % 2 === 0 ? 'Alexander Wright' : 'Sophia Chen',
          description: `Has successfully demonstrated excellence and satisfied all criteria for ${item.name} in accordance with official standards.`,
          date: 'September 4, 2026',
          signatory1Name: 'Dr. Eleanor Vance',
          signatory1Title: 'Director',
          signatory2Name: 'Marcus Sterling',
          signatory2Title: 'Dean of Faculty',
          certificateId: `CERT-2026-${1000 + index}`
        }
      });
    });
  });

  return list;
}

export function generate100Cvs() {
  const list = [];
  let index = 0;

  CV_SPECS.forEach(cat => {
    cat.items.forEach(item => {
      index++;
      const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const id = `cv-${index}-${slug}`;
      
      let layout = 'single-column';
      let hasColoredHeader = false;
      let hasPhoto = false;

      if (cat.category.includes('Two-Column') || item.name.includes('Sidebar') || item.name.includes('Panel')) {
        layout = 'two-column';
        hasColoredHeader = true;
      } else if (cat.category.includes('Creative') || item.name.includes('Header') || item.name.includes('Banner') || item.name.includes('Split')) {
        layout = 'photo-header-band';
        hasColoredHeader = true;
      }

      if (item.name.includes('Photo') || cat.category.includes('Creative') || index % 3 === 0) {
        hasPhoto = true;
      }

      // Unique 100-150 word SEO Intro text per CV template landing page
      const seoIntro = `Build an outstanding ${item.name} CV using our free ${cat.category} resume template. Tailored specifically for job seekers, executives, researchers, and students, this layout provides a ${item.desc.toLowerCase()} Designed with machine-readable formatting, it parses cleanly in Applicant Tracking Systems (ATS) while presenting a polished visual hierarchy to hiring managers. Personalize your contact information, career summary, work experience bullet points, education, and skills in real-time. Blankform requires no account registration and never stores your personal career data on external servers. Generate and download your print-ready PDF or PNG file instantly.`;

      list.push({
        id,
        slug,
        title: `${item.name} CV & Resume Template`,
        rawName: item.name,
        type: 'cv',
        orientation: 'portrait',
        aspectRatio: 0.707,
        category: cat.category,
        description: item.desc,
        seoIntro,
        metaTitle: `${item.name} Resume Template — Free Download | Blankform`,
        metaDescription: `Free ${item.name.toLowerCase()} resume template. ATS-friendly formatting, editable online without sign up. Export crisp vector PDF or PNG instantly.`,
        styling: {
          primaryColor: '#1C1D1F',
          accentColor: hasColoredHeader ? (index % 2 === 0 ? '#1E4A3D' : '#0F2C59') : '#5B5D63',
          fontHeading: cat.category.includes('Academic') ? "'Source Serif 4', serif" : cat.category.includes('Creative') ? "'Playfair Display', serif" : "'IBM Plex Sans', sans-serif",
          fontBody: "'IBM Plex Sans', sans-serif",
          layout,
          hasColoredHeader,
          sidebarBg: '#F0EFEA'
        },
        sections: ['contact', 'summary', 'experience', 'education', 'skills'],
        defaultFields: {
          fullName: index % 2 === 0 ? 'Sarah Jenkins' : 'Marcus Sterling',
          jobTitle: cat.category.includes('Technical') ? 'Senior Systems Engineer' : cat.category.includes('Academic') ? 'Associate Professor' : 'Senior Product Manager',
          email: index % 2 === 0 ? 'sarah.jenkins@example.com' : 'marcus.sterling@example.com',
          phone: '+1 (555) 234-5678',
          location: 'San Francisco, CA',
          website: 'portfolio.dev',
          linkedin: 'linkedin.com/in/profile',
          photoUrl: hasPhoto ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' : '',
          headerColor: index % 2 === 0 ? '#1E4A3D' : '#0F2C59',
          summary: 'Results-driven Senior Product Manager with 8+ years of experience leading cross-functional engineering, design, and marketing teams to build and scale enterprise SaaS applications.',
          experience: [
            {
              role: 'Lead Product Manager & Strategy Director',
              company: 'Vanguard Global Systems',
              period: '2023 — Present',
              details: 'Spearheaded product strategy for enterprise SaaS platform. Increased active user retention by 34%, led cross-functional team of 14 engineers, and launched 4 core feature modules.'
            },
            {
              role: 'Senior Product Specialist',
              company: 'Apex Software Solutions',
              period: '2020 — 2023',
              details: 'Managed core roadmap for cloud analytics tool. Scaled ARR from $2.1M to $4.8M while maintaining 99.2% customer satisfaction across 500+ corporate accounts.'
            },
            {
              role: 'Associate UX / Business Analyst',
              company: 'Meridian Digital Agency',
              period: '2018 — 2020',
              details: 'Conducted user research and wireframing for Fortune 500 clients. Reduced user onboarding drop-off by 22% through streamlined workflow design.'
            }
          ],
          education: [
            {
              degree: 'B.S. in Business Information Systems',
              institution: 'University of California, Berkeley',
              period: '2014 — 2018'
            }
          ],
          skills: 'Product Strategy & Vision\nUser Research & Usability\nAgile & Scrum Methodologies\nData Analytics & SQL\nRoadmapping & Prioritization\nExecutive Stakeholder Mgmt'
        }
      });
    });
  });

  return list;
}

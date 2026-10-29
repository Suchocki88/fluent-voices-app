/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from 'react';

// Existing signup form retained. Recommended new fields: genre, manuscript type,
// desired feedback, willingness to review, asynchronous/live preference, and
// comfort reviewing AI-assisted work. Update the form separately before launch.
const WAITLIST_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header';

/* ---------------------------------------------------------------
   Content
   --------------------------------------------------------------- */

const agenda = [
  { time: '01', item: 'Arrivals and introductions' },
  {
    time: '02',
    item: 'Each writer brings a craft question',
  },
  { time: '03', item: 'Open discussion and useful next steps' },
  { time: '04', item: 'Agree on a possible follow-up' },
];

const circle = {
  name: 'Beyond one-to-one exchanges',
  when: 'A possible future circle',
  time: 'Online · Timing to be decided',
  convener: 'Proposed format — not yet scheduled',
  seats: 'Six writers maximum',
};

const programBooks = [
  {
    src: '/images/UAIVol1Cover605.jpg',
    alt: 'Understanding and Working with AI, Volume 1: Foundations and Practice',
    title: 'Volume 1',
    subtitle: 'Foundations and Practice',
  },
  {
    src: '/images/UAIVol2Cover605.jpg',
    alt: 'Understanding and Working with AI, Volume 2: Society and the Future',
    title: 'Volume 2',
    subtitle: 'Society and the Future',
  },
];

const novels = [
  {
    src: '/images/ThresholdHi.jpg',
    alt: 'The Threshold, a novel by John Suchocki and Claude',
    title: 'The Threshold',
    subtitle: 'The Future of AI and Humanity',
  },
  {
    src: '/images/NeolithicHi.jpg',
    alt: 'The Neolithic, a novel by John Suchocki and Claude',
    title: 'The Neolithic',
    subtitle: 'Echoes of Our Origins',
  },
];

const tickerWords = [
  'Craft',
  'Human readers',
  'Trade',
  'Honest feedback',
  'Revisions',
  'Creative agency',
];

const stages = [
  {
    number: '01',
    title: 'Exchange a few pages',
    body: [
      'Start small: a scene, opening chapter, synopsis, pitch, or storyboard. Tell your reader what kind of feedback would help.',
      'We hope to introduce compatible writers for remote, asynchronous exchanges. Matches are not guaranteed; we are beginning with a small pilot.',
    ],
  },
  {
    number: '02',
    title: 'Give the kind of feedback you need',
    body: [
      'Tell the writer where you were drawn in, confused, unconvinced, or eager to continue. Specific, independent human reactions matter more than praise.',
      'Respect confidentiality. Never share another writer’s material or upload it to an AI service without explicit permission.',
    ],
  },
  {
    number: '03',
    title: 'Grow into a community',
    body: [
      'As more writers join, we hope to organize small online circles, conversations about craft and publishing, and eventually opportunities to connect finished books with readers.',
      'These are aspirations, not services already operating. Early participants will help shape what comes next.',
    ],
  },
];


export const siteContent = {
  hero: {
    title: 'HackerWare',
    eyebrow: 'Hack Club',
    subtitle:
      'Make daily microgames for a week, win a Nintendo Switch or Switch 2 game!'
  },
  prizeTimeline: {
    leftCopy:
      'For a couple hours each day, make a WarioWare-style "microgame" with:',
    bulletPoints: [
      'immediately understandable gameplay',
      'simple controls',
      'clear win/lose conditions'
    ],
    midpointLabel: 'A week later...',
    prizeTitle: 'Get a FREE Switch or Switch 2 game of your choice!*',
    prizeCaption: "*Game's U.S. MSRP must be $70 or below"
  },
  beginner: {
    heading: 'No experience? No problem!',
    paragraphs: [
      'Beginners will learn JavaScript through easy to follow guides and learn to make games in the intuitive KAPLAY web editor.',
      "At the end, you'll compile your games into a gauntlet and upload it to GitHub as your first open-source project!"
    ],
    closer:
      'Try some microgames others have made to the right, or see all submitted microgames in the gallery.'
  }
} as const;

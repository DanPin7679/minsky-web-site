export interface DocSection {
  id: number;
  link: string;
  title: string;
}

export const docSections: DocSection[] = [
  {
    id: 1,
    link: 'whatminsky',
    title: 'What is Minsky?',
  },
  {
    id: 2,
    link: 'interface',
    title: 'The Interface',
  },
  {
    id: 3,
    link: 'wires',
    title: 'Widgets and wires ',
  },
  {
    id: 4,
    link: 'math',
    title: 'Mathematical operators',
  },
  {
    id: 5,
    link: 'browser',
    title: 'The Browser Window',
  },
  {
    id: 6,
    link: 'godleytables',
    title: 'Godley Tables',
  },
  {
    id: 7,
    link: 'plots',
    title: 'Plots and sliders',
  },
  {
    id: 8,
    link: 'finflows',
    title: 'Integrated general models of financial flows',
  },
  {
    id: 9,
    link: 'flowchart',
    title: 'Flowchart modelling',
  },
  {
    id: 10,
    link: 'bookmarks',
    title: 'Organizing a model: Bookmarks',
  },
  {
    id: 11,
    link: 'groups',
    title: 'Organizing a model: Groups',
  },
  {
    id: 12,
    link: 'help',
    title: 'Getting Help',
  },
  {
    id: 13,
    link: 'helpingminsky',
    title: 'Helping Minsky',
  },
];

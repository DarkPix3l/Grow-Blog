export type HeaderLink = {
  label: string
  href: string
}

export const HEADER_LINKS: Record<string, HeaderLink[]> = {
  default: [
    { label: 'Home', href: '/#intro_section' },
    { label: 'Categories', href: '#categories_section' },
    { label: 'Mood', href: '/#mood-section' },
  ],

  article: [],
  //   dashboard:[
  //     {},
  // ],
}

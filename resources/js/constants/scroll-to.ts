export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Section with id '${sectionId}' not found`);
  }
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

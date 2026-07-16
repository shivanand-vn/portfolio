import Navbar, { type NavItem } from '../components/Navbar'
import Footer from '../components/Footer'
import Background from '../components/Background'
import { useTheme } from '../hooks/useTheme'
import HeroSection from '../sections/HeroSection'
import LogoMarquee from '../components/LogoMarquee'
import AboutSection from '../sections/AboutSection'
import StatsBanner from '../components/StatsBanner'
import SkillsSection from '../sections/SkillsSection'
import ProjectsSection from '../sections/ProjectsSection'
import ExperienceSection from '../sections/ExperienceSection'
import EducationSection from '../sections/EducationSection'
import CertificationsSection from '../sections/CertificationsSection'
import ContactSection from '../sections/ContactSection'

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function HomePage() {
  const { theme, toggle } = useTheme()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />

      <Navbar items={navItems} theme={theme} onToggleTheme={toggle} />

      <main>
        <HeroSection />
        <LogoMarquee />
        <AboutSection />
        
        <SkillsSection />

        <StatsBanner />
        
        <ProjectsSection />
        
        <ExperienceSection />
        
        <EducationSection />
        
        <CertificationsSection />
        
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}



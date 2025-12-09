import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#faf9f7]/98 backdrop-blur-md z-50 border-b border-[#2d5245]/10">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="../elements/maven_logo.png" 
              alt="知途 Maven Consulting" 
              className="h-10 md:h-12"
            />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-[#2d5245]/5 rounded-lg transition-colors text-[#2d5245]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#faf9f7] z-40 pt-24">
          <nav className="container mx-auto px-6 py-8">
            <ul className="space-y-8">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-3xl text-[#2d5245] hover:text-[#c85a54] transition-colors w-full text-left"
                >
                  首页
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-3xl text-[#2d5245] hover:text-[#c85a54] transition-colors w-full text-left"
                >
                  服务项目
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-3xl text-[#2d5245] hover:text-[#c85a54] transition-colors w-full text-left"
                >
                  关于我们
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="text-3xl text-[#2d5245] hover:text-[#c85a54] transition-colors w-full text-left"
                >
                  为什么选择我们
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-3xl text-[#2d5245] hover:text-[#c85a54] transition-colors w-full text-left"
                >
                  联系我们
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
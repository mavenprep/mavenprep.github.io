import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Elegant Background with Texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f7] via-[#f5f3f0] to-[#ede9e4]"></div>
        {/* Subtle Rice Paper Texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d5245' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12 animate-fadeInUp">
            <img 
              src="/elements/maven_logo.png" 
              alt="知途 Maven Consulting" 
              className="h-32 md:h-44 mx-auto"
            />
          </div>
          
          {/* Decorative Line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c85a54] to-transparent mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.1s' }}></div>
          
          <h1 className="text-[#2d5245] mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            见微知著，护梦渡途
          </h1>
          
          <p className="text-xl md:text-2xl text-[#2d5245]/80 mb-6 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            八年专业经验，值得信赖的教育与移民伙伴
          </p>
          
          <p className="text-lg text-[#6b6b6b] mb-12 leading-relaxed max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            为每一位客户量身定制方案，提供专业指导与贴心服务<br/>
            助您自信开启海外新篇章
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 bg-[#2d5245] text-white rounded-md hover:bg-[#234136] transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              预约咨询
            </button>
            <button
              onClick={scrollToServices}
              className="px-10 py-4 bg-transparent text-[#2d5245] border-2 border-[#2d5245] rounded-md hover:bg-[#2d5245]/5 transition-all active:scale-95"
            >
              了解服务
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} className="text-[#2d5245]/60" />
        </button>
      </div>
    </section>
  );
}

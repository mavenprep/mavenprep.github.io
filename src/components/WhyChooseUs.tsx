import { Users, Award, Target, Shield, TrendingUp, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '八年专业经验',
    description: '自2017年成立以来，我们专注于海外教育与移民咨询，积累了丰富的行业经验和成功案例。'
  },
  {
    icon: Target,
    title: '个性化定制',
    description: '深入了解每位客户的独特需求，制定最适合的方案，而非套用标准模板。'
  },
  {
    icon: Shield,
    title: '专业团队支持',
    description: '资深顾问团队，与海外院校、律所紧密合作，为您的申请提供全方位保障。'
  },
  {
    icon: Users,
    title: '贴心全程服务',
    description: '从咨询到落地，我们提供完整的服务支持，及时响应您的需求和疑问。'
  },
  {
    icon: TrendingUp,
    title: '优秀成功记录',
    description: '帮助众多客户成功实现留学和移民目标，获得客户的信任与推荐。'
  },
  {
    icon: MessageCircle,
    title: '透明沟通',
    description: '保持开放、真诚的沟通，让您清楚了解每个阶段的进展和安排。'
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="text-sm tracking-[0.3em] text-[#c85a54] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-[#2d5245] mb-6 decorative-line inline-block">
              为什么选择知途
            </h2>
            <p className="text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed mt-8">
              专业能力与用心服务，助您实现目标
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#faf9f7] to-white border border-[#2d5245]/10 p-8 rounded-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 border-2 border-[#2d5245] rounded-sm flex items-center justify-center mb-5">
                    <Icon className="text-[#2d5245]" size={24} />
                  </div>
                  <h3 className="text-[#2d5245] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quote Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#2d5245] to-[#1e3a2e] rounded-sm p-12 md:p-16 shadow-2xl relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="w-16 h-0.5 bg-[#c85a54] mx-auto mb-8"></div>
                <p className="text-white text-xl md:text-2xl mb-6 leading-relaxed">
                  "以专业为本，用心服务每一位客户<br className="hidden md:block"/>是我们始终坚持的理念"
                </p>
                <p className="text-white/70 text-sm tracking-wide">
                  —— 知途教育咨询
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-[#2d5245] mb-6">
              准备好开启您的海外之旅了吗？
            </h3>
            <p className="text-[#6b6b6b] mb-10 leading-relaxed max-w-2xl mx-auto">
              联系我们，获得专业的咨询服务
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-12 py-4 bg-[#c85a54] text-white rounded-md hover:bg-[#b34d47] transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              立即咨询
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

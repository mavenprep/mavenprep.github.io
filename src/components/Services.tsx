import { GraduationCap, FileText, Plane, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: '留学规划',
    subtitle: 'Study Abroad Planning',
    headline: '个性化定制，专业化指导',
    description: '每个学生都有独特的背景和目标。我们深入了解学生的特点，制定最适合的留学方案，从院校选择到申请递交，提供全程专业支持。',
    features: [
      '深度评估学生背景与目标',
      '定制个性化留学方案',
      '专业文书指导与优化',
      '院校申请全程跟进',
      '录取后续服务支持'
    ],
    color: '#2d5245'
  },
  {
    icon: FileText,
    title: '签证服务',
    subtitle: 'Visa Application Services',
    headline: '专业流程，细致把关',
    description: '签证申请流程复杂，我们凭借丰富经验，为您梳理每个环节，准备完善材料，提供专业培训，让您充分准备、从容应对。',
    features: [
      '签证类型评估与建议',
      '完整材料清单与指导',
      '申请表格专业协助',
      '面签培训与准备',
      '拒签分析与应对方案'
    ],
    color: '#8a6d3b'
  },
  {
    icon: Plane,
    title: '投资移民',
    subtitle: 'Investment Immigration',
    headline: '审慎规划，稳健推进',
    description: '移民是重要的家庭决策。我们以专业的视角，为您筛选优质项目，评估风险，提供全流程服务，确保每一步都稳妥可靠。',
    features: [
      '项目评估与风险分析',
      '投资方案定制规划',
      '移民申请专业支持',
      '律师团队协作服务',
      '后续安置协助'
    ],
    color: '#c85a54'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-[#faf9f7] to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-[#c85a54] uppercase">Our Services</span>
          </div>
          <h2 className="text-[#2d5245] mb-6 decorative-line inline-block">
            专业全面的服务体系
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed mt-8">
            提供一站式海外教育与移民解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="group bg-white border border-[#2d5245]/10 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Header */}
                <div className="p-8 border-b border-[#2d5245]/10 bg-gradient-to-br from-[#faf9f7] to-white">
                  <div className="w-14 h-14 border-2 rounded-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ borderColor: service.color }}>
                    <Icon size={28} style={{ color: service.color }} />
                  </div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: service.color }}>
                    {service.subtitle}
                  </p>
                  <h3 className="text-[#2d5245] mb-3">
                    {service.title}
                  </h3>
                  <h4 className="text-[#2d5245]/90 text-sm mb-4">
                    {service.headline}
                  </h4>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={16} className="mt-1 flex-shrink-0" style={{ color: service.color }} />
                        <span className="text-[#2d5245]/90 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

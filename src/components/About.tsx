import { Heart, Users, MessageCircle, Coffee } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="text-sm tracking-[0.3em] text-[#c85a54] uppercase">Who We Are</span>
            </div>
            <h2 className="text-[#2d5245] mb-6 decorative-line inline-block">
              我们不只是顾问<br className="sm:hidden"/>更是您在海外的"家里人"
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1764173039752-0a09d6b04337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwY29mZmVlJTIwbWVldGluZyUyMGZyaWVuZHMlMjBjYXN1YWx8ZW58MXx8fHwxNzY1MjAzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Warm consultation atmosphere"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d5245]/30 to-transparent"></div>
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-sm shadow-2xl p-8 max-w-xs border border-[#2d5245]/10">
                <Heart className="text-[#c85a54] mb-3" size={28} fill="#c85a54" />
                <p className="text-sm text-[#2d5245] leading-relaxed italic">
                  "亦师亦友的专业与温情"
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-[#6b6b6b] leading-relaxed">
                <p>
                  在知途 (Maven Consulting)，我们相信教育和移民咨询不应是冰冷的商业交易。
                </p>
                <p>
                  即使拥有八年的专业积淀，我们最珍视的，依然是与每一位客户建立的深厚情谊。无论是为了孩子的择校焦虑，还是对海外生活的未知担忧，我们都在这里随时倾听。
                </p>
                <p>
                  我们不仅关注您的申请结果，更在乎您的感受。从第一次见面喝茶聊天，到落地后的接机安顿，我们始终保持着<span className="text-[#2d5245]">**"亦师亦友"**</span>的专业界限与温情。
                </p>
                <p className="text-[#2d5245]">
                  我们希望能成为您信任的朋友，陪您走过这段重要的人生旅程。
                </p>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#faf9f7] to-white border border-[#2d5245]/10 p-8 rounded-sm text-center hover:shadow-lg transition-all">
              <Heart className="mx-auto mb-4 text-[#c85a54]" size={32} fill="#c85a54" />
              <h4 className="text-[#2d5245] mb-2">真诚关怀</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">用心倾听每一个故事</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#faf9f7] to-white border border-[#2d5245]/10 p-8 rounded-sm text-center hover:shadow-lg transition-all">
              <Users className="mx-auto mb-4 text-[#2d5245]" size={32} />
              <h4 className="text-[#2d5245] mb-2">亦师亦友</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">专业与温情并存</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#faf9f7] to-white border border-[#2d5245]/10 p-8 rounded-sm text-center hover:shadow-lg transition-all">
              <Coffee className="mx-auto mb-4 text-[#8a6d3b]" size={32} />
              <h4 className="text-[#2d5245] mb-2">轻松氛围</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">在餐桌旁探讨未来</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#faf9f7] to-white border border-[#2d5245]/10 p-8 rounded-sm text-center hover:shadow-lg transition-all">
              <MessageCircle className="mx-auto mb-4 text-[#2d5245]" size={32} />
              <h4 className="text-[#2d5245] mb-2">全程陪伴</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">从咨询到落地安顿</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

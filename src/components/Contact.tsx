import { Mail, MessageCircle, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-[#faf9f7] to-[#f5f3f0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-4">
            <span className="text-sm tracking-[0.3em] text-[#c85a54] uppercase">Contact Us</span>
          </div>
          <h2 className="text-[#2d5245] mb-6 decorative-line inline-block">
            联系我们
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed mt-8">
            填写表单或通过以下方式联系我们，专业顾问将在24小时内与您取得联系
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#2d5245] to-[#1e3a2e] rounded-sm p-10 text-white h-full relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>

              <div className="relative z-10">
                <h3 className="text-white mb-10">联系方式</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={22} />
                    </div>
                    <div>
                      <p className="mb-2">微信咨询</p>
                      <p className="text-sm text-white/70 leading-relaxed">添加微信：zhitu_edu<br/>快速获得咨询服务</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="mb-2">电话咨询</p>
                      <p className="text-sm text-white/70 leading-relaxed">+86 138 0000 0000<br/>工作日 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="mb-2">邮件咨询</p>
                      <p className="text-sm text-white/70 leading-relaxed">info@zhitu-edu.com<br/>24小时内回复</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="mb-2">办公地址</p>
                      <p className="text-sm text-white/70 leading-relaxed">中国大陆多个城市设有办公室<br/>可预约线下咨询</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-sm text-white/60 leading-relaxed">
                    我们承诺保护您的隐私信息，所有咨询内容将严格保密
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-[#2d5245]/10 rounded-sm p-10">
              <h3 className="text-[#2d5245] mb-8">在线咨询表单</h3>
              
              {submitted ? (
                <div className="bg-[#2d5245]/5 border border-[#2d5245]/20 rounded-sm p-10 text-center">
                  <div className="w-16 h-16 bg-[#2d5245]/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <Send className="text-[#2d5245]" size={32} />
                  </div>
                  <h4 className="text-[#2d5245] mb-3">提交成功！</h4>
                  <p className="text-sm text-[#6b6b6b]">我们的顾问将尽快与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#2d5245] mb-3">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-[#2d5245]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2d5245]/30 focus:border-[#2d5245] bg-[#faf9f7]/30"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-[#2d5245] mb-3">
                      联系电话 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-[#2d5245]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2d5245]/30 focus:border-[#2d5245] bg-[#faf9f7]/30"
                      placeholder="请输入您的手机号码"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-[#2d5245] mb-3">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-[#2d5245]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2d5245]/30 focus:border-[#2d5245] bg-[#faf9f7]/30"
                      placeholder="请输入您的邮箱（选填）"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm text-[#2d5245] mb-3">
                      咨询服务 *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-[#2d5245]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2d5245]/30 focus:border-[#2d5245] bg-[#faf9f7]/30"
                    >
                      <option value="">请选择服务类型</option>
                      <option value="study">留学规划</option>
                      <option value="visa">签证服务</option>
                      <option value="immigration">投资移民</option>
                      <option value="other">其他咨询</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-[#2d5245] mb-3">
                      咨询内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-5 py-3 border border-[#2d5245]/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2d5245]/30 focus:border-[#2d5245] resize-none bg-[#faf9f7]/30"
                      placeholder="请简要描述您的需求和问题..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#2d5245] text-white rounded-md hover:bg-[#234136] transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    <Send size={20} />
                    提交咨询
                  </button>

                  <p className="text-xs text-[#6b6b6b] text-center leading-relaxed">
                    提交即表示您同意我们的隐私政策
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-[#2d5245]/10 text-center">
          <div className="flex items-center justify-center mb-6">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer"
          >
            <img 
              src="../elements/maven_logo.png" 
              alt="知途 Maven Consulting" 
              className="h-16"
            />
          </button>
          </div>
          <p className="text-sm text-[#6b6b6b] mb-3">
            专注海外教育与移民服务 · 八年专业经验
          </p>
          <p className="text-sm text-[#6b6b6b]/70">
            © 2025 知途教育咨询 Maven Consulting. 保留所有权利
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Scissors, Clock, MapPin, Phone, Mail, Instagram, Baby } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2D2926]" style={{ fontFamily: "'Noto Serif JP', serif" }}>

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560069002-5c1028f6c8b2?w=1920&h=1080&fit=crop"
            alt="サロン内観"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/70 via-[#1a1410]/20 to-transparent" />
        </div>

        <div className="relative z-10 px-8 md:px-16 max-w-3xl">
          <p className="text-[#D4B896] text-sm tracking-[0.25em] mb-4 uppercase">
            Mizunomori Salon
          </p>
          <h1 className="text-white text-4xl md:text-6xl leading-tight mb-6" style={{ fontWeight: 400 }}>
            ただいま、と<br />言いたくなる<br />美容室。
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            靴を脱いで、ゆっくりどうぞ。<br />
            キッズスペースもあるので、お子さま連れでも気兼ねなく。
          </p>
        </div>
      </section>

      {/* ===== CONCEPT ===== */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <p className="text-[#A0866A] text-xs tracking-[0.3em] uppercase mb-12">Concept</p>

        <div className="grid md:grid-cols-3 gap-12">

          {/* コンセプト1 */}
          <div className="border-t border-[#D4C5B0] pt-8">
            <div className="w-8 h-8 rounded-full bg-[#E8E0D5] flex items-center justify-center mb-6">
              <span className="text-[#A0866A] text-sm">01</span>
            </div>
            <h3 className="text-lg mb-4" style={{ fontWeight: 400 }}>木のぬくもりに<br />包まれた空間</h3>
            <p className="text-[#6B5E52] text-sm leading-relaxed">
              古い梁や床板を活かした、居心地のいいサロン。
              気取らず、ありのままでいられる場所です。
            </p>
          </div>

          {/* コンセプト2 */}
          <div className="border-t border-[#D4C5B0] pt-8">
            <div className="w-8 h-8 rounded-full bg-[#E8E0D5] flex items-center justify-center mb-6">
              <span className="text-[#A0866A] text-sm">02</span>
            </div>
            <h3 className="text-lg mb-4" style={{ fontWeight: 400 }}>おあがりください。</h3>
            <p className="text-[#6B5E52] text-sm leading-relaxed">
              玄関で靴を脱いで、ほっとひと息。
              近所のお友だちの家に来るような、そんな気軽さで。
            </p>
          </div>

          {/* コンセプト3 */}
          <div className="border-t border-[#D4C5B0] pt-8">
            <div className="w-8 h-8 rounded-full bg-[#E8E0D5] flex items-center justify-center mb-6">
              <Baby size={16} className="text-[#A0866A]" />
            </div>
            <h3 className="text-lg mb-4" style={{ fontWeight: 400 }}>お子さまとご一緒に</h3>
            <p className="text-[#6B5E52] text-sm leading-relaxed">
              キッズスペースをご用意しています。
              施術中もお子さまに安心して遊んでいただけます。
              地域のママ友とのんびり過ごす場所としても、ぜひ。
            </p>
          </div>

        </div>
      </section>

      {/* ===== IMAGE BREAK ===== */}
      <section className="h-64 md:h-96 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589939705484-561c92118939?w=1920&h=600&fit=crop"
          alt="サロン内観2"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1410]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl md:text-3xl tracking-widest" style={{ fontWeight: 300 }}>
            街の中の、居場所みたいな美容室。
          </p>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <p className="text-[#A0866A] text-xs tracking-[0.3em] uppercase mb-12">Menu</p>

        <div className="grid md:grid-cols-2 gap-px bg-[#D4C5B0]">

          <div className="bg-[#FAF8F5] p-10">
            <div className="flex items-center gap-2 mb-8">
              <Scissors size={16} className="text-[#A0866A]" />
              <span className="text-[#A0866A] text-sm tracking-widest">Cut</span>
            </div>
            <ul className="space-y-5">
              <li className="flex justify-between items-baseline border-b border-[#EDE6DC] pb-4">
                <span className="text-sm">大人カット</span>
                <span className="text-[#6B5E52] text-sm">¥6,500</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-[#EDE6DC] pb-4">
                <span className="text-sm">中学生以下</span>
                <span className="text-[#6B5E52] text-sm">¥4,500</span>
              </li>
              <li className="flex justify-between items-baseline">
                <span className="text-sm">前髪のみ</span>
                <span className="text-[#6B5E52] text-sm">¥1,000</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-10">
            <div className="flex items-center gap-2 mb-8">
              <Scissors size={16} className="text-[#A0866A]" />
              <span className="text-[#A0866A] text-sm tracking-widest">Perm / Color / Spa</span>
            </div>
            <ul className="space-y-5">
              <li className="flex justify-between items-baseline border-b border-[#EDE6DC] pb-4">
                <span className="text-sm">パーマ</span>
                <span className="text-[#6B5E52] text-sm">¥8,000〜</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-[#EDE6DC] pb-4">
                <span className="text-sm">カラー</span>
                <span className="text-[#6B5E52] text-sm">¥7,000〜</span>
              </li>
              <li className="flex justify-between items-baseline">
                <span className="text-sm">ヘッドスパ</span>
                <span className="text-[#6B5E52] text-sm">¥4,000</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== ACCESS ===== */}
      <section className="bg-[#F0EAE0] py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#A0866A] text-xs tracking-[0.3em] uppercase mb-12">Access</p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="aspect-video bg-[#DDD5C8] rounded overflow-hidden relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                  alt="地図"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 地域の方へのメッセージ */}
              <div className="bg-white/60 rounded p-6 border border-[#D4C5B0]">
                <p className="text-[#2D2926] text-base leading-relaxed mb-2">
                  近くに住んでいるなら、ふらっとどうぞ。
                </p>
                <p className="text-[#6B5E52] text-sm leading-relaxed">
                  お散歩ついでに、ちょっと立ち寄るような感覚で来てもらえたら嬉しいです。
                  ご予約なしでもお気軽にご相談ください。
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={14} className="text-[#A0866A]" />
                  <span className="text-[#A0866A] text-xs tracking-widest uppercase">Address</span>
                </div>
                <p className="text-sm text-[#6B5E52] leading-loose">
                  〒980-0835<br />
                  宮城県仙台市青葉区水の森1丁目12－2
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-[#A0866A]" />
                  <span className="text-[#A0866A] text-xs tracking-widest uppercase">Hours</span>
                </div>
                <ul className="text-sm text-[#6B5E52] space-y-1">
                  <li>火〜土　10:00 – 19:00</li>
                  <li className="text-[#A0866A]">日・月　定休日</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={14} className="text-[#A0866A]" />
                  <span className="text-[#A0866A] text-xs tracking-widest uppercase">Contact</span>
                </div>
                <ul className="text-sm text-[#6B5E52] space-y-2">
                  <li>XX-XXXX-XXXX</li>
                  <li className="flex items-center gap-2">
                    <Mail size={12} className="text-[#A0866A]" />
                    info@kominka-salon.jp
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram size={12} className="text-[#A0866A]" />
                    @kominka_salon
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2D2926] text-white/50 py-10 px-8 text-center">
        <p className="text-white/80 mb-2 tracking-widest text-sm">Mizunomori Salon</p>
        <p className="text-xs">© 2024 Mizunomori Salon. All rights reserved.</p>
      </footer>

    </main>
  );
}

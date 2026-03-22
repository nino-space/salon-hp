import Image from 'next/image'
import { Phone, MapPin, Clock, Mail, Instagram, Scissors, Home as HomeIcon, Sparkles } from 'lucide-react'
import { FaCut, FaHome, FaSpa } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen kominka-bg">
      {/* Header */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560069002-5c1028f6c8b2?w=1920&h=1080&fit=crop"
            alt="古民家美容室"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">美容室（仮）</h1>
          <p className="text-xl md:text-2xl mb-8">古民家でくつろぎの時間を</p>
          <p className="text-lg md:text-xl max-w-2xl">
            靴を脱いで上がってください。<br />
            100年以上の歴史を持つ古民家で、<br />
            心も体も癒されるひとときをお過ごしください。
          </p>
        </div>
      </header>

      {/* Concept Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold kominka-text mb-8">コンセプト</h2>
          
          {/* イラストセクション */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-kominka-light rounded-full flex items-center justify-center mb-3">
                  <FaHome className="w-10 h-10 kominka-accent" />
                </div>
                <p className="kominka-text text-sm">古民家</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-kominka-light rounded-full flex items-center justify-center mb-3">
                  <FaCut className="w-10 h-10 kominka-accent" />
                </div>
                <p className="kominka-text text-sm">美容</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-kominka-light rounded-full flex items-center justify-center mb-3">
                  <FaSpa className="w-10 h-10 kominka-accent" />
                </div>
                <p className="kominka-text text-sm">リラックス</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold kominka-accent mb-4 flex items-center">
                <HomeIcon className="mr-2" />
                古民家の温もり
              </h3>
              <p className="kominka-text leading-relaxed mb-6">
                100年以上前の古民家を改装した美容室。<br />
                畳の上でくつろぎながら、ゆったりとした時間の中で<br />
                最高のリラックス体験をお届けします。
              </p>
              <h3 className="text-2xl font-semibold kominka-accent mb-4 flex items-center">
                <Sparkles className="mr-2" />
                靴を脱ぐ美容室
              </h3>
              <p className="kominka-text leading-relaxed">
                外の世界を忘れ、心からリラックスできる空間。<br />
                靴を脱いで上がることで、日常から離れた特別な時間が始まります。
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589939705484-561c92118939?w=600&h=400&fit=crop"
                alt="古民家インテリア"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-kominka-light/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold kominka-text text-center mb-12">メニュー</h2>
          
          {/* メニューアイコン */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-kominka-light rounded-full flex items-center justify-center mb-3">
                  <Scissors className="w-8 h-8 kominka-accent" />
                </div>
                <p className="kominka-text">カット</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-kominka-light rounded-full flex items-center justify-center mb-3">
                  <Sparkles className="w-8 h-8 kominka-accent" />
                </div>
                <p className="kominka-text">パーマ・カラー</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold kominka-accent mb-6 flex items-center">
                <Scissors className="mr-2" />
                カット
              </h3>
              <ul className="space-y-4 kominka-text">
                <li className="flex justify-between">
                  <span>大人カット</span>
                  <span className="font-semibold">¥6,500</span>
                </li>
                <li className="flex justify-between">
                  <span>中学生以下</span>
                  <span className="font-semibold">¥4,500</span>
                </li>
                <li className="flex justify-between">
                  <span>前髪のみ</span>
                  <span className="font-semibold">¥1,000</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/80 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold kominka-accent mb-6 flex items-center">
                <Sparkles className="mr-2" />
                パーマ・カラー
              </h3>
              <ul className="space-y-4 kominka-text">
                <li className="flex justify-between">
                  <span>パーマ</span>
                  <span className="font-semibold">¥8,000〜</span>
                </li>
                <li className="flex justify-between">
                  <span>カラー</span>
                  <span className="font-semibold">¥7,000〜</span>
                </li>
                <li className="flex justify-between">
                  <span>ヘッドスパ</span>
                  <span className="font-semibold">¥4,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold kominka-text text-center mb-12">アクセス</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/80 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold kominka-accent mb-6 flex items-center">
                  <MapPin className="mr-2" />
                  住所
                </h3>
                <p className="kominka-text mb-4">〒980-0835</p>
                <p className="kominka-text mb-6">宮城県仙台市青葉区水の森1丁目12－2</p>
                
                <h3 className="text-2xl font-semibold kominka-accent mb-6 flex items-center">
                  <Clock className="mr-2" />
                  営業時間
                </h3>
                <ul className="kominka-text space-y-2">
                  <li>火曜日〜土曜日: 10:00〜19:00</li>
                  <li>日曜日・月曜日: 定休日</li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.6657286!2d140.8499!3d38.2587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a1e5d5f5f5f5f%3A0x5f8a1e5d5f5f5f5f!2z5aSp5bGx5biC5bGx5Y2D5Yy65aSp5bGx5biC!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-kominka-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold kominka-text mb-12">ご予約・お問い合わせ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 kominka-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold kominka-text mb-2">お電話</h3>
              <p className="kominka-accent text-2xl font-bold">XX-XXXX-XXXX</p>
            </div>
            <div className="bg-white/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 kominka-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold kominka-text mb-2">メール</h3>
              <p className="kominka-accent">info@kominka-salon.jp</p>
            </div>
            <div className="bg-white/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Instagram className="w-12 h-12 kominka-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold kominka-text mb-2">Instagram</h3>
              <p className="kominka-accent">@kominka_salon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kominka-dark text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">美容室（仮）</p>
          <p className="text-sm opacity-80">
            © 2024 Kominka Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

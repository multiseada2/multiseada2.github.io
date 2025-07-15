import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Instagram, Facebook } from 'lucide-react'
import './App.css'

// Import assets
import swordLogo from './assets/cross_knights_sword_logo.png'
import heroVideo from './assets/Loopcrooscruzbackgroundfundotela(1).mp4'
import instagramIcon from './assets/cross_knights_instagram_icon.png'
import facebookIcon from './assets/cross_knights_facebook_icon.png'
import tiktokIcon from './assets/cross_knights_tiktok_icon.png'

function App() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => setShowContent(true), 500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in-up')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [showContent])

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-swords pulse-glow">
          <img src={swordLogo} alt="Cross Knights Loading" />
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
        
        <div className="hero-content text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <img src={swordLogo} alt="Cross Knights" className="w-16 h-16 mr-4 flame-flicker" />
            <h1 className="font-logo text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              CROSS KNIGHTS
            </h1>
          </div>
          
          <p className="font-medieval text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Cavaleiros Templários em busca de Cristo.<br />
            Roupas fitness para guerreiros modernos.
          </p>
          
          <Button className="btn-primary text-lg px-8 py-4" onClick={() => window.open('https://shopee.com.br/search?keyword=cross%20knights', '_blank')}>
            <ExternalLink className="mr-2 h-5 w-5" />
            Ver Produtos na Shopee
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-logo text-3xl md:text-5xl font-bold text-white mb-4">
              Nossa Coleção
            </h2>
            <p className="font-medieval text-lg text-gray-400 max-w-2xl mx-auto">
              Camisetas fitness inspiradas na força e determinação dos Cavaleiros Templários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="product-card bg-card rounded-lg p-6 fade-in-up">
              <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <img src={swordLogo} alt="Camiseta Cross Knights" className="w-20 h-20 opacity-50" />
              </div>
              <h3 className="font-medieval text-xl font-semibold text-white mb-2">
                Camiseta Templária Preta
              </h3>
              <p className="text-gray-400 mb-4">
                Design exclusivo com espadas cruzadas em vermelho
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">R$ 89,90</span>
                <Button className="btn-primary" onClick={() => window.open('https://shopee.com.br/search?keyword=cross%20knights%20camiseta%20templaria', '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Comprar
                </Button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="product-card bg-card rounded-lg p-6 fade-in-up">
              <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <img src={swordLogo} alt="Camiseta Cross Knights" className="w-20 h-20 opacity-50" />
              </div>
              <h3 className="font-medieval text-xl font-semibold text-white mb-2">
                Camiseta Warrior Edition
              </h3>
              <p className="text-gray-400 mb-4">
                Edição limitada com detalhes flamejantes
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">R$ 99,90</span>
                <Button className="btn-primary" onClick={() => window.open('https://shopee.com.br/search?keyword=cross%20knights%20warrior%20edition', '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Comprar
                </Button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="product-card bg-card rounded-lg p-6 fade-in-up">
              <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <img src={swordLogo} alt="Camiseta Cross Knights" className="w-20 h-20 opacity-50" />
              </div>
              <h3 className="font-medieval text-xl font-semibold text-white mb-2">
                Camiseta Knight's Honor
              </h3>
              <p className="text-gray-400 mb-4">
                Para treinos intensos com estilo medieval
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">R$ 94,90</span>
                <Button className="btn-primary" onClick={() => window.open('https://shopee.com.br/search?keyword=cross%20knights%20honor', '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up">
            <img src={swordLogo} alt="Cross Knights" className="w-24 h-24 mx-auto mb-8 flame-flicker" />
            <h2 className="font-logo text-3xl md:text-5xl font-bold text-white mb-8">
              A Jornada dos Cavaleiros
            </h2>
            <p className="font-medieval text-lg text-gray-300 leading-relaxed mb-8">
              Inspirados pela força, honra e determinação dos Cavaleiros Templários, 
              a CROSS KNIGHTS traz para o mundo fitness uma nova perspectiva de treino. 
              Nossas roupas não são apenas peças de vestuário, são armaduras modernas 
              para guerreiros que buscam superar seus limites em busca da excelência.
            </p>
            <p className="font-medieval text-lg text-gray-300 leading-relaxed">
              Cada peça carrega o símbolo das espadas cruzadas, representando a nova cruz 
              templária da marca, com significado espiritual e combativo para aqueles que 
              escolhem o caminho da disciplina e da superação.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <img src={swordLogo} alt="Cross Knights" className="w-12 h-12 mr-3" />
              <div>
                <h3 className="font-logo text-2xl font-bold text-white">CROSS KNIGHTS</h3>
                <p className="font-medieval text-gray-400">Cavaleiros Templários Modernos</p>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://instagram.com/crossknights" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://facebook.com/crossknights" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://tiktok.com/@crossknights" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="font-medieval text-gray-400">
              © 2024 Cross Knights. Todos os direitos reservados. | 
              <span className="text-primary"> Em busca de Cristo através do fitness</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


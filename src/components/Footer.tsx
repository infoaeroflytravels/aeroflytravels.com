import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook,  Instagram, Linkedin, MessageSquareMore } from 'lucide-react';
import logooo from "../assets/img/logof.png";
import paymentIcons1 from "../assets/logo/iaai.svg"; // <-- your file
import paymentIcons2 from "../assets/logo/iata.svg" // <-- your file
import paymentIcons3 from "../assets/logo/iato.svg"; // <-- your file
import paymentIcons4 from "../assets/logo/ADTOI.svg"; // <-- your file
import paymentIcons5 from "../assets/logo/taai.svg"; // <-- your file


export function Footer() {
  return (
    <footer className="bg-gray-900 text-Yellow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
           <div className="h-20 w-52 mb-4 flex items-center justify-center rounded-lg shadow" style={{ backgroundColor: '#ffffffff' }}>
              <img 
                src={logooo}
                alt="Aerofly Travels"
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold" style={{ color: '#00d0dfff' }}>Aerofly Travels</h3>
            <p className="text-gray-300 mt-2 text-base">
              Your trusted partner for flights, visas, and unforgettable travel experiences.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/people/Aero-Fly/61566387902302/" className="text-gray-400 hover:text-Yellow-400 transition" style={{ color: '#00d0dfff' }}>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/aeroflyytravels/"className="text-gray-400 hover:text-Yellow-400 transition" style={{ color: '#00d0dfff' }}>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/aerofly-travels/" className="text-gray-400 hover:text-Yellow-400 transition" style={{ color: '#00d0dfff' }}>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919899753663" className="text-gray-400 hover:text-Yellow-400 transition" style={{ color: '#00d0dfff' }}>
                <MessageSquareMore className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#00d0dfff' }}>Company</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/about" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Contact us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Career With us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Our Blogs</Link></li>
              <li><Link to="/forums" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Forums</Link></li>
            </ul>
          </div>
          {/* Weekend Trips */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-Yellow-400"style={{ color: '#00d0dfff' }}>Weekend Trips</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Vrindavan</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Agra</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">KhatuShyam</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Chopta Tungnath</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Manali Sissu Kasol</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Jibhi & Tirthan Valley</Link></li>
            
            </ul>
          </div>
          {/* International Trips*/}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-Yellow-400"style={{ color: '#00d0dfff' }}>International Trips</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Vietnam</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Thailand</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Kazakhstan</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Bali </Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Dubai</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Bhutan</Link></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-Yellow-400"style={{ color: '#00d0dfff' }}>Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/privacy" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Frequently Asked Questions</Link></li>
              </ul>
          </div>

          {/* Backpacking Trips*/}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-Yellow-400"style={{ color: '#00d0dfff' }}>Backpacking Trips</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Spiti Valley</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Leh & Ladakh</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Himachal Backpacking</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Meghalaya</Link></li>
            </ul>
          </div>


          {/* Domestic Trips */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-Yellow-400"style={{ color: '#00d0dfff' }}>Domestic Trips</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Himachal</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Kashmir</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Kerala</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Rajasthan</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-Yellow-400 transitionstyle={{ color: '#00d0dfff' }}">Uttarakhand</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-Yellow-400"style={{ color: '#00d0dfff' }}>Contact Us</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2 text-Yellow-400" />
                <span>+91 9899753663</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-Yellow-400" />
                <a href="mailto:aerofly.del@outlook.com" className="hover:underline">
                  info.aeroflytravels@gmail.com
                  </a>
                </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-Yellow-400" />
                <a href="mailto:aerofly.del@outlook.com" className="hover:underline">
                  aerofly.del@outlook.com
                  </a>
                </li>
              
              <li className="flex items-center text-gray-300">
  <MapPin className="h-5 w-5 mr-2 text-Yellow-400" />
  <a
    href="https://maps.app.goo.gl/uBiYufqpBTQHpQsBA"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Kartar Nagar, Delhi, India
  </a>
</li>

            </ul>
          </div>
        </div>
         {/* Google Map */}
  <div className="mt-4 md:mt-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d218.7519386211528!2d77.2578069521109!3d28.68871873257499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d28.6885586!2d77.25800029999999!5e0!3m2!1sen!2sin!4v1755248960092!5m2!1sen!2sin"
      width="300"
      height="200"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>


       {/* Payment Methods */}
<div className="flex justify-center items-center gap-6 mt-10">
  <img 
    src={paymentIcons1} 
    alt="Payment Method 1" 
    className="h-10 object-contain"
  />
  <img 
    src={paymentIcons2} 
    alt="Payment Method 2" 
    className="h-10 object-contain"
  />
  <img 
    src={paymentIcons3} 
    alt="Payment Method 3" 
    className="h-10 object-contain"
  />
  <img 
    src={paymentIcons4} 
    alt="Payment Method 4" 
    className="h-10 object-contain"
  />

<img 
    src={paymentIcons5} 
    alt="Payment Method 4" 
    className="h-10 object-contain"
  />
</div>



        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Aerofly Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

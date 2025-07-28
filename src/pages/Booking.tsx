import React, { useState, useEffect } from "react";
import { Calendar, Users, Phone, Mail, User, MapPin, Star, Wifi, Car, Coffee, Utensils, Waves, Dumbbell, ChevronLeft, ChevronRight, Check, Clock, Shield, Award } from "lucide-react";

// Mock Navigation and Footer components
const Navigation = () => (
  <nav className="bg-white/95 backdrop-blur-sm fixed top-0 w-full z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-[#5e5554]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Villa Serenity</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-[#5e5554] transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-[#5e5554] transition-colors">Rooms</a>
          <a href="#" className="text-[#5e5554] font-semibold">Booking</a>
          <a href="#" className="text-gray-700 hover:text-[#5e5554] transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-[#5e5554] text-white py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p>&copy; 2025 Villa Serenity. All rights reserved.</p>
    </div>
  </footer>
);

// Room data with images and amenities
const roomTypes = [
  {
    id: 'deluxe',
    name: 'Deluxe Villa',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Elegant comfort with modern amenities and garden views',
    size: '45 sqm',
    capacity: '2 Adults',
    amenities: ['Wi-Fi', 'AC', 'Mini Bar', 'Garden View'],
    features: [
      'King-size bed with premium linens',
      'Private balcony with garden view',
      'Marble bathroom with rainfall shower',
      'Work desk and seating area'
    ]
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Luxurious suite with separate living area and premium services',
    size: '65 sqm',
    capacity: '4 Adults',
    amenities: ['Wi-Fi', 'AC', 'Mini Bar', 'Pool View', 'Butler Service'],
    features: [
      'Separate living room and bedroom',
      'Premium balcony with pool view',
      'Luxury bathroom with jacuzzi',
      'Personal butler service',
      'Complimentary breakfast'
    ]
  },
  {
    id: 'accessible',
    name: 'Accessible Villa',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Thoughtfully designed for accessibility without compromising luxury',
    size: '50 sqm',
    capacity: '2 Adults',
    amenities: ['Wi-Fi', 'AC', 'Accessible Bath', 'Ground Floor'],
    features: [
      'Wheelchair accessible design',
      'Roll-in shower with grab bars',
      'Lowered counters and switches',
      'Emergency call system',
      'Ground floor location'
    ]
  }
];

const amenities = [
  { icon: Wifi, name: 'Free Wi-Fi' },
  { icon: Car, name: 'Valet Parking' },
  { icon: Coffee, name: 'Room Service' },
  { icon: Utensils, name: 'Fine Dining' },
  { icon: Waves, name: 'Swimming Pool' },
  { icon: Dumbbell, name: 'Fitness Center' }
];

export default function Booking() {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    adults: 2,
    children: 0,
    checkin: '',
    checkout: '',
    specialRequests: ''
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRoomDetails, setShowRoomDetails] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRoomSelect = (roomId) => {
    setSelectedRooms(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  const calculateTotal = () => {
    return selectedRooms.reduce((total, roomId) => {
      const room = roomTypes.find(r => r.id === roomId);
      return total + (room ? room.price : 0);
    }, 0);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          src="/assets/videos/intro_1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center drop-shadow-2xl tracking-wide mb-6 animate-slide-up">
            Book Your Escape
          </h1>
          <p className="text-xl md:text-3xl text-white text-center font-light drop-shadow-lg mb-8 animate-slide-up-delay">
            Where luxury meets tranquility
          </p>
          <div className="flex items-center gap-4 text-white/90 animate-fade-in-delay">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-lg">4.9/5 Guest Rating</span>
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="flex-1 py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-[#5e5554] text-white shadow-lg' 
                      : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}>
                    {currentStep > step ? <Check className="w-6 h-6" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 transition-all duration-300 ${
                      currentStep > step ? 'bg-[#5e5554]' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Room Selection */}
            <div className="lg:col-span-2 space-y-8">
              {currentStep === 1 && (
                <div className="animate-slide-in-left">
                  <h2 className="text-4xl font-bold text-[#5e5554] mb-8 text-center lg:text-left">
                    Choose Your Perfect Stay
                  </h2>
                  
                  <div className="grid gap-6">
                    {roomTypes.map((room, index) => (
                      <div
                        key={room.id}
                        className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer transform hover:-translate-y-2 ${
                          selectedRooms.includes(room.id) ? 'ring-4 ring-[#5e5554] ring-opacity-50' : ''
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => handleRoomSelect(room.id)}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/2 relative overflow-hidden">
                            <img 
                              src={room.image} 
                              alt={room.name}
                              className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-[#5e5554] text-white px-3 py-1 rounded-full text-sm font-semibold">
                              ₹{room.price.toLocaleString()}/night
                            </div>
                            {selectedRooms.includes(room.id) && (
                              <div className="absolute inset-0 bg-[#5e5554]/20 flex items-center justify-center">
                                <div className="bg-white rounded-full p-3 shadow-lg">
                                  <Check className="w-8 h-8 text-[#5e5554]" />
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div className="md:w-1/2 p-8">
                            <h3 className="text-2xl font-bold text-[#5e5554] mb-3">{room.name}</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>
                            
                            <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {room.size}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {room.capacity}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {room.amenities.map((amenity) => (
                                <span key={amenity} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowRoomDetails(room.id);
                              }}
                              className="text-[#5e5554] font-semibold hover:underline transition-all duration-200"
                            >
                              View Details →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {selectedRooms.length > 0 && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="px-8 py-4 bg-[#5e5554] text-white font-bold rounded-2xl shadow-xl hover:bg-[#4a433f] transition-all duration-300 transform hover:scale-105"
                      >
                        Continue to Details →
                      </button>
                    </div>
                  )}
                </div>
              )}

              {currentStep === 2 && (
                <div className="animate-slide-in-left">
                  <h2 className="text-4xl font-bold text-[#5e5554] mb-8">Guest Information</h2>
                  
                  <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-base font-semibold text-[#5e5554]">
                          <User className="w-4 h-4" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5e5554] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-base font-semibold text-[#5e5554]">
                          <Mail className="w-4 h-4" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="you@example.com"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5e5554] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-base font-semibold text-[#5e5554]">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5e5554] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-base font-semibold text-[#5e5554]">
                            <Users className="w-4 h-4" />
                            Adults
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={formData.adults}
                            onChange={(e) => handleInputChange('adults', parseInt(e.target.value))}
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5e5554] focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-base font-semibold text-[#5e5554]">Children</label>
                          <input
                            type="number"
                            min="0"
                            max="10"
                            value={formData.children}
                            onChange={(e) => handleInputChange('children', parseInt(e.target.value))}
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5e5554] focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-base font-semibold text-[#5e5554]">
                          <Calendar className="w-4 h-4" />
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          value={formData.checkin}
                          onChange={(e) => handleInputChange('checkin', e.target.value)}
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5e5554] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-base font-semibold text-[#5e5554]">
                          <Calendar className="w-4 h-4" />
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          value={formData.checkout}
                          onChange={(e) => handleInputChange('checkout', e.target.value)}
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5e5554] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-base font-semibold text-[#5e5554]">Special Requests</label>
                      <textarea
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                        rows="4"
                        placeholder="Any special requirements or preferences..."
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5e5554] focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="px-6 py-3 border-2 border-[#5e5554] text-[#5e5554] font-bold rounded-xl hover:bg-[#5e5554] hover:text-white transition-all duration-300"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => setCurrentStep(3)}
                        className="flex-1 px-6 py-3 bg-[#5e5554] text-white font-bold rounded-xl hover:bg-[#4a433f] transition-all duration-300"
                      >
                        Review Booking →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="animate-slide-in-left">
                  <h2 className="text-4xl font-bold text-[#5e5554] mb-8">Confirm Your Booking</h2>
                  
                  <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-2xl font-bold text-[#5e5554] mb-4">Guest Information</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                        <div><strong>Name:</strong> {formData.name}</div>
                        <div><strong>Email:</strong> {formData.email}</div>
                        <div><strong>Phone:</strong> {formData.phone}</div>
                        <div><strong>Guests:</strong> {formData.adults} Adults, {formData.children} Children</div>
                        <div><strong>Check-in:</strong> {formData.checkin}</div>
                        <div><strong>Check-out:</strong> {formData.checkout}</div>
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-2xl font-bold text-[#5e5554] mb-4">Selected Rooms</h3>
                      <div className="space-y-3">
                        {selectedRooms.map(roomId => {
                          const room = roomTypes.find(r => r.id === roomId);
                          return (
                            <div key={roomId} className="flex justify-between items-center p-4 bg-stone-50 rounded-xl">
                              <div>
                                <h4 className="font-semibold text-[#5e5554]">{room.name}</h4>
                                <p className="text-sm text-gray-600">{room.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-[#5e5554]">₹{room.price.toLocaleString()}</div>
                                <div className="text-sm text-gray-500">per night</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="px-6 py-3 border-2 border-[#5e5554] text-[#5e5554] font-bold rounded-xl hover:bg-[#5e5554] hover:text-white transition-all duration-300"
                      >
                        ← Back
                      </button>
                      <button
                        className="flex-1 px-6 py-4 bg-gradient-to-r from-[#5e5554] to-[#4a433f] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        Confirm Booking - ₹{calculateTotal().toLocaleString()}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Booking Summary & Amenities */}
            <div className="space-y-8">
              
              {/* Booking Summary */}
              <div className={`bg-white rounded-3xl shadow-xl p-8 sticky top-24 transition-all duration-500 ${isScrolled ? 'shadow-2xl' : ''}`}>
                <h3 className="text-2xl font-bold text-[#5e5554] mb-6">Booking Summary</h3>
                
                {selectedRooms.length > 0 ? (
                  <div className="space-y-4">
                    {selectedRooms.map(roomId => {
                      const room = roomTypes.find(r => r.id === roomId);
                      return (
                        <div key={roomId} className="flex justify-between items-center p-3 bg-stone-50 rounded-xl">
                          <div>
                            <div className="font-semibold text-[#5e5554]">{room.name}</div>
                            <div className="text-sm text-gray-500">1 room</div>
                          </div>
                          <div className="font-bold text-[#5e5554]">₹{room.price.toLocaleString()}</div>
                        </div>
                      );
                    })}
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center text-lg font-bold text-[#5e5554]">
                        <span>Total per night</span>
                        <span>₹{calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Select rooms to see pricing</p>
                  </div>
                )}
              </div>

              {/* Villa Amenities */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-[#5e5554] mb-6">Villa Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 transition-all duration-200">
                      <amenity.icon className="w-5 h-5 text-[#5e5554]" />
                      <span className="text-sm text-gray-600">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-[#5e5554] mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="font-semibold text-gray-800">Safe & Secure</div>
                      <div className="text-sm text-gray-500">SSL encrypted booking process</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <div>
                      <div className="font-semibold text-gray-800">Award Winning</div>
                      <div className="text-sm text-gray-500">Best boutique hotel 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <div>
                      <div className="font-semibold text-gray-800">Excellent Reviews</div>
                      <div className="text-sm text-gray-500">4.9/5 from 500+ guests</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Details Modal */}
      {showRoomDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowRoomDetails(null)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={e => e.stopPropagation()}>
            {(() => {
              const room = roomTypes.find(r => r.id === showRoomDetails);
              return (
                <div>
                  <div className="relative h-64 md:h-96">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover rounded-t-3xl" />
                    <button
                      onClick={() => setShowRoomDetails(null)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-200"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600 transform rotate-45" />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-[#5e5554] mb-4">{room.name}</h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{room.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-[#5e5554] mb-4">Room Features</h3>
                        <ul className="space-y-2">
                          {room.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-[#5e5554] mb-4">Room Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Size:</span>
                            <span className="font-semibold">{room.size}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Capacity:</span>
                            <span className="font-semibold">{room.capacity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Price:</span>
                            <span className="font-semibold text-[#5e5554]">₹{room.price.toLocaleString()}/night</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          handleRoomSelect(room.id);
                          setShowRoomDetails(null);
                        }}
                        className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                          selectedRooms.includes(room.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-[#5e5554] text-white hover:bg-[#4a433f]'
                        }`}
                      >
                        {selectedRooms.includes(room.id) ? 'Selected ✓' : 'Select Room'}
                      </button>
                      <button
                        onClick={() => setShowRoomDetails(null)}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      <Footer />
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.2s both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
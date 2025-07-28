// import { motion } from "framer-motion";
// import { Star, Clock, Users, ChefHat, Award, Utensils } from "lucide-react";
// import RippleEffect from "./RippleEffect";
// import { useRef } from "react";

// const dishes = [
//   {
//     name: "Niagra Chicken",
//     description:
//       "Fresh Atlantic sea bass with herb-crusted emerald sauce, seasonal vegetables",
//     price: "$48",
//     image: "/dining/niagrachicken.jpg",
//     rating: 5,
//     prepTime: "25 min",
//     serves: "2-3",
//   },
//   {
//     name: "Beef With Onion",
//     description:
//       "Prime Japanese wagyu beef with truffle reduction and roasted root vegetables",
//     price: "$85",
//     image: "/dining/beefwithonion.jpg",
//     rating: 5,
//     prepTime: "30 min",
//     serves: "1-2",
//   },
//   {
//     name: "Chicken Mushroom",
//     description:
//       "Creamy arborio rice with wild mushrooms, parmesan, and fresh herbs",
//     price: "$32",
//     image: "/dining/chickenmushroom.jpg",
//     rating: 4,
//     prepTime: "20 min",
//     serves: "1-2",
//   },
// ];

// export default function DiningSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   return (
//     <section
//       ref={sectionRef}
//       id="dining"
//       className="py-20 bg-background relative overflow-hidden"
//     >
//       <RippleEffect containerRef={sectionRef} />
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="text-primary font-medium tracking-wider uppercase text-sm">
//             Culinary Excellence
//           </span>
//           <h2 className="text-6xl font-light text-foreground mt-4 mb-6">
//             Gourmet{" "}
//             <span className="bg-gradient-luxury bg-clip-text text-transparent">
//               Dining
//             </span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Experience culinary artistry at its finest with our award-winning
//             chefs who create masterpieces using the freshest local ingredients
//             and innovative techniques.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {dishes.map((dish, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <motion.img
//                   src={dish.image}
//                   alt={dish.name}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.6 }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
//                 <div className="absolute top-4 right-4 bg-luxury text-luxury-foreground px-3 py-1 rounded-full text-sm font-medium">
//                   {dish.price}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
//                     {dish.name}
//                   </h3>
//                   <div className="flex items-center space-x-1">
//                     {[...Array(dish.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 fill-luxury text-luxury"
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground leading-relaxed mb-4">
//                   {dish.description}
//                 </p>

//                 <div className="flex items-center justify-between text-sm text-muted-foreground">
//                   <div className="flex items-center space-x-1">
//                     <Clock className="w-4 h-4" />
//                     <span>{dish.prepTime}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Users className="w-4 h-4" />
//                     <span>Serves {dish.serves}</span>
//                   </div>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full mt-6 py-3 bg-gradient-primary text-white rounded-full font-medium hover:shadow-luxury transition-all duration-300"
//                 >
//                   Order Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Chef's specialties */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center"
//         >
//           <h3 className="text-4xl font-light text-foreground mb-12">
//             Chef's{" "}
//             <span className="bg-gradient-luxury bg-clip-text text-transparent">
//               Signature
//             </span>{" "}
//             Experience
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             {[
//               {
//                 icon: ChefHat,
//                 title: "Master Chef",
//                 desc: "Michelin-starred expertise",
//               },
//               {
//                 icon: Award,
//                 title: "Award Winning",
//                 desc: "Internationally recognized",
//               },
//               {
//                 icon: Utensils,
//                 title: "Farm to Table",
//                 desc: "Fresh local ingredients",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center"
//                 >
//                   <item.icon className="w-8 h-8 text-white" />
//                 </motion.div>
//                 <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
//                   {item.title}
//                 </h4>
//                 <p className="text-muted-foreground">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Restaurant ambiance section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//         >
//           <div className="relative">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.5 }}
//               className="relative overflow-hidden rounded-2xl shadow-hero"
//             >
//               <img
//                 src="/dining/diningSection1.jpg"
//                 alt="Restaurant Interior"
//                 className="w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
//             </motion.div>
//           </div>

//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-4xl font-light text-foreground mb-4">
//                 Elegant{" "}
//                 <span className="bg-gradient-emerald bg-clip-text text-transparent">
//                   Atmosphere
//                 </span>
//               </h3>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Dine in sophistication with panoramic views of the surrounding
//                 landscape. Our restaurant combines modern elegance with warm
//                 hospitality to create an unforgettable dining experience.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 gap-6"
//             >
//               <div className="space-y-2">
//                 <h4 className="text-2xl font-semibold text-primary">150</h4>
//                 <p className="text-muted-foreground">Signature Dishes</p>
//               </div>
//               <div className="space-y-2">
//                 <h4 className="text-2xl font-semibold text-primary">5★</h4>
//                 <p className="text-muted-foreground">Michelin Rating</p>
//               </div>
//             </motion.div>

//             <motion.button
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               className="px-8 py-3 bg-gradient-luxury text-yellow-100 rounded-full font-medium hover:shadow-luxury transition-all duration-500"
//             >
//               Reserve Table
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { Star, Clock, Users, ChefHat, Award, Utensils } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const dishes = [
  {
    id: "niagra-chicken",
    name: "Niagra Chicken",
    description:
      "Fresh Atlantic sea bass with herb-crusted emerald sauce, seasonal vegetables",
    price: "$48",
    image: "/dining/niagrachicken.jpg",
    rating: 5,
    prepTime: "25 min",
    serves: "2-3",
  },
  {
    id: "beef-onion",
    name: "Beef With Onion",
    description:
      "Prime Japanese wagyu beef with truffle reduction and roasted root vegetables",
    price: "$85",
    image: "/dining/beefwithonion.jpg",
    rating: 5,
    prepTime: "30 min",
    serves: "1-2",
  },
  {
    id: "chicken-mushroom",
    name: "Chicken Mushroom",
    description:
      "Creamy arborio rice with wild mushrooms, parmesan, and fresh herbs",
    price: "$32",
    image: "/dining/chickenmushroom.jpg",
    rating: 4,
    prepTime: "20 min",
    serves: "1-2",
  },
];

export default function DiningSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleReserveTable = (dishId: string) => {
    navigate(`/booking?dish=${dishId}`);
  };

  return (
    <section
      ref={sectionRef}
      id="dining"
      className="py-20 bg-white relative"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gray-800 font-medium tracking-wider uppercase text-sm">
            Culinary Excellence
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-[#3F1800] mt-4 mb-6">
            Gourmet{" "}
            <span className="font-normal text-[#3F1800]">
              Dining
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Experience culinary artistry at its finest with our award-winning
            chefs who create masterpieces using the freshest local ingredients
            and innovative techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {dish.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-medium text-[#3F1800] group-hover:text-[#3F1800] transition-colors">
                    {dish.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(dish.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-[#3F1800]"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{dish.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>Serves {dish.serves}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="w-full py-1.5 bg-transparent border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-xs md:text-sm">
                    Order Now
                  </button>
                  <button 
                    onClick={() => handleReserveTable(dish.id)}
                    className="w-full py-1.5 bg-[#5e5554] text-white rounded-md font-medium hover:bg-[#3F1800] transition-all duration-300 text-xs md:text-sm"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chef's specialties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-light text-[#3F1800] mb-12">
            Chef's{" "}
            <span className="font-normal text-[#3F1800]">
              Signature
            </span>{" "}
            Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: ChefHat,
                title: "Master Chef",
                desc: "Michelin-starred expertise",
              },
              {
                icon: Award,
                title: "Award Winning",
                desc: "Internationally recognized",
              },
              {
                icon: Utensils,
                title: "Farm to Table",
                desc: "Fresh local ingredients",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-amber-50 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-gray-600 group-hover:text-[#3F1800] transition-colors" />
                </div>
                <h4 className="text-lg font-medium text-[#3F1800] mb-2 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Restaurant ambiance section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-sm">
              <img
                src="/dining/diningSection1.jpg"
                alt="Restaurant Interior"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-[#3F1800] mb-4">
                Elegant{" "}
                <span className="font-normal text-[#3F1800]">
                  Atmosphere
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dine in sophistication with panoramic views of the surrounding
                landscape. Our restaurant combines modern elegance with warm
                hospitality to create an unforgettable dining experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-2xl font-medium text-[#3F1800]">150</h4>
                <p className="text-gray-600 text-sm">Signature Dishes</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-medium text-[#3F1800]">5★</h4>
                <p className="text-gray-600 text-sm">Michelin Rating</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/booking')}
              className="text-lg font-medium text-gray-800 tracking-wider uppercase hover:text-amber-700 transition-colors pb-2"
            >
              Reserve Table
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

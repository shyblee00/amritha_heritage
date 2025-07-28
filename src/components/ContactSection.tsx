import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RippleEffect from "./RippleEffect";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
    >
      <RippleEffect containerRef={sectionRef} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-6xl font-light text-foreground mt-4 mb-6">
            Contact{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Plan your perfect getaway with our dedicated concierge team. We're
            here to make your luxury experience unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-light text-foreground mb-8">
                Resort Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-hero/50 transition-colors"
                >
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Location
                    </h4>
                    <p className="text-muted-foreground">
                      Thycaud, Thiruvananthapuram, Kerala - 695 014
                      <br />
                      Kerala - 695 014
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-hero/50 transition-colors"
                >
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Phone
                    </h4>
                    <p className="text-muted-foreground">
                      +91 471 222 0025, +91 471 222 0024 ,+91 87146 53336
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-hero/50 transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <p className="text-muted-foreground">
                      info@amrithaheritage.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-hero/50 transition-colors"
                >
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Concierge Hours
                    </h4>
                    <p className="text-muted-foreground">
                      24/7 Available
                      <br />
                      Premium Service Always
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 bg-hero rounded-lg overflow-hidden shadow-soft"
            >
              <div className="absolute inset-0 bg-gradient-primary/20 z-10" />
              <iframe
                title="Amritha Heritage Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.073964479836!2d76.9596645!3d8.489801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb3cc8055af%3A0x529436fb75bb4d06!2sAmritha%20Heritage!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="text-center bg-white/70 rounded-lg px-4 py-2 shadow">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">Amritha Heritage</p>
                  <p className="text-muted-foreground text-sm">
                    View on Google Maps
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-4 rounded-2xl shadow-soft"
          >
            <h3 className="text-3xl font-light text-foreground mb-6">
              Send a Message
            </h3>

            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    placeholder="First Name"
                    className="bg-hero border-border focus:border-primary transition-colors"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    placeholder="Last Name"
                    className="bg-hero border-border focus:border-primary transition-colors"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-hero border-border focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  placeholder="Phone Number"
                  className="bg-hero border-border focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-hero border-border focus:border-primary transition-colors resize-none py-34"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-luxury transition-all duration-500 text-lg py-8"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

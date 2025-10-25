"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Crown, Trophy, Users, MapPin, Bed, Sparkles, Flower2, ChefHat, Dumbbell, Star, Globe, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Azure Grand Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.com",
            props: {
              className: "bg-primary-cta text-white hover:bg-accent transition-colors"
            }
          }}
          className="bg-card/95 backdrop-blur-sm border-b border-accent/10"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Discover exceptional hospitality in the heart of the city with world-class amenities, elegant accommodations, and personalized service that exceeds every expectation."
          tag="5-Star Excellence"
          tagIcon={Award}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2149421/pexels-photo-2149421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Azure Grand Hotel elegant exterior with modern architecture"
          className="min-h-screen bg-gradient-to-br from-background via-card to-accent/5"
          titleClassName="text-5xl md:text-7xl font-bold text-foreground"
          descriptionClassName="text-xl text-foreground/80 max-w-3xl mx-auto"
          tagClassName="bg-accent/10 text-accent border-accent/20"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Crafted for Distinction"
          description="Azure Grand Hotel represents the pinnacle of hospitality excellence, where timeless elegance meets modern sophistication to create unforgettable experiences for discerning travelers."
          tag="Our Story"
          tagIcon={Crown}
          bulletPoints={[
            {
              title: "Heritage & Excellence",
              description: "Over 50 years of hospitality mastery with awards from leading travel organizations worldwide",
              icon: Trophy
            },
            {
              title: "Personalized Service",
              description: "Dedicated concierge team providing 24/7 bespoke services tailored to your unique preferences",
              icon: Users
            },
            {
              title: "Prime Location",
              description: "Strategically positioned in the city center with easy access to business districts and cultural attractions",
              icon: MapPin
            }
          ]}
          buttons={[
            {
              text: "Our Heritage",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2149421/pexels-photo-2149421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Azure Grand Hotel lobby with elegant marble and crystal chandelier"
          imagePosition="right"
          className="py-20 bg-gradient-to-b from-background to-card/50"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              brand: "Azure Collection",
              name: "Deluxe King Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe King Room with city view and modern amenities"
            },
            {
              id: "suite",
              brand: "Azure Collection",
              name: "Executive Suite",
              price: "$599/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive Suite with separate living area and premium furnishings"
            },
            {
              id: "penthouse",
              brand: "Azure Collection",
              name: "Presidential Penthouse",
              price: "$1,299/night",
              rating: 5,
              reviewCount: "947",
              imageSrc: "https://images.pexels.com/photos/26859049/pexels-photo-26859049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Penthouse with panoramic city views and private terrace"
            }
          ]}
          buttons={[
            {
              text: "View All Rooms",
              href: "accommodations"
            }
          ]}
          className="py-20 bg-card/30"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our comprehensive collection of luxury amenities designed to enhance every aspect of your stay with us."
          tag="Premium Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Azure Spa & Wellness",
              description: "Rejuvenate your mind and body with our award-winning spa featuring traditional and contemporary treatments",
              icon: Flower2,
              button: {
                text: "Book Treatment",
                href: "spa"
              }
            },
            {
              title: "Gourmet Dining",
              description: "Savor exceptional cuisine from our Michelin-starred restaurant and rooftop bar with panoramic city views",
              icon: ChefHat,
              button: {
                text: "View Menus",
                href: "dining"
              }
            },
            {
              title: "Fitness Center",
              description: "Stay active in our state-of-the-art fitness facility equipped with premium equipment and personal training",
              icon: Dumbbell,
              button: {
                text: "Learn More",
                href: "fitness"
              }
            }
          ]}
          layout="default"
          className="py-20 bg-background"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Guest Experiences"
          description="Discover why discerning travelers choose Azure Grand Hotel for their most important occasions and memorable stays."
          tag="5-Star Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahtravels",
              testimonial: "Absolutely exceptional service from check-in to checkout. The attention to detail and personalized care exceeded all expectations. This is luxury hospitality at its finest.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchenexecutive",
              testimonial: "Perfect location for business travelers. The concierge team anticipated every need, and the executive lounge provided an ideal space for client meetings.",
              imageSrc: "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emilyrodriguez",
              testimonial: "Our anniversary celebration was made magical by the incredible staff. From the champagne welcome to the sunset dinner arrangement, every moment was perfect.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidkimtravel",
              testimonial: "The spa treatments were transformative, and the rooftop dining experience with city views was unforgettable. Will definitely return for future stays.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
          className="py-20 bg-gradient-to-b from-card/50 to-background"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofTwo
          title="Trusted Partnerships"
          description="We collaborate with the world's leading hospitality brands and travel partners to deliver exceptional experiences."
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          tag="Global Network"
          tagIcon={Globe}
          className="py-16 bg-card/20"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common inquiries about your stay at Azure Grand Hotel"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are available upon request based on availability, and may incur additional charges."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfers via our fleet of premium vehicles. Reservations can be made through our concierge team up to 24 hours in advance."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature a Michelin-starred restaurant, casual café, rooftop bar, and 24-hour room service. Special dietary requirements and private dining experiences can be arranged."
            },
            {
              id: "4",
              title: "Is there a cancellation policy?",
              content: "Cancellations made 48 hours prior to arrival incur no charges. Cancellations within 48 hours are subject to a one-night penalty. Special event dates may have different policies."
            }
          ]}
          textPosition="left"
          className="py-20 bg-background"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Exclusive Updates & Offers"
          description="Subscribe to receive special promotions, seasonal packages, and insider access to Azure Grand Hotel's luxury experiences and events."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails. You can unsubscribe at any time. We respect your privacy."
          imageSrc="https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional hotel concierge providing personalized service"
          mediaPosition="right"
          className="py-20 bg-gradient-to-r from-card/30 to-accent/5"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "accommodations"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "Dining",
                  href: "dining"
                },
                {
                  label: "Spa & Wellness",
                  href: "spa"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "concierge"
                },
                {
                  label: "Business Center",
                  href: "business"
                },
                {
                  label: "Event Spaces",
                  href: "events"
                },
                {
                  label: "Transportation",
                  href: "transportation"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book Your Stay",
                  href: "https://booking.com"
                },
                {
                  label: "Call Us",
                  href: "tel:+1-555-0123"
                },
                {
                  label: "Email Us",
                  href: "mailto:reservations@azuregrand.com"
                },
                {
                  label: "Location",
                  href: "location"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Azure Grand Hotel"
          className="bg-primary-cta text-white"
          containerClassName="max-w-7xl mx-auto"
        />
      </div>
    </ThemeProvider>
  );
}
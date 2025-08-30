"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "./Testimonials";
import Link from "next/link";
import BackgroundSlider from "./ui/BackgroundSlider";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Necklaces", "Rings", "Diamonds", "Earrings", "Bracelets"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  interface Testimonial {
    _id: string;
    author: {
      name: string;
      handle: string;
      avatar: string;
    };
    text: string;
    href?: string;
  }

  const [apiTestimonials, setApiTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        if (data.status === 'success') {
          setApiTestimonials(data.data);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        console.error('Error fetching testimonials:', errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Format testimonials for the TestimonialsSection component
  const formattedTestimonials = useMemo(() => {
    return apiTestimonials.map(testimonial => ({
      author: {
        name: testimonial.author?.name || 'Anonymous',
        handle: testimonial.author?.handle || '',
        avatar: testimonial.author?.avatar || '/placeholder-avatar.jpg'
      },
      text: testimonial.text,
      href: testimonial.href || '#'
    }));
  }, [apiTestimonials]);

  const bgImages = [
    "/jewelery1.jpg",
    "/jewelery2.jpg",
    "/jewelery3.jpg",
    "/jewelery4.jpg",
    "/jewelery5.jpg",
  ];

  return (
    <div className="w-full">
      <div className="relative min-h-screen flex items-center">
        <BackgroundSlider images={bgImages} interval={2000} className="" />
        <div className="relative z-10 container mx-auto px-3 py-20 lg:py-10">
          <div className="flex gap-8 items-center justify-center flex-col">
            <div>
              <Link href="/blog">
                <Button variant="secondary" size="sm" className="cursor-pointer gap-4">
                  Read our more blogs <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">K-Shine Jewellers</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">
              <Link href="/collection" passHref>
                <Button size="lg" className="w-full sm:w-auto gap-4 cursor-pointer" variant="outline">
                  Whatsapp Us <PhoneCall className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/collection" passHref>
                <Button size="lg" className="w-full sm:w-auto gap-4 cursor-pointer">
                  Check Collection <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials block below hero */}
      <div className="w-full bg-muted/20 mt-8 lg:mt-16">
        <div className="container mx-auto">
          {loading ? (
            <div className="py-12 text-center">Loading testimonials...</div>
          ) : error ? (
            <div className="py-12 text-center text-red-500">Error loading testimonials: {error}</div>
          ) : (
            <TestimonialsSection
              title="What our customers say"
              description="Don't just take our word for it. Here's what our customers have to say about their experience with our platform."
              testimonials={formattedTestimonials}
              className="py-16 md:py-24"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export { Hero };

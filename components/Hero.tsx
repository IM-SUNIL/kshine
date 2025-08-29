import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "./Testimonials";
import Link from "next/link"

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

  const testimonials = [
    {
      author: {
        name: "Sarah Johnson",
        handle: "@sarahj",
        avatar: "/placeholder-avatar.jpg"
      },
      text: "This platform has transformed how we manage our business operations. The intuitive interface and powerful features have saved us countless hours.",
      href: "#"
    },
    {
      author: {
        name: "Michael Chen",
        handle: "@mikec",
        avatar: "/placeholder-avatar.jpg"
      },
      text: "The best business management solution we've used. The team's support is exceptional and the platform is constantly improving.",
      href: "#"
    },
    {
      author: {
        name: "Emily Rodriguez",
        handle: "@emilyr",
        avatar: "/placeholder-avatar.jpg"
      },
      text: "Switching to this platform was the best decision we made this year. The automation features alone have increased our productivity by 40%.",
      href: "#"
    }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="container mx-auto">
          <div className="flex gap-8 py-20 lg:py-10 px-3 items-center justify-center flex-col">
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
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
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
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
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
        <div className="w-full bg-muted/20 mt-8 lg:mt-16">
          <div className="container mx-auto">
            <TestimonialsSection
              title="Trusted by Whole Jammu"
              description="Join thousands of peoples that have trusted us"
              testimonials={testimonials}
              className="py-16 md:py-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };

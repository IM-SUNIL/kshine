"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
// import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t  bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              Join our Whatsapp Group for the exclusive offers.
            </p>
            {/* Footer WhatsApp Section */}
            <Link href="https://wa.me/9622212879?text=Hello%20I%20need%20message">
              <div className="flex justify-center sm:justify-start items-center cursor-pointer space-x-2">
                {/* WhatsApp Logo */}
                <img
                  src="/whatsapp.svg" // apna WhatsApp logo yaha daal
                  alt="WhatsApp Logo"
                  className="w-10 h-10"
                />
                {/* Text */}
                <span className="text-4xl font-semibold text-gray-800 hover:text-green-500 ">
                  WhatsApp Us
                </span>
              </div>
            </Link>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href={"/"} className="block transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/collection" className="block transition-colors hover:text-primary">
                Collections
              </Link>
              <Link href="/blog" className="block transition-colors hover:text-primary">
                Blogs
              </Link>
              <Link href="/testimonials" className="block transition-colors hover:text-primary">
                Testimonials
              </Link>
              <Link href="/about" className="block transition-colors hover:text-primary">
                About us
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>K-Shine Jewellers</p>
              <p>Gandhi Nagar, Jammu</p>
              <p>Phone: +91 9090807867</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <Link href={"https://www.facebook.com/kshinejewelers/"} target="_blank"
                rel="noopener noreferrer"><TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="cursor-pointer rounded-full">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={"https://www.youtube.com/channel/UCrUZNBltkt5ngSADuHP8-tQ"} target="_blank" rel="noopener noreferrer">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="cursor-pointer rounded-full">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.41 3.43 12 3.43 12 3.43s-7.41 0-9.38.62A3.02 3.02 0 0 0 .5 6.19C0 8.13 0 12 0 12s0 3.87.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.97.62 9.38.62 9.38.62s7.41 0 9.38-.62a3.02 3.02 0 0 0 2.12-2.14C24 15.87 24 12 24 12s0-3.87-.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z"/>
                        </svg>
                        <span className="sr-only">YouTube</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Subscribe on YouTube</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={"https://www.instagram.com/kshine_jewellers"} target="_blank"
                rel="noopener noreferrer"><TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className=" cursor-pointer rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
              <Link href={"https://www.pinterest.com/kshinejewellers/"} target="_blank" rel="noopener noreferrer">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className=" cursor-pointer rounded-full">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.372 0 12c0 4.991 3.093 9.267 7.477 11.017-.107-.944-.203-2.394.04-3.43.223-.933 1.45-5.93 1.45-5.93s-.37-.74-.37-1.83c0-1.716.996-2.995 2.235-2.995 1.054 0 1.563.79 1.563 1.737 0 1.06-.675 2.643-1.025 4.11-.29 1.24.618 2.25 1.838 2.25 2.204 0 3.898-2.324 3.898-5.68 0-2.97-2.135-5.044-5.183-5.044-3.53 0-5.6 2.65-5.6 5.39 0 1.05.315 1.78.81 2.346.227.268.258.377.176.687-.06.225-.195.77-.223.88-.035.15-.11.18-.254.11-.945-.44-1.535-1.82-1.535-2.93 0-2.39 1.734-4.58 5.005-4.58 2.63 0 4.67 1.87 4.67 4.37 0 2.61-1.65 4.71-3.94 4.71-.77 0-1.49-.4-1.74-.88l-.47 1.8c-.17.67-.63 1.5-.94 2.01.7.21 1.45.33 2.23.33 6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                        </svg>
                        <span className="sr-only">Pinterest</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Pinterest</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 K-Shine Jewellers. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
"use client";

import React from "react";
import { cn } from "@/lib/utils";

const mentors = [
  { name: "Andre Haddad", title: "CEO", org: "Turo" },
  { name: "Andrew Farnsworth", title: "Lead Scientist", org: "BirdCast" },
  { name: "Ashley Zehnder", title: "CEO", org: "Fauna Bio" },
  { name: "Bailey Richardson", title: "Head of Marketing", org: "Substack" },
  { name: "Beth Shapiro", title: "Chief Science Officer", org: "Colossal" },
  { name: "Christine Spang", title: "CTO", org: "Nylas" },
  { name: "David Lang", title: "Executive Director", org: "Experiment Foundation" },
  { name: "David Meyers", title: "Executive Director", org: "Conservation Finance Alliance" },
  { name: "Diego Saez-Gil", title: "Founder & CEO", org: "Pachama" },
  { name: "Evan Rapoport", title: "Lead PM, Nature for Climate", org: "Google" },
  { name: "Gautam Shah", title: "CEO and Founder", org: "Internet of Elephants" },
  { name: "Hari Balasubramanian", title: "Founding Managing Partner", org: "EcoAdvisors" },
  { name: "Helen Crowley", title: "Former Managing Director", org: "Pollination" },
  { name: "Jason Boehmig", title: "CEO", org: "Ironclad" },
  { name: "Jason Kibbey", title: "President and Founder", org: "Worldly" },
  { name: "Kaja Wasik", title: "Founding Chief Scientist", org: "Variant Bio" },
  { name: "Kathy Hannun", title: "Founder and President", org: "Dandelion" },
  { name: "Katie Critchlow", title: "Former CEO", org: "NatureMetrics" },
  { name: "Keolu Fox", title: "Co-Founder and Co-Director", org: "Indigenous Futures Institute" },
  { name: "Lauren Salz", title: "CEO", org: "Sealed" },
  { name: "Lyn Werbach", title: "Former COO", org: "Sustainable Apparel Coalition" },
  { name: "Matt Merrifield", title: "CTO", org: "The Nature Conservancy California" },
  { name: "Ryan Phelan", title: "Co-Founder and Executive Director", org: "Revive and Restore" },
  { name: "Sophie Gilbert", title: "Lead Scientist for Biodiversity", org: "Vibrant Planet" },
  { name: "Stephanie O'Donnell", title: "Head of Community", org: "WildLabs" },
  { name: "Ted Schmitt", title: "Sr. Director, Conservation", org: "Allen Institute for AI" },
  { name: "Tomas Aftalion", title: "CTO", org: "Pachama" },
  { name: "Topher White", title: "Founder and Exec Chair", org: "Rainforest Connection" },
];

export function MentorsSection() {
  return (
    <section className="relative z-20 flex flex-col md:flex-row w-full bg-white overflow-hidden border-t">
      <div className="section_sticky-header is-mentor sticky top-0 z-10 bg-white md:w-1/4 p-6 md:p-12 border-b md:border-b-0 md:border-r border-gray-200">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Mentors</h2>
      </div>
      
      <div className="section_content is-mentor flex-1 overflow-hidden py-12 md:py-24 relative">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="relative flex overflow-hidden">
          <div className="flex w-max animate-marquee space-x-4 px-4">
            {[...mentors, ...mentors].map((mentor, i) => (
              <div 
                key={i}
                className={cn(
                  "flex-shrink-0 w-64 md:w-80",
                  "bg-gray-50 border border-gray-100 rounded-2xl p-6",
                  "flex flex-col gap-2 hover:bg-gray-100 transition-colors"
                )}
              >
                <div className="text-xl font-medium text-gray-900">{mentor.name}</div>
                <div className="text-sm text-gray-500">{mentor.title}</div>
                <div className="text-sm font-bold text-gray-900 mt-auto pt-4">{mentor.org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

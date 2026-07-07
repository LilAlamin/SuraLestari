import Image from "next/image";

const team = [
  {
    name: "TOM QUIGLEY",
    role: "MANAGING DIRECTOR",
    bio: "A conservation technologist and startup operator, Tom has spent over a decade working on and advising teams at the overlap of tech and nature.",
    image: "/images/69e22bdc7d61a060bd9384ac_Tom%20Blue%20Roan%20Background.png",
  },
  {
    name: "KEVIN WEBB",
    role: "MANAGING DIRECTOR",
    bio: "With over 15 years of venture and angel investing in marketplaces, hardware, and biodiversity, Kevin has worked with startups from idea through IPO.",
    image: "/images/69e22e4372b72c09e4c8739d_Kevin%20Blue%20Roan%20Background.png",
  },
  {
    name: "ANNIE MCCLUSKEY",
    role: "SR. ASSOCIATE",
    bio: "From Barclays Power and Utilities to National Geographic's endowment, Annie's career has centered on science, conservation, and capital.",
    image: "/images/69e22bdc85e1a72e68646669_Annie%20Blue%20Roan%20Background.png",
  },
  {
    name: "KIT MCDONNELL",
    role: "HEAD OF ECOSYSTEM",
    bio: "A leading biotech startup operator and advisor, Kit has specialized in the intersection of nature, entrepreneurship, and culture.",
    image: "/images/69e22bdc5d86ca759d4305a7_Kit%20headshot%20Background.png",
  },
  {
    name: "EVERETT SANDERSON",
    role: "SR. ASSOCIATE",
    bio: "From renewable energy banking to leading a climate VC strategy, Everett has spent his career directing capital toward nature-positive outcomes.",
    image: "/images/69e22bdce45c09e3764072b4_Everett%20Blue%20Roan%20Background.png",
  },
];

export function TeamSection() {
  return (
    <section className="section_team relative z-20 bg-white py-16 md:py-24 text-slate-900">
      <div className="padding-global px-5 md:px-10 lg:px-20 mx-auto w-full max-w-7xl">
        <div className="container-large">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Our mission is to find and supercharge founders taking on the planet&apos;s most important work. Together, we bring networks and over two decades of experience across conservation, venture, and startups.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-start">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col flex-1 min-w-[280px] max-w-[320px] group"
              >
                <div className="relative aspect-square w-full mb-6 rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
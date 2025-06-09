// import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Heart } from "lucide-react";

export default function Footer() {
  // const [activeDot, setActiveDot] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveDot((prev) => (prev + 1) % 5);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);
  const FooterDetails = [
    {
      logo: "/logo.png",
      Institute: "University of Ghana",
      Slogan: " Leading Research Institute",
      text: "text-blue-600",
    },
    {
      logo: "/logo.png",
      Institute: "Bill & Melinda Gates Foundation",
      Slogan: "Global Health Initiative",
      text: "text-green-600",
    },
    {
      logo: "/logo.png",
      Institute: "National Institutes of Health (NIH)",
      Slogan: "Medical Research Support",
      text: "text-yellow-600",
    },
  ];

  return (
    <footer>
      <div className=" mx-auto p-2">
        {/* Sponsor Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-red-500 text-xl" />
            <h3 className="text-lg font-semibold text-gray-700">
              Proudly Sponsored by
            </h3>
          </div>

          {/* Sponsors Row */}
          <div className="flex  justify-center items-center gap-4">
            {/* University of Ghana */}
            {FooterDetails.map((Details, index) => (
              <Card
                key={index}
                className={`${Details.text} flex flex-col  items-center p-6 rounded-lg hover:shadow-md transition-shadow duration-200 lg:min-w-[400px]`}
              >
                <div className="mb-1">
                  <Image
                    src={Details.logo}
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <h4 className="font-bold hidden lg:block text-center">
                  {Details.Institute}
                </h4>
                <p className="text-sm hidden lg:block text-center">
                  {Details.Slogan}
                </p>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          {/* <div className="flex justify-center gap-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                onClick={() => setActiveDot(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  activeDot === index
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" ">
        <div className="max-w-7xl mx-auto p-2">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} WACCBIP. All rights reserved. | Made
            with <span className="text-red-500">♥</span> for malaria research
            and surveillance
          </p>
        </div>
      </div>
    </footer>
  );
}

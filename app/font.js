import { Poppins, Kaushan_Script } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const kaushanScript = Kaushan_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

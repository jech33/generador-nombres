"use client";

type AdBannerProps = {
  position?: "top" | "bottom";
};

export const AdBanner = ({ position = "bottom" }: AdBannerProps) => {
  return (
    <div
      className={`w-full text-center p-2 text-sm text-gray-500 bg-gray-100 ${
        position === "top" ? "border-b" : "border-t"
      }`}
    >
      {/* Replace with real AdSense script or ad code */}
      <span>🔸 Ad Placeholder - {position.toUpperCase()} 🔸</span>
    </div>
  );
};

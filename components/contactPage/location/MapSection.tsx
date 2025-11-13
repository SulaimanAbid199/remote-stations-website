"use client";

export function MapSection() {
  return (
    <div className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center">
      <div className="w-full rounded-3xl overflow-hidden shadow-lg h-96">
        <iframe
          src="https://www.google.com/maps?q=33.6844,73.0479&hl=es;z=14&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { X, Maximize2, Play } from "lucide-react";

export default function Gallery({ galleryRef }) {
  // ---- DATA ----
  const photos = [
    "/images/headshot_1.jpeg",
    "/images/photoshoot-4.jpeg",
    "/images/photoshoot-5.jpeg",
    "/images/photoshoot-3.jpeg",
    // add more as needed...
  ];

  const videos = [
    {
      id: 1,
      title: "Showreel 2025",
      embedUrl: "https://www.youtube.com/embed/hlah3L8VHd4",
      thumbnail: "https://img.youtube.com/vi/hlah3L8VHd4/maxresdefault.jpg",
    },
    // add more videos here...
  ];

  // ---- STATE ----
  const [visibleCount, setVisibleCount] = useState(6);       // how many photos shown
  const [selectedPhoto, setSelectedPhoto] = useState(null);  // for photo lightbox
  const [selectedVideo, setSelectedVideo] = useState(null);  // for video modal

  const sentinelRef = useRef(null);

  // ---- INFINITE SCROLL (loads more photos when bottom sentinel is visible) ----
  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + 6, photos.length) // load 6 more until all shown
          );
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [photos.length]);

  const displayedPhotos = photos.slice(0, visibleCount);

  return (
    <section ref={galleryRef} className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center text-cyan-400 mb-12">Gallery</h2>

        {/* ---------- PHOTOS (Masonry + Lightbox) ---------- */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl text-cyan-400">Photos</h3>
          <p className="text-sm text-slate-400">
            Click any photo to view fullscreen
          </p>
        </div>

        {/* Masonry-style columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-16">
          {displayedPhotos.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedPhoto(src)}
              className="block w-full mb-4 cursor-zoom-in focus:outline-none"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg border border-cyan-500/20 break-inside-avoid">
                <img
                  src={src}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  alt={`Gallery photo ${i + 1}`}
                />
                <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
                  <Maximize2 size={16} className="text-cyan-300" />
                </div>
              </div>
            </button>
          ))}

          {/* Sentinel for infinite scroll */}
          {visibleCount < photos.length && (
            <div ref={sentinelRef} className="h-4 w-full" />
          )}
        </div>

        {/* ---------- VIDEOS (Cards + Modal Popup) ---------- */}
        <h3 className="text-2xl text-cyan-400 mb-6">Videos</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setSelectedVideo(video)}
              className="group relative aspect-video rounded-lg overflow-hidden border border-cyan-500/20 bg-slate-800 cursor-pointer"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Centered play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                  <Play size={28} color="white" fill="white" />
                </div>
                <p className="text-slate-100 font-medium text-sm opacity-90">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ---------- PHOTO LIGHTBOX MODAL ---------- */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-slate-200 hover:text-white"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={28} />
          </button>
          <img
            src={selectedPhoto}
            alt="Enlarged"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ---------- VIDEO MODAL POPUP ---------- */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-slate-200 hover:text-white"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={28} />
          </button>

          <div
            className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden border border-cyan-500/30 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={selectedVideo.embedUrl}
              title={selectedVideo.title}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      )}
    </section>
  );
}

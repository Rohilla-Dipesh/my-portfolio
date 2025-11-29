import { useState } from "react";
import { X, Maximize2, Play } from "lucide-react";

export default function Gallery({ galleryRef }) {
  // Photo list
  const photos = [
    "/images/headshot_1.jpeg",
    "/images/photoshoot-4.jpeg",
    "/images/photoshoot-5.jpeg",
    "/images/photoshoot-3.jpeg",
    // add more...
  ];

  // Video list
  const videos = [
    {
      id: 1,
      title: "Showreel 2025",
      embedUrl: "https://www.youtube.com/embed/hlah3L8VHd4",
      thumbnail: "https://img.youtube.com/vi/hlah3L8VHd4/maxresdefault.jpg",
    },
  ];

  // ---- STATE ----
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Only show first 6 photos unless expanded
  const visiblePhotos = showAllPhotos ? photos : photos.slice(0, 6);

  return (
    <section ref={galleryRef} className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center text-cyan-400 mb-12">Gallery</h2>

        {/* --------------------- PHOTOS --------------------- */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl text-cyan-400">Photos</h3>
          <p className="text-sm text-slate-400">Tap a photo to enlarge</p>
        </div>

        {/* Masonry layout → 2 columns mobile, more on desktop */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4 mb-6">
          {visiblePhotos.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedPhoto(src)}
              className="block w-full cursor-zoom-in"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-cyan-500/20 break-inside-avoid">
                <img
                  src={src}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
                  <Maximize2 size={16} className="text-cyan-300" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Show More Photos Button */}
        {!showAllPhotos && photos.length > 6 && (
          <button
            onClick={() => setShowAllPhotos(true)}
            className="w-full py-3 text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Show More Photos
          </button>
        )}

        {/* --------------------- VIDEOS --------------------- */}
        <h3 className="text-2xl text-cyan-400 mt-16 mb-6">Videos</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVideo(v)}
              className="group relative aspect-video rounded-lg overflow-hidden border border-cyan-500/20 bg-slate-800 cursor-pointer"
            >
              {/* Thumbnail */}
              <img
                src={v.thumbnail}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                  <Play size={28} color="white" fill="white" />
                </div>
                <p className="text-slate-100 font-medium text-sm opacity-90">
                  {v.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* --------------------- PHOTO LIGHTBOX --------------------- */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-slate-300 hover:text-white"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedPhoto}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* --------------------- VIDEO POPUP --------------------- */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-slate-300 hover:text-white"
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
            />
          </div>
        </div>
      )}
    </section>
  );
}

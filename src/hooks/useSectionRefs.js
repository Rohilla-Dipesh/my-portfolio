import { useRef } from "react";

export default function useSectionRefs() {
  return {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    workRef: useRef(null),
    reelRef: useRef(null),
    galleryRef: useRef(null),
    contactRef: useRef(null),
  };
}

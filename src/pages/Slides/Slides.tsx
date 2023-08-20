import { useRef, useCallback, useState } from "react";
import { pdfjs, Document, Page, Thumbnail } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { usePageWidth } from "./hooks/usePageWidth";
import { useUserInteraction } from "./hooks/useUserInteraction";

import "./Slides.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const trackWidth = 250;

export function Slides() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const main = useRef<HTMLDivElement>(null);
  const pageWidth = usePageWidth(16 / 9);
  const itemsRef = useRef<Map<number, HTMLDivElement>>(
    new Map<number, HTMLDivElement>()
  );

  const scrollToId = useCallback((itemId: number) => {
    const node = itemsRef.current.get(itemId);
    node?.scrollIntoView({
      // behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, []);

  // Future TODO: these callbacks will benefit from the upcoming useEffectEvent hook
  const scrollThumbsToNextSlide = useCallback(() => {
    const newPageNumber = pageNumber + 1;
    if (numPages && newPageNumber < numPages) {
      setPageNumber(newPageNumber);
      scrollToId(newPageNumber);
    }
  }, [pageNumber, numPages, scrollToId]);

  const scrollThumbsToPreviousSlide = useCallback(() => {
    const newPageNumber = pageNumber - 1;
    if (newPageNumber >= 0) {
      setPageNumber(newPageNumber);
      scrollToId(newPageNumber);
    }
  }, [pageNumber, scrollToId]);

  useUserInteraction({
    onNext: scrollThumbsToNextSlide,
    onPrevious: scrollThumbsToPreviousSlide,
    wheelListenerNode: main.current!,
  });

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <>
      <button
        className={`fullscreen${fullScreen ? " fullscreen--active" : ""}`}
        onClick={() => setFullScreen((value) => !value)}
      ></button>
      <Document
        file="slides.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        <div
          className={`slideshow${fullScreen ? " slideshow--fullscreen" : ""}`}
        >
          <div className="slideshow__track">
            {Array.from(new Array(numPages), (_, index) => (
              <div
                ref={(node) => {
                  if (node) {
                    itemsRef.current.set(index, node);
                  } else {
                    itemsRef.current.delete(index);
                  }
                }}
                key={`page_${index + 1}`}
              >
                <div
                  className="slideshow__item-number"
                  data-pdf-thumbnail-number={index}
                >
                  {index + 1}
                </div>
                <Thumbnail
                  width={trackWidth - 3}
                  className={`slideshow__track-item${
                    pageNumber === index ? " slideshow__track-item--active" : ""
                  }`}
                  onClick={() => setPageNumber(index)}
                  pageNumber={index + 1}
                />
              </div>
            ))}
          </div>
          <div ref={main} className="slideshow__current">
            <Page
              width={pageWidth - (fullScreen ? 42 : trackWidth + 70)}
              className="slideshow__current-item"
              key={`page_${pageNumber + 1}`}
              pageNumber={pageNumber + 1}
            />
          </div>
        </div>
      </Document>
    </>
  );
}

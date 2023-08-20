import { Fragment, useRef, useEffect, useState } from "react";
import { pdfjs, Document, Page, Thumbnail } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { usePageWidth } from "./hooks/usePageWidth";
import "./Slides.css";

import type { PDFDocumentProxy } from "pdfjs-dist";

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

  useEffect(() => {
    function scrollThumbsToNextSlide() {
      if (pageNumber < numPages! - 1) {
        setPageNumber((prev) => prev + 1);

        // forgive me for not using refs here
        document
          .querySelector(`[data-pdf-thumbnail-number="${pageNumber + 1}"]`)
          ?.scrollIntoView();
      }
    }

    function scrollThumbsToPreviousSlide() {
      if (pageNumber > 0) {
        setPageNumber((prev) => prev - 1);

        // forgive me for not using refs here
        document
          .querySelector(`[data-pdf-thumbnail-number="${pageNumber - 1}"]`)
          ?.scrollIntoView();
      }
    }

    function handleKeyListener(event: KeyboardEvent) {
      if (
        event.key === "ArrowRight" ||
        event.key === " " ||
        event.key === "ArrowDown"
      ) {
        scrollThumbsToNextSlide();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        scrollThumbsToPreviousSlide();
      }
    }

    // Mousehweel navigation: WIP
    // function handleWheelListener(event: WheelEvent) {
    //   const delta = Math.sign(event.deltaY);
    //   if (delta > 0) {
    //     scrollThumbsToNextSlide();
    //   } else if (delta < 0) {
    //     scrollThumbsToPreviousSlide();
    //   }
    // }
    // const wheelListenerNode = main.current;
    // wheelListenerNode?.addEventListener("wheel", handleWheelListener);

    window.addEventListener("keyup", handleKeyListener);

    return () => {
      // wheelListenerNode?.removeEventListener("wheel", handleWheelListener);
      window.removeEventListener("keyup", handleKeyListener);
    };
  }, [pageNumber, numPages]);

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
              <Fragment key={`page_${index + 1}`}>
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
              </Fragment>
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

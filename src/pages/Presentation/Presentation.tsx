import { useEffect, useState } from "react";
import { pdfjs, Document, Page, Thumbnail } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./Presentation.css";

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

export function Presentation() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      const maxWidth = (window.innerHeight + 100) * (16 / 9);

      if (window.innerWidth > maxWidth) {
        setPageWidth(maxWidth);
      } else {
        setPageWidth(window.innerWidth);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleKeyListener(event: KeyboardEvent) {
      if (
        event.key === "ArrowRight" ||
        event.key === " " ||
        event.key === "ArrowDown"
      ) {
        if (pageNumber < numPages! - 1) {
          setPageNumber((prev) => prev + 1);
        }
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        console.log(pageNumber);
        if (pageNumber > 0) {
          setPageNumber((prev) => prev - 1);
        }
      }
    }

    window.addEventListener("keyup", handleKeyListener);

    return () => {
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
        file="data/presentation.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        <div
          className={`slideshow${fullScreen ? " slideshow--fullscreen" : ""}`}
        >
          <div className="slideshow__track">
            {Array.from(new Array(numPages), (el, index) => (
              <>
                <div className="slideshow__item-number">{index + 1}</div>
                <Thumbnail
                  width={trackWidth - 3}
                  className={`slideshow__track-item${
                    pageNumber === index ? " slideshow__track-item--active" : ""
                  }`}
                  onClick={() => setPageNumber(index)}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              </>
            ))}
          </div>
          <div className="slideshow__current">
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

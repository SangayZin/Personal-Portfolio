import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
import pdf from "../../assets/Resume(CV) (1).pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState } from "react";
import './Resume.css'; // Create this CSS file for styling

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1); // Showing only first page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div className="resume-header">
              <h1>RESUME</h1>
              <p>Preview below - Download the full version</p>
            </div>

            <div className="resume-container">
              {/* PDF Preview */}
              <div className="pdf-preview">
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading="Loading resume..."
                >
                  <Page 
                    pageNumber={pageNumber} 
                    width={800}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
              </div>

              {/* Download Button */}
              <div className="download-section">
                <Button 
                  variant="primary" 
                  href={pdf} 
                  target="_blank"
                  download="Sangay_Tenzin_Resume.pdf"
                  className="download-btn"
                >
                  <AiOutlineDownload />
                  &nbsp;Download Full Resume
                </Button>
                <p className="download-note">
                  PDF file ({numPages} pages) will download automatically
                </p>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
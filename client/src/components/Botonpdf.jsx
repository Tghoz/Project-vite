import { BiSolidDownload } from "react-icons/bi";
import "../css/Pages.css";
import { Button,  } from "@nextui-org/react";
import { jsPDF } from "jspdf";

export default function Botonpdf() {

  const handlePDFGeneration = () => {
    const doc = new jsPDF();
    const charts = document.querySelectorAll("canvas");

    charts.forEach((chart, index) => {
      if (index !== 0) {
        doc.addPage();
      }
      const imgData = chart.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 10, 10, 180, 100);
    });

    doc.save("analisis.pdf");
  };

  return (
    <div className="">
      <Button
        onClick={handlePDFGeneration}
        variant="flat"
        className="capitalize"
        color="secondary"
      >
        <BiSolidDownload size={20} />
        Guardar PDF
      </Button>
    </div>
  );
}
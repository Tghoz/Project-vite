import Chart from "../components/Chart";
import Modalright from "../components/Modalright";
import Modaleft from "../components/Modaleft";
import Modalpropuesta from "../components/Modalpropuesta";
import Botonpdf from "../components/Botonpdf";
import { jsPDF } from "jspdf";

function Analisis() {
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
    <main>
      <div>
        <Modalpropuesta />
      </div>
      <ul className="box-info">
        <li>
          <i></i>
          <span className="text">
            <p>Facebook</p>
            <img src="/facebook.png" alt="Icono" width={50} height={60} />
          </span>
          <Chart />
        </li>
        <li>
          <i></i>
          <span className="text">
            <p>Instagram</p>
            <img src="/instagram.png" alt="Icono" width={50} height={60} />
          </span>
          <Chart />
        </li>
      </ul>
      <div className="modal-container">
        <Botonpdf onClick={handlePDFGeneration} />
        <Modaleft />
        <Botonpdf />
        <Modalright />
      </div>
      <ul className="box-info">
        <li>
          <i></i>
          <div className="xdse">
            <img src="/twitterx.png" alt="Icono" width={50} height={60} />
          </div>
          <div className="xds">
            <p>X</p>
          </div>
          <Chart />
        </li>
        <li>
          <i></i>
          <span className="text">
            <p>Tik Tok</p>
            <img src="/tiktok.png" alt="Icono" width={50} height={60} />
          </span>
          <Chart />
        </li>
      </ul>
      <div className="modal-container">
        <Botonpdf onClick={handlePDFGeneration} />
        <Modaleft />
        <Botonpdf />
        <Modalright />
      </div>
    </main>
  );
}

export default Analisis;
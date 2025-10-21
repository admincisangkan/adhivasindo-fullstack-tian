import React from "react";
import "./MainContent.css";
import {
User, Calendar
} from "lucide-react";

function MainContent() {
  return (
    <main className="main-content">
      {/* === Section: Announcement === */}
      <section className="announcement">
        <div className="announcement-content">
          <p className="category">PEMOGRAMAN</p>
          <h2>Pemrograman Frontend Modern dengan React dan Angular</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <div className="info">
            <span className="lecturer"><User size={18} color="#ffffff" /> Pemateri By Josep</span>
            <span className="date"><Calendar size={18} color="#ffffff" /> 14-06-2025</span>
          </div>
        </div>
        <button className="btn-learn">MULAI LEARNING</button>
      </section>

      {/* === Section: Modules === */}
      <section className="modules">
        <h3>MODUL KOMPETENSI</h3>
        <div className="module-cards">
            <div className="module-card">
          <div className="module-card dark">
            <h5>PEMROGRAMAN</h5>
            </div>
            <h5>Materi Kompetensi</h5>
            <ul>
              <li>Pemrograman Frontend Modern dengan React dan Angular</li>
              <li>Pengembangan API Berstandar Industri dengan GraphQL dan REST</li>
              <li>Menerapkan Clean Code dan Desain Pattern dalam Pengembangan Software</li>
            </ul>
          </div>

<div className="module-card">
          <div className="module-card pink">
            <h5>CREATIVE MARKETING</h5>
            </div>
            <h5>Materi Kompetensi</h5>
            <ul>
              <li>Storytelling dalam Pemasaran: Mengubah Data menjadi Cerita yang Menginspirasi</li>
              <li>Pemahaman Viral: Bagaimana Menciptakan Konten yang Cepat Menyebar</li>
              <li>Maksimalkan User-Generated Content dalam Strategi Pemasaran Kreatif</li>
            </ul>
          </div>

<div className="module-card">
          <div className="module-card yellow">
            <h5>MANAGEMENT SDM</h5>
            </div>
            <h5>Materi Kompetensi</h5>
            <ul>
              <li>Storytelling dalam Pemasaran: Mengubah Data menjadi Cerita yang Menginspirasi</li>
              <li>Pemahaman Viral: Bagaimana Menciptakan Konten yang Cepat Menyebar</li>
              <li>Maksimalkan User-Generated Content dalam Strategi Pemasaran Kreatif</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Section: Scores === */}
      <section className="scores">
        <h3>NILAI PESERTA</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Class</th>
              <th>Modul</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Parija Faiza</td>
              <td>L1</td>
              <td>Pemrograman</td>
              <td>1,234 Point</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default MainContent;

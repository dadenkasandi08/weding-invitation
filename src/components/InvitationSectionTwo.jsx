import React from "react";
import gambar1 from "./mempelai1.png";
import gambar2 from "./mempelai2.png";
import gambarCincin from "./cincin.png";

export default function InvitationSectionTwo() {
  return (
    <div className="invitation-section_two">
      <div className="invitation-section_two-bismillah" />
      <div className="invitation-section_two-text">
        <p>
          Dengan memohon Rahmat dan Ridho Allah Subhanahu Wata'ala, kami
          bermaksud melangsungkan Resepsi Pernikahan putra putri kami :
        </p>
      </div>
      <div className="invitation-section_two-mempelai-pria">
        <img src={gambar1} alt="Mempelai pria" />
      </div>
      <div className="nama-mempelai">
        <p>Muhammad Iskandar,S.H,M.H.</p>
      </div>
      <div className="status-mempelai">
        <p>
          Putra terakhir dari : <br />
          Bapak Masrun (alm) & Ibu Nurhayati{" "}
        </p>
      </div>
      <div className="invitation-section_two-and">
        <img src={gambarCincin} alt="Cincin" />
      </div>
      {/* mempelai perempuan */}
      <div className="invitation-section_two-mempelai-pria">
        <img src={gambar2} alt="Mempelai pria" />
      </div>
      <div className="nama-mempelai">
        <p>Lathifatul Mahabbati,S.Kom.</p>
      </div>
      <div className="status-mempelai">
        <p>
          Putri pertama dari : <br />
          Bapak Zulkipli & Ibu Sri Hariani,S.Pd.{" "}
        </p>
      </div>
    </div>
  );
}

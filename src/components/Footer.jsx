import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  const kurumsal = [
    "Hakkımızda",
    "Vizyon & Misyon",
    "Gizlilik Politikası",
    "KVKK Sözleşmesi",
    "Sertifikalar",
    "İletişim",
  ];
  const kategori = [
    "Sebze",
    "Süt Ürünleri",
    "Kahvaltılık",
    "Et & Tavuk",
    "Meyve",
  ];
  const fırsat = [
    "Yeni Ürünler",
    "Haftanın Fırsatları",
    "İndirimli Ürünler",
    "E-Hamal Kumbara",
  ];

  return (
    <footer className="bg-themeblue">
      <section className="footer__div container">
        <article className="footer__kurumsal col">
          <h4>Kurumsal</h4>
          {kurumsal.map((item, index) => (
            <p>{item}</p>
          ))}
        </article>
        <article className="footer__kategori col">
          <h4>Kategoriler</h4>
          {kategori.map((item) => (
            <p>{item}</p>
          ))}
        </article>
        <article className="footer__fırsat col">
          <h4>Fırsatlar</h4>
          {fırsat.map((item) => (
            <p>{item}</p>
          ))}
        </article>
        <div className="footer__media col">
          <FaFacebookF className="footer__icon" />
          <FaPinterestP className="footer__icon" />
          <FaTwitter className="footer__icon" />
          <FaYoutube className="footer__icon" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;

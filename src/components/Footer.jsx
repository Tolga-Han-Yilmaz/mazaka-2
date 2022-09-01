import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaPhoneAlt,
} from "react-icons/fa";
import karekod from "../assets/karekod.png";

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
            <p key={index}>{item}</p>
          ))}
        </article>
        <article className="footer__kategori col">
          <h4>Kategoriler</h4>
          {kategori.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
        <article className="footer__fırsat col">
          <h4>Fırsatlar</h4>
          {fırsat.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
        <div className="footer__media col">
          <img src={karekod} alt="karekod" />
          <div>
            <div className="d-flex ">
              <FaPhoneAlt /> <p>0 212 00 02 00</p>
            </div>
            <div>
              <FaFacebookF className="footer__icon" />
              <FaPinterestP className="footer__icon " />
              <FaTwitter className="footer__icon " />
              <FaYoutube className="footer__icon" />
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center">
        <h5>
          &copy; {new Date().getFullYear()}
          <span className="text-success mx-2"> Tolga Han YILMAZ </span>
        </h5>
        <h5>All rights reserved</h5>
      </section>
    </footer>
  );
};

export default Footer;

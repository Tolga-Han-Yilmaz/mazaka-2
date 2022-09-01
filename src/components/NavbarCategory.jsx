import React from "react";
import {
  FaShoppingBasket,
  FaCarrot,
  FaEgg,
  FaNutritionix,
  FaWineBottle,
  FaConciergeBell,
  FaGlobeAmericas,
  FaChild,
  FaCrutch,
  FaThumbsUp,
} from "react-icons/fa";

const NavbarCategory = () => {
  const handleClick = (e) => {
    console.log(e.target.lastChild);
    let val = "";
    if (e.target.className) {
      val = e.target.value;
    }
    console.log(val);
  };
  return (
    <div
      className="navbar__category container"
      //  onClick={(e) => handleClick(e)}
    >
      <div className="navbar__category-div">
        <FaShoppingBasket className="navbar-icon" />
        <p value="Markalarımız" className="navbar-text">
          Markalarımız
        </p>
      </div>
      <div className="navbar__category-div">
        <FaCarrot className="navbar-icon" />
        <p>Organik Meyve & Sebze</p>
      </div>
      <div className="navbar__category-div">
        <FaEgg className="navbar-icon" />
        <p>Kahvaltılık</p>
      </div>
      <div className="navbar__category-div">
        <FaNutritionix className="navbar-icon" />
        <p>Atıştırmalık</p>
      </div>
      <div className="navbar__category-div">
        <FaWineBottle className="navbar-icon" />
        <p>Zeytinyağı</p>
      </div>
      <div className="navbar__category-div">
        <FaConciergeBell className="navbar-icon" />
        <p>Kuru Gıda</p>
      </div>
      <div className="navbar__category-div">
        <FaGlobeAmericas className="navbar-icon" />
        <p>Organik</p>
      </div>
      <div className="navbar__category-div">
        <FaChild className="navbar-icon" />
        <p>Anne & Çocuk</p>
      </div>
      <div className="navbar__category-div">
        <FaCrutch className="navbar-icon" />
        <p>Yeni Ürünler</p>
      </div>
      <div className="navbar__category-div">
        <FaThumbsUp className="navbar-icon" />
        <p>Fırsatlar</p>
      </div>
      <div className="navbar__category-info">
        <div>
          <h3>{}</h3>
          <p>
            E-Hamal'da Kumbara sistemi var. Yaptığın alışverişlerden Türk Lirası
            biriktir. Kazandığın paralarla tekrar alışveriş yap.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarCategory;

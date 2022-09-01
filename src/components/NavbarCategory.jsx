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
  return (
    <div className="navbar__category container mt-4">
      <div className="navbar__category-div ">
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
        <FaChild className="navbar-icon " />
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
    </div>
  );
};

export default NavbarCategory;

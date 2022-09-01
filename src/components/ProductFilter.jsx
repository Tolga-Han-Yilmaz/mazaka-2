import React, { useState } from "react";
import { FaGripHorizontal, FaGripVertical } from "react-icons/fa";

const ProductFilter = () => {
  const [productCategory, setProductCategory] = useState("Markalar");
  const kategoriler = [
    "Markalar",
    "Organik & Meyve Sebze",
    "Kahvaltılık",
    "Atıştırmalık",
    "Zeytinyağı",
    "Kuru Gıda",
    "Organik",
    "Anne & Çocuk",
    "Yeni Ürünler",
    "Fırsatlar",
  ];
  const gramajlar = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

  const handleClick = (e) => {
    setProductCategory(e.target.value);
  };
  return (
    <div className="productfilter container">
      <div className="productfilter__info">
        <p>
          Anasayfa / <span>{productCategory}</span>
        </p>
      </div>
      <div className="productfilter__div">
        <div className="productfilter__div-select">
          <select
            className="form-select"
            aria-label="Default select example"
            onClick={(e) => handleClick(e)}
          >
            {kategoriler.map((kategori, index) => {
              return (
                <option value={kategori} key={index}>
                  {kategori}
                </option>
              );
            })}
          </select>
          <select className="form-select" aria-label="Default select example">
            <option selected>Gramaj</option>
            {gramajlar.map((gramaj, index) => {
              return (
                <option value={index} key={index}>
                  {gramaj}
                </option>
              );
            })}
          </select>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Tükenenleri Gösterme{" "}
            </label>
          </div>
        </div>
        <div className="productfilter__div-order">
          <FaGripVertical className="productfilter-icon" />
          <FaGripHorizontal className="productfilter-icon" />
          <select className="form-select" aria-label="Default select example">
            <option selected>Sırala</option>
            <option>Dikey</option>
            <option>Yatay</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

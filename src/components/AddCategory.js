import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmiut = (e) => {
    e.preventDefault();
    //si no me llega el arreglo categorias o no se puede acceder, tengo que hacer de la siguiente forma
    //setCategories((cats) => [...cats, inputValue]);
    //Si me envian lo que se necesita por las props, lo puedo hacer de la siguiente forma
    if (inputValue.trim().length > 2) {
      setCategories([inputValue, ...categories, ]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmiut}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};


// Implementamos la obligatoriedad de que nos envien estas props
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

export default AddCategory;

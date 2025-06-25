import {  FormEvent, useEffect, useState, type ChangeEvent } from "react";
import { v4 as uuid } from "uuid";

import Buttom from "./Components/Buttom";
import Card from "./Components/Card";
import { ProductsList } from "./Data/ProductsList";
import Modal from "./Components/UI/Model";
import { formInputsList } from "./Data/formInputsList";
import Input from "./Components/UI/Input";
import type { IProduct } from "./Interfaces/IProduct";
import ErrorMessage from "./Components/UI/ErorrMessage";
import { productValidation } from "./Validation";
import Select from "./Components/UI/Select";
import { categories } from "./Data/categories";
import { Colors } from "./Data/Colors";
import toast, { Toaster } from "react-hot-toast";

import { ProductNameTypes } from "./Types";
import CircleColor from "./Components/UI/CircleColor";
import { defaultProductObj } from "./Data/defaultProductObj";


function App() {

  
  // State to manage the modal visibility

  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [Products, setProducts] = useState<IProduct[]>(ProductsList);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [tempColors, setTempColor] = useState<string[]>([]);


  useEffect(() => {
  toast.success("Component loaded!");
}, []);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj);


  // Functions to handle form submission
  const closeModal = () => setIsOpen(false);
  const closeEditModal = () => setIsOpenEditModal(false);
  const openEditModal = () => setIsOpenEditModal(true);
  const openModal = () => setIsOpen(true);
  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = () => setIsOpenConfirmModal(true);
  
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
     
    const { title, description, price, imageURL } = product;

    const validationErrors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    setErrors(validationErrors);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;

    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

      const hasErrorMsg = Object.values(errors).some(error => error !== "");
      if (hasErrorMsg) {
        setErrors(errors);
        return;
      }


    setProducts(prev => [{ ...product, id: uuid(), colors: tempColors, category: selectedCategory }, ...prev]);
    // setProduct(defaultProductObj);
        toast("Product has been added successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
    setTempColor([]);
    closeModal();


  };
  // Function to open the edit modal


    const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = productToEdit;

    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    const hasErrorMsg =
      Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    const updatedProducts = [...Products];
    updatedProducts[productToEditIdx] = { ...productToEdit };
    setProducts(updatedProducts);

    setProductToEdit(defaultProductObj);
    
    closeEditModal();

    toast("Product has been updated successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
  };
  const renderProductList = Products.map((product, idx) => (
    <Card
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      idx={idx}
      setProductToEditIdx={setProductToEditIdx}
      openConfirmModal={openConfirmModal}
    />
  ));
  // Handel remove product
  const removeProductHandler = () => {
    const filtered = Products.filter(product => product.id !== productToEdit.id);
    setProducts(filtered);
    closeConfirmModal();
    toast("Product has been deleted successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "#c2344d",
        color: "white",
      },
    });
  };

   
    const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const renderProductColors = Colors.map(color => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor(prev => prev.filter(item => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColor(prev => prev.filter(item => item !== color));
          return;
        }
        setTempColor(prev => [...prev, color]);
      }}
    />
  ));

// jkmlk
  const onCancel = () => {
    setTempColor([]);
    setProduct(defaultProductObj);
    
    setIsOpen(false);
  };

  // Variable to show input of products
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

    const renderProductEditWithErrorMsg = (id: string, label: string, name: ProductNameTypes) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-[2px] text-sm font-medium text-gray-700">
          {label}
        </label>
        <Input type="text" id={id} name={name} value={productToEdit[name]} onChange={onChangeEditHandler} />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <>
      <Buttom className="bg-amber-300 " width="w-fit" onClick={openModal}>
        Add Product
      </Buttom>
      {/* Removed count as it is undefined */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {renderProductList}
      </div>
        {/* ADD PRODUCT MODAL */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center flex-wrap space-x-1">{renderProductColors}</div>
          <div className="flex items-center flex-wrap space-x-1">
            {tempColors.map(color => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Buttom className="bg-indigo-700 hover:bg-indigo-800">Submit</Buttom>
            <Buttom type="button" className="bg-[#f5f5fa] hover:bg-gray-300 !text-black" onClick={onCancel}>
              Cancel
            </Buttom>
          </div>
        </form>
      </Modal>

            {/* EDIT PRODUCT MODAL */}
      <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="EDIT THIS PRODUCT">
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg("description", "Product Description", "description")}
          {renderProductEditWithErrorMsg("imageURL", "Product Image URL", "imageURL")}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

          <Select
            selected={productToEdit.category}
            setSelected={value => setProductToEdit({ ...productToEdit, category: value })}
          />

        

          <div className="flex items-center space-x-3">
            <Buttom className="bg-indigo-700 hover:bg-indigo-800">UpDate</Buttom>
        
          </div>
        </form>
      </Modal>

  {/* DELETE PRODUCT CONFIRM MODAL */}
      <Modal
        isOpen={isOpenConfirmModal}
        closeModal={closeConfirmModal}
        title="Are you sure you want to remove this Product from your Store?"
        description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
      >
        <div className="flex items-center space-x-3">
          <Buttom className="bg-[#c2344d] hover:bg-red-800" onClick={removeProductHandler}>
            Yes, remove
          </Buttom>
          <Buttom type="button" className="bg-[#f5f5fa] hover:bg-gray-300 !text-black" onClick={closeConfirmModal}>
            Cancel
          </Buttom>
        </div>
      </Modal>

      <Toaster />

    </>
  );
}

export default App;

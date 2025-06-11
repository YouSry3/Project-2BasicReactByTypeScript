/**
 * Validates a product object for required fields and constraints.
 *
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The URL of the product's image.
 * @param {string} product.price - The price of the product.
 *
 * @returns {Object} Error - An object containing error messages for invalid fields.

 */

import type { IError } from "../Interfaces/IError";

export const productValidation = (product: { title: string; description: string; imageURL: string; price: string }):IError => {
  const errors: IError = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
    errors.title = "Product title must be between 10 and 80 characters!";
  }
  if (!product.description.trim() || product.description.length < 10 || product.description.length > 900) {
    errors.description = "Product description must be between 10 and 900 characters!";
  }

  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = "Valid image URL is required";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid price is required!";
  }

  return errors;
};

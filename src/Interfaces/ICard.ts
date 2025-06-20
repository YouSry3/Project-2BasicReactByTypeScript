/**
 * this Interface Property .
 * 
 * 1-Id: number.
 *
 * 2-Title: string.
 * 
 * 3-ImgUrl: string.
 * 
 * 4-Colors: string[].
 * 
 * 5-Category: object{}.
 * 
 * 6-Price: string.
 *  */

export interface ICard {
  id: string
  title: string
  description: string
  imageURL: string
  colors: string[]
  category: {
    name: string
    imageURL: string
  }
  price: string
}
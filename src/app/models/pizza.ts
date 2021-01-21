export class Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  qty: number;
  customerName: string;
  address: string;
  imageUrl: string;

  constructor(id: number, name: string, description = '', price = 0, qty:number,customerName:string,address: string, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.qty = qty,
    this.customerName = customerName,
    this.address =address,
    this.imageUrl = imageUrl
}


}

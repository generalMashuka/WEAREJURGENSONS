type Item = {
  id: number;
  name:string;
  img:string;
  description:string;
  price:number;
  category_id:number;
}

export type ItemId = Item['id']

export default Item;
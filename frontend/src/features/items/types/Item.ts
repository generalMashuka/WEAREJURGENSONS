type Item = {
  id: number;
  name:string;
  img:string;
  description:string | undefined;
  price:number;
  category_id:number | undefined;
}

export type ItemId = Item['id']

export default Item;
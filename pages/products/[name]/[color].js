import { useRouter } from "next/router";
export default function Color() {
  const router = useRouter();
  const { name, color } = router.query
  // http://localhost:3000/products/clothes/red
  return <h1>{ name }の{ color }カラーです</h1>;
}
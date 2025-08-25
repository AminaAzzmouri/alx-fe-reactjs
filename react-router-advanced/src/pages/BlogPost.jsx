import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return <h3>Showing Blog Post #{id}</h3>;
}

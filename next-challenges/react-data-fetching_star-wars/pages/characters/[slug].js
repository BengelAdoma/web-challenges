import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr"
import { useRouter } from "next/router";


const url = ' https://swapi.py4e.com/api/people'
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Character() {
  const router = useRouter();
    const id  = router.query.slug;
   
  const {data , error, isLoading}=useSWR( `https://swapi.py4e.com/api/people/${id}`, fetcher);
  console.log("data" ,data)

  
    
  if(error){
return <div>Error</div>
  }
if(isLoading){
  return <div>Page is loading</div>
}


  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}

import useSWR from "swr";
import { useState } from 'react';
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
     async function handleEditProduct(event){
           event.preventDefault();
           const formData = new FormData(event.target);
		      const ProductData = Object.fromEntries(formData);

          const response = await fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(ProductData),
     });
     if(response.ok){
      mutate()
     }
    }
    async function handleDeleteProduct() {
      const response = await fetch(`/api/products/${id}`, { method: 'DELETE' });
  
      if (!response.ok) {
        return;
      }
      router.push('/');
    }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    
    <ProductCard>
      <button type = "button"  onClick ={() =>{setIsEditMode(!isEditMode);}}>
      EDIT
      </button>
      <button type = "button"  onClick ={() =>handleDeleteProduct(id)}>
      DELETE
      </button>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      <StyledLink href="/">Back to all</StyledLink>
      <ProductForm onSubmit = {handleEditProduct}
      isEditMode = {true}/>
    </ProductCard>
    
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

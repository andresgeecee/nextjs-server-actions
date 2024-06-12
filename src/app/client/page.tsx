"use client";
import React, { useRef } from "react";
import { createProduct } from "../../actions/products-actions";
import { toast } from "sonner";

export default function ClientPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(formRef.current!);
    const product = await createProduct(formData);
    console.log(product);
    toast.success("Product created");
    formRef.current?.reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          className="border border-gray-300 rounded-md p-2 block mb-2"
          name="productName"
        />
        <input
          type="text"
          placeholder="price"
          className="border border-gray-300 rounded-md p-2 block"
          name="productPrice"
        />
        <button className="bg-orange-500 text-white p-2 rounded-md mt-2 block w-full">
          Save
        </button>
      </form>
    </div>
  );
}

import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://jompers.com/cdn/shop/products/KO_640Olive_2.jpg?crop=center&height=600&v=1676715597&width=400"
          alt=""
        ></img>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">Jompers</h3>
        <p className="mt-2 text-sm text-grey-500">MEN'S EMBROIDERD KURTAS</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

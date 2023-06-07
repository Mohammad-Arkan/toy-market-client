import React from "react";

const Gallery = () => {
  return (
    <div class="container mx-auto px-5 mb-32 lg:px-32">
      <h2 className="lg:my-24 my-10 text-center font-bold lg:text-5xl text-3xl underline">
        Speedy Showcase
      </h2>
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://drivenbybattat.com/wp-content/uploads/WH1139_PKG.png"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.meesho.com/images/products/200862879/mdrqs_512.jpg"
            />
          </div>
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://www.lego.com/cdn/cs/set/assets/blt32455d687cd6cc94/76917_alt1.png"
            />
          </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://www.lego.com/cdn/cs/set/assets/blt32455d687cd6cc94/76917_alt1.png"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://media-www.canadiantire.ca/product/seasonal-gardening/toys/toys-games/0503529/meccano-25-pack-set-ef8b58fe-2c23-4f25-949c-9455ec73f048.png"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

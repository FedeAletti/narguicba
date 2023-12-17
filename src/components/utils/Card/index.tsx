import React from "react";

interface CardsProps {
  horizontal?: boolean;
}

export function Card({ horizontal }: CardsProps) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl bg-[url('https://s3-alpha-sig.figma.com/img/e4bd/5eca/5409d0007c36e1bd7bea28db392f5cd8?Expires=1703462400&Signature=d2oggLTQZaWjKLcfRypozYqR9gt9EZnpIwnQhbxIW6ZlSfVGashUwk2~c2J70gtjsre6IYOpmC-H5RuSN3t9vcf7zW6sd9QkfPD0svbK08vrIBdXToIj3z0J2rPgHuqDCNVEAD1h51G3S-X~kUPDqBhi8fy1MQ5Lt5XLJqYXdUV2M7BXSHfyBjxm2CDsZdqadle6xNuJWVzXyGbRIa-WJgnVhEfBqO7HZ1lodjMBVH0FuHRmWJ8t-Ypr0dpt6KUsGZqXcDOeno8NjO73iwToOxLunuySNM~iLpiNfPFmhf~pDLP~NMeP7GxW2qJGC-0T3gGyDoiwARYd7xYgMAw9HA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div className={`card glass relative w-96 shadow-xl ${className}`}>
  //       <figure>
  //         <img
  //           alt="Shoes"
  //           src="https://s3-alpha-sig.figma.com/img/e4bd/5eca/5409d0007c36e1bd7bea28db392f5cd8?Expires=1703462400&Signature=d2oggLTQZaWjKLcfRypozYqR9gt9EZnpIwnQhbxIW6ZlSfVGashUwk2~c2J70gtjsre6IYOpmC-H5RuSN3t9vcf7zW6sd9QkfPD0svbK08vrIBdXToIj3z0J2rPgHuqDCNVEAD1h51G3S-X~kUPDqBhi8fy1MQ5Lt5XLJqYXdUV2M7BXSHfyBjxm2CDsZdqadle6xNuJWVzXyGbRIa-WJgnVhEfBqO7HZ1lodjMBVH0FuHRmWJ8t-Ypr0dpt6KUsGZqXcDOeno8NjO73iwToOxLunuySNM~iLpiNfPFmhf~pDLP~NMeP7GxW2qJGC-0T3gGyDoiwARYd7xYgMAw9HA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  //         />
  //       </figure>
  //       <div className="card card-body glass absolute bottom-0">
  //         <h2 className="card-title">
  //           Shoes!
  //           <div className="badge badge-secondary">NEW</div>
  //         </h2>
  //         <p>If a dog chews shoes whose shoes does he choose?</p>
  //         <div className="card-actions justify-end">
  //           <div className="badge badge-outline">Fashion</div>
  //           <div className="badge badge-outline">Products</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

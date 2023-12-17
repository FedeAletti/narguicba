import "@/app/main.css";
import {Card} from "../utils/Card";
import {ExternalLinkIcon} from "../icons";

export function Main() {
  return (
    <div className="flex w-screen flex-col px-8 ">
      <h2 className="mb-12 pt-24 text-center text-4xl">
        Brindando <span className="font-titles">BUENOS HUMOS</span> desde 2017
      </h2>

      <div className="-mx-2 -mb-4 flex flex-wrap justify-center gap-8">
        <div className="relative w-[28rem] cursor-pointer rounded-lg shadow-md">
          <img
            alt="Img by Meriç Dağlı https://unsplash.com/@meric"
            className="h-auto rounded-lg object-cover"
            src="https://s3-alpha-sig.figma.com/img/e4bd/5eca/5409d0007c36e1bd7bea28db392f5cd8?Expires=1703462400&Signature=d2oggLTQZaWjKLcfRypozYqR9gt9EZnpIwnQhbxIW6ZlSfVGashUwk2~c2J70gtjsre6IYOpmC-H5RuSN3t9vcf7zW6sd9QkfPD0svbK08vrIBdXToIj3z0J2rPgHuqDCNVEAD1h51G3S-X~kUPDqBhi8fy1MQ5Lt5XLJqYXdUV2M7BXSHfyBjxm2CDsZdqadle6xNuJWVzXyGbRIa-WJgnVhEfBqO7HZ1lodjMBVH0FuHRmWJ8t-Ypr0dpt6KUsGZqXcDOeno8NjO73iwToOxLunuySNM~iLpiNfPFmhf~pDLP~NMeP7GxW2qJGC-0T3gGyDoiwARYd7xYgMAw9HA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <div className="absolute bottom-0 left-0 right-0 h-48 w-[28rem] rounded-b-lg bg-black bg-opacity-50 p-4 text-white backdrop-blur">
            <p className="mt-2 text-xs uppercase">Conocé nuestros productos.</p>
            <h1 className="font-titles text-2xl">La mayor variedad del país</h1>
            <button
              className="btn my-4 rounded-2xl bg-white text-base text-primary hover:bg-white/95 hover:text-primary "
              type="button"
            >
              Explorar tienda
              <ExternalLinkIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="relative h-80 w-96 cursor-pointer rounded-lg shadow-md md:w-[42rem]">
            <img
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="h-full w-full overflow-hidden rounded-lg object-cover"
              src="https://i.ibb.co/rc2H2gK/event-card-banner.jpg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40  w-full rounded-b-lg bg-black bg-opacity-50 p-4 text-white backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="mt-2 text-xs uppercase">SERVICIO PREMIUM</p>
                  <h1 className="font-titles text-2xl">ESTAMOS EN TUS CELEBRACIONES</h1>
                </div>
                <button
                  className="btn my-4 rounded-2xl bg-white text-base text-primary hover:bg-white/95 hover:text-primary "
                  type="button"
                >
                  Saber más
                  <ExternalLinkIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-80 w-96 cursor-pointer rounded-lg shadow-md md:w-[42rem]">
            <img
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="h-full w-full overflow-hidden rounded-lg object-cover"
              src="https://i.ibb.co/sp7fMW7/community.png"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 w-full rounded-b-lg bg-black bg-opacity-50 p-4 text-white backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="mt-2 text-xs uppercase">¡buenos humos!</p>
                  <h1 className="font-titles text-2xl">participá de la comunidad</h1>
                </div>
                <button
                  className="btn my-4 rounded-2xl bg-white text-base text-primary hover:bg-white/95 hover:text-primary "
                  type="button"
                >
                  Ir al Blog
                  <ExternalLinkIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

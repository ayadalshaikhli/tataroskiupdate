import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import { BsBag } from "react-icons/bs";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as fbq from "../lib/google-analytics/";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});
export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  if (cartTotal >= 35) {
    var Good = "Congratulations! We pay shipping!";
  } else {
    var shippingaway = Math.round(35 - cartTotal);
    var free = "You're only" + " $" + shippingaway + " from free shipping";
  }

  useEffect(() => {
    const showAnim = gsap
      .from(".nav-main", {
        yPercent: -200,
        paused: true,
        duration: 0.1,
        opacity: 0,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,

      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  return (
    <header className="fixed w-full  flex flex-col text-center z-20  text-white colornav navbar">
      <div className="shipping text-center bg-gray-800/75">
        <h1>
          {free} {Good}
        </h1>
      </div>
      <div className="nav-main bg-gray-800/75 flex flex-col sm:flex-row p-2  text-center items-center">
        <div className="logo">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <h1 className="text-2xl pt-1   font-mono">
                <span className="late-text">Tata</span>

                <span className="omo">roski</span>
              </h1>
            </a>
          </Link>
        </div>
        <div className="nav-pages text-center md:ml-72 md:pl-96 flex justify-around">
          <div>
            <Link href="/collections/body=">
              <a href="#body" className="cursor-pointer">
                <span className="text-lg pt-1 px-2  sm:px-4">Body</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/collections/sunglasses-1">
              <a href="/collections/sunglasses-1" className="cursor-pointer ">
                <span className="text-lg pt-1 px-2  sm:px-4">Sunglasses</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/collections/earrings">
              <a href="#earrings" className="cursor-pointer ">
                <span className="text-lg pt-1 px-2  sm:px-4">Earrings</span>
              </a>
            </Link>
          </div>

          <div className="nav-cart">
            <a
              className="text-md font-bold cursor-pointer  absolute right-5"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <div className="relative">
                <BsBag size="1.5rem" />
                <div
                  style={{ fontSize: "10px", left: "10px" }}
                  className="absolute top-1 text-sm"
                >
                  {cartQuantity}
                </div>
              </div>
            </a>
            <MiniCart cart={cart} />
          </div>
        </div>
      </div>
    </header>
  );
}

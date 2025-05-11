import React from "react";

const Footer = () => {
  const shop = [
    { href: "#", title: "Store" },
    { href: "#", title: "Mac" },
    { href: "#", title: "iPad" },
    { href: "#", title: "iPhone" },
    { href: "#", title: "Watch" },
    { href: "#", title: "AirPods" },
    { href: "#", title: "TV & Home" },
    { href: "#", title: "AirTag" },
    { href: "#", title: "Accessories" },
    { href: "#", title: "Gift Cards" },
  ];

  const Account = [
    { href: "#", title: "Manage Your Apple Account" },
    { href: "#", title: "Apple Store Account" },
    { href: "#", title: "iCloud.com" },
  ];

  const Entertainment = [
    { href: "#", title: "Apple One" },
    { href: "#", title: "Apple TV+" },
    { href: "#", title: "Apple Music" },
    { href: "#", title: "Apple Arcade" },
    { href: "#", title: "Apple Podcasts" },
    { href: "#", title: "Apple Books" },
    { href: "#", title: "App Store" },
  ];

  const AppleStore = [
    { href: "#", title: "Find a Store" },
    { href: "#", title: "Genius Bar" },
    { href: "#", title: "Today at Apple" },
    { href: "#", title: "Group Reservations" },
    { href: "#", title: "Apple Camp" },
    { href: "#", title: "Apple Trade In" },
    { href: "#", title: "Ways to Buy" },
    { href: "#", title: "Recycling Programme" },
    { href: "#", title: "Order Status" },
    { href: "#", title: "Shopping Help" },
  ];

  return (
    <div className="bg-gray-100 text-xs  ">
    <div className="flex gap-10 p-5 border border-t-1 sm:justify-center">
      <div>
        <h1>Shop and Learn</h1>
        <ul className="text-gray-500 space-y-2">
          {shop.map((item, index) => (
            <li key={index} >
              <a className="hover:underline" href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h1>Account</h1>
          <ul className="text-gray-500 space-y-2">
            {Account.map((item, index) => (
              <li key={index}>
                <a className="hover:underline" href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Entertainment</h1>
          <ul className="text-gray-500 space-y-2">
            {Entertainment.map((item, index) => (
              <li key={index}>
                <a className="hover:underline" href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h1>Apple Store</h1>
        <ul className="text-gray-500 space-y-2">
          {AppleStore.map((item, index) => (
            <li key={index}>
              <a className="hover:underline" href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div>
      <p className="text-gray-500 p-5 text-center">More ways to shop: <a href="" className="text-blue-600 underline"> Find an Apple Store</a> or <a href="" className="text-blue-600 underline">other retailer</a> near you. Or call <a href="" className="text-blue-600 underline">000800 040 1966.</a> </p>
    </div>
    <div>
      <p  className="text-gray-500 p-5 text-center">Copyright © 2025 Apple Inc. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Footer;

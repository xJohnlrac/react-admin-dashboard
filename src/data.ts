export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://i.pinimg.com/474x/b9/98/d5/b998d544c94d14909d7b605c303b6eb8.jpg",
    username: "Rhea Parra",
    email: "rhea.parra@gmail.com",
    amount: "1.009",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/474x/d5/f5/fc/d5f5fca3d27ccd8e9437c564b5701286.jpg",
    username: "John Carl Abucay",
    email: "johnlrac.abucay@gmail.com",
    amount: "1.021",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/55/dc/94/55dc941ae2ac0c8c3ca9e47c7f1b544d.jpg",
    username: "Kristene Escalicas",
    email: "kristene.escalicas@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/474x/51/fa/9e/51fa9e365265c97b6433b2033451297b.jpg",
    username: "Marifaith Olaa",
    email: "marifaith.olaa@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/474x/35/b3/51/35b35122afcfdb33d35265d0f944c9cf.jpg",
    username: "Rodito Modequillo",
    email: "rodito.modequillo@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/474x/c5/6b/29/c56b29b2d048eec28d7f31f6c7023f2e.jpg",
    username: "Lester Lapera",
    email: "lester.lapera@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/474x/16/d6/8c/16d68c10759fd5f322fa777a44126420.jpg",
    username: "Jessie Antigua",
    email: "jessie.antigua@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/53/b8/a4/53b8a44cec49c29949bf96439a910d2f.jpg",
    lastName: "Parra",
    firstName: "Rhea",
    email: "rhea.parra@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/d6/45/e6/d645e6f4c1e39f97fa095cd97de52654.jpg",
    lastName: "Granada",
    firstName: "Kate",
    email: "kate.granada@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/5e/4b/63/5e4b63c18eb25f29a7270a8ef8e7937c.jpg",
    lastName: "Zamora",
    firstName: "Aira",
    email: "aira.zamora@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/1e/16/72/1e1672062d61ef4776f0fe02d4f8aa9e.jpg",
    lastName: "Garbosa",
    firstName: "Yoshrich",
    email: "yoshrich.garbosa@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/eb/71/45/eb7145f8bb12ecc5c248b9ae47fcbc5b.jpg",
    lastName: "Abucay",
    firstName: "Joveth",
    email: "joveth.abucay@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/564x/8a/73/9f/8a739fb48cf37e27683ac1bcffb07386.jpg",
    lastName: "Siarot",
    firstName: "Ian",
    email: "ian.siarot@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://i.pinimg.com/564x/88/ab/3f/88ab3ffc4008e2e19ab3b94fff28f9ed.jpg",
    lastName: "Dapat",
    firstName: "Queenge",
    email: "queenge.dapat@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/564x/f9/55/77/f95577e94375588e4b84aaab7154ce0f.jpg",
    lastName: "Caparroso",
    firstName: "Nadine",
    email: "nadine.caparroso@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://i.pinimg.com/564x/e0/0b/de/e00bde493b784fbfc39a94468a96f321.jpg",
    lastName: "Guinto",
    firstName: "Angel",
    email: "angel.guinto@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://i.pinimg.com/564x/f7/8d/92/f78d92f83e28dc3fc979637431493542.jpg",
    lastName: "Dela",
    firstName: "Nathaniel",
    email: "nathaniel.dela@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://i.pinimg.com/564x/17/fc/2c/17fc2c383e44a44fafbaa9c3ef1b64ee.jpg",
    lastName: "Famor",
    firstName: "Wynn",
    email: "wynn.famor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://i.pinimg.com/474x/e0/d2/86/e0d28691ebd116887a5a8d32ab89a6cb.jpg",
    lastName: "Armenion",
    firstName: "Jenenia",
    email: "jenenia.armenion@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://i.pinimg.com/564x/5d/d4/8f/5dd48fad94214c7c6c9245d0480976c4.jpg",
    lastName: "Brigoli",
    firstName: "Andrey",
    email: "andrey.brigoli@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://i.pinimg.com/564x/73/e4/de/73e4de5c2ba06b1ae5518b746c829cce.jpg",
    lastName: "Olaa",
    firstName: "Shane",
    email: "shane.olaa@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://i.pinimg.com/564x/d2/04/d8/d204d8b6740b111c51347f6b25a7a6f0.jpg",
    lastName: "Supangan",
    firstName: "Alix",
    email: "alix.supangan@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "John Carl",
  img: "https://i.pinimg.com/474x/d5/f5/fc/d5f5fca3d27ccd8e9437c564b5701286.jpg",
  info: {
    username: "@AbuKiks",
    fullname: "John Carl",
    email: "johncarl.abucay@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Carl purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Carl added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Carl purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Carl reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Carl added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Carl reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Carl purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Lester Lapera added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Jessie Antigua purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Kate Granada reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Kristene Escalicas added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Marifaith Olaa reviewed the product",
      time: "2 months ago",
    },
  ],
};
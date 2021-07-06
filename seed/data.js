import db from '../db/connection.js';
import Product from '../models/product.js';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: 'arya',
    email: 'arya@gmail.com',
    password_digest: await bcrypt.hash('arya01', 12),
  });
  await user1.save();

  const user2 = new User({
    username: 'james',
    email: 'james@gmail.com',
    password_digest: await bcrypt.hash('james01', 12),
  });
  await user2.save();

  const user3 = new User({
    username: 'christian',
    email: 'christian@gmail.com',
    password_digest: await bcrypt.hash('christian01', 12),
  });
  await user3.save();

  const user4 = new User({
    username: 'spencer',
    email: 'spencer@gmail.com',
    password_digest: await bcrypt.hash('spencer01', 12),
  });
  await user4.save();

  const products = [
    {
      name: 'AMD RYZEN 5 3600',
      price: 219.99,
      description:
        'AMD Ryzen 5 3600 6 of CPU Cores Base Clock 3.6GHz Max Boost Clock 4.2GHzTotal L2 Cache 3MB;Total L3 Cache 32MB;Thermal Solution Wraith Stealth',
      category: 'cpu',
      imgURL: 'https://c1.neweggimages.com/ProductImage/19-113-569-V01.jpg',
      link: 'https://www.newegg.com/amd-ryzen-5-3600/p/N82E16819113569',
      userId: user1
    },
    {
      name: 'Intel Core i7 10700K',
      price: 312.95,
      description:
        '10th Gen Intel Core i7-10700K unlocked desktop processor. Featuring Intel Turbo Boost Max Technology 3.0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost.',
      category: 'cpu',
      imgURL: 'https://c1.neweggimages.com/ProductImage/19-118-123-V01.jpg',
      link: 'https://www.newegg.com/intel-core-i7-10700k-core-i7-10th-gen/p/N82E16819118123',
      userId: user1
    },
    {
      name: 'G.Skill Ripjaws V Series 16GB',
      price: 82.99,
      description:
        'High performance dual-channel DDR4 memory designed for maximum compatibility and cutting-edge performance with the latest Intel Core processors. Built with the finest components, tested under the most rigorous conditions, the 16GB 3200MHz Kit is the perfect choice for building a new performance system or for a simple memory upgrade.',
      category: 'ram',
      imgURL: 'https://c1.neweggimages.com/ProductImage/20-231-941-03.jpg',
      link: 'https://www.newegg.com/g-skill-16gb-288-pin-ddr4-sdram/p/N82E16820231941',
      userId: user1
    },
    {
      name: 'G.Skill Trident Z RGB 16BG',
      price: 114.99,
      description:
        'G.SKILL Trident Z RGB series is one of the worlds most revolutionary RGB lighting DDR4 memory kits. Featuring a complete row of LEDs brilliantly displayed through an uncovered full-length light bar, Trident Z RGB series is capable of displaying a wide range of vivid colors. Along with the strong foundation of G.SKILL overclocking memory development technology, highly screened components, and custom 10-layer PCB, the Trident Z RGB series is the ideal DDR4 solution for building an extremely stylish performance PCs.',
      category: 'ram',
      imgURL: 'https://c1.neweggimages.com/ProductImage/20-232-728-V01.jpg',
      link: 'https://www.newegg.com/g-skill-16gb-288-pin-ddr4-sdram/p/N82E16820232728',
      userId: user2
    },
    {
      name: 'TUF Gaming X570-Pro',
      price: 219.99,
      description:
        'TUF Gaming X570-Pro (Wi-Fi) distills the essential elements of the latest AMD platform and combines them with game-ready features and proven durability. Engineered with military-grade components, upgraded power solutions and a comprehensive set of cooling options, these motherboards deliver rock-solid performance with unwavering gaming stability.',
      category: 'motherboard',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/629457_186510_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/629457/asus-x570-pro-tuf-gaming-wifi-amd-am4-atx-motherboard',
      userId: user2
    },
    {
      name: 'ASUS Z490 Prime Intel',
      price: 174.99,
      description:
        'ASUS Prime series is expertly engineered to unleash the full potential of 10th Gen Intel Core processors. Boasting a robust power design, comprehensive cooling solutions and intelligent tuning options, Prime Z490 series motherboards provide daily users and DIY PC builders a range of performance tuning options via intuitive software and firmware features.',
      category: 'motherboard',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/623215_106641_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/623215/asus-z490-prime-intel-lga-1200-atx-motherboard',
      userId: user2
    },
    {
      name: 'EVGA GeForce RTX 3080 FTW3',
      price: 899.99,
      description:
        "The EVGA GeForce RTX 3080 delivers the unprecedented performance that gamers crave for 4K resolution gaming, powered by the NVIDIA Ampere architecture. It's built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience. Combined with the next generation of design, cooling, and overclocking with EVGA Precision X1, the EVGA GeForce RTX 3080 Series presents a new definition in ultimate performance.",
      category: 'gpu',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/628346_173013_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/628346/evga-geforce-rtx-3080-ftw3-ultra-gaming-triple-fan-10gb-gddr6x-pcie-40-graphics-card',
      userId: user3
    },
    {
      name: 'EVGA GeForce RTX 3080Ti FTW3',
      price: 1399.99,
      description:
        "The EVGA GeForce RTX 3080 Ti delivers the unprecedented performance that gamers crave for 4K resolution gaming: powered by the NVIDIA Ampere architecture. It's built with enhanced RT Cores and Tensor Cores: new streaming multiprocessors: and superfast G6X memory for an amazing gaming experience. Combined with the next generation of design: cooling: and overclocking with EVGA Precision X1: the EVGA GeForce RTX 3080 Series presents a new definition in ultimate performance.",
      category: 'gpu',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/638317_283739_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/638317/evga-nvidia-geforce-rtx-3080-ti-ftw3-ultra-gaming-triple-fan-12gb-gddr6x-pcie-40-graphics-card',
      userId: user3
    },
    {
      name: 'Samsung 980 SSD 1TB M.2 NVMe',
      price: 119.99,
      description:
        "Harness your PC's potential with the 980. Whether you need a boost for gaming or a seamless workflow for heavy graphics, the 980 is a smart choice for outstanding SSD performance - and it's all backed by an NVMe interface and PCIe 3.0 technology.",
      category: 'storage',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/633661_232421_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/633661/samsung-980-ssd-1tb-(mz-v8v1t0b-am)-m2-nvme[…]internal-solid-state-drive-with-v-nand-3-bit-mlc-technology',
      userId: user3
    },
    {
      name: 'Samsung 870 EVO 1TB SSD',
      price: 119.99,
      description:
        "870 EVO is Samsung's latest model of the world's best selling SSD series, with the latest V-NAND technology and the new MKX controller. 870 EVO proves why the EVO series has been the favorite choice among general users by showing the best in class performance, committed reliability and convenient usage with a variety of features.",
      category: 'storage',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/632085_216952_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/632085/samsung-870-evo-1tb-ssd-3-bit-mlc-v-nand-sata-iii-6gb-s-25-internal-solid-state-drive',
      userId: user4
    },
    {
      name: 'Lian Li Lancool II Mesh',
      price: 119.99,
      description:
        'LANCOOL II MESH Performance features a mesh front panel and mesh bottom left shroud panel, honeycomb vent design and built-in PWM fans, ensuring bountiful airflow delivered to your components while the system runs at peak performance.',
      category: 'case',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/638084_281121_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/638084/lian-li-lancool-ii-mesh-tempered-glass-eatx-full-tower-computer-case-performance-black',
      userId: user4
    },
    {
      name: 'Lian Li Lancool II Mesh RGB',
      price: 119.99,
      description:
        'LANCOOL II MESH RGB features a mesh front panel and mesh bottom left shroud panel, honeycomb vent design and built-in PWM fans, ensuring bountiful airflow delivered to your components while the system runs at peak performance.',
      category: 'case',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/638085_281139_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/638085/lian-li-lancool-ii-tempered-glass-eatx-mesh-mid-tower-computer-case-white#photogroup-1',
      userId: user4
    },
    {
      name: 'EVGA SuperNOVA 850 GA',
      price: 149.99,
      description:
        "Introducing the EVGA SuperNOVA GA Series of power supplies - the newest addition to the outstanding line of EVGA Power Supplies. Featuring 80 Plus Gold certification, 100% Japanese capacitors, a durable double-ball bearing fan, and a fully modular design, this power supply is built for long-term usage and durability. Building upon EVGA's line of 80 Plus Gold rated power supplies, the EVGA GA Series combines all these features at a great price.",
      category: 'power supply',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/624907_128025_01_front_zoom.jpg',
      link: 'https://www.microcenter.com/product/624907/evga-supernova-850-ga-850-watt-80-plus-gold-atx-fully-modular-power-supply',
      userId: user1
    },
    {
      name: 'EVGA SuperNOVA 750 GT',
      price: 109.99,
      description:
        "Introducing the EVGA SuperNOVA GT Series of power supplies - the newest addition to the outstanding line of EVGA Power Supplies. Featuring 80 Plus Gold certification, 100% Japanese capacitors, a fluid dynamic bearing fan, and a fully modular design, this power supply is built for long-term usage and durability. Building upon EVGA's line of 80 Plus Gold rated power supplies, the EVGA GT Series combines all these features at a great price.",
      category: 'power supply',
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/624764_127753_01_package_zoom.jpg',
      link: 'https://www.microcenter.com/product/624764/evga-supernova-750-gt-750-watt-80-plus-gold-atx-fully-modular-power-supply',
      userId: user2
    },
  ];

  await Product.insertMany(products);
  console.log('Created users & products');

  db.close();
};

insertData();
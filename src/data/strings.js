const stringRows = [
  {
    "brand": "Luxilon",
    "line": "ALU Power",
    "price": "$19.00",
    "model": "ALU Power 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-60 lbs",
    "stiffness": "High",
    "archetype": "Tour Control",
    "bestFor": "The benchmark poly - firm, low-powered, excellent spin bite and direction"
  },
  {
    "brand": "Luxilon",
    "line": "ALU Power",
    "price": "$19.00",
    "model": "ALU Power 130",
    "gauge": "16 / 1.30mm",
    "stringType": "Polyester",
    "tensionRange": "40-60 lbs",
    "stiffness": "High",
    "archetype": "Heavy Hitter",
    "bestFor": "Thicker gauge for added durability and plow-through on heavy balls"
  },
  {
    "brand": "Luxilon",
    "line": "ALU Power",
    "price": "$19.00",
    "model": "ALU Power Rough 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-60 lbs",
    "stiffness": "High",
    "archetype": "Max Spin",
    "bestFor": "Textured surface grabs the ball for extra topspin kick"
  },
  {
    "brand": "Luxilon",
    "line": "ALU Power",
    "price": "$19.00",
    "model": "ALU Power Fluoro 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-60 lbs",
    "stiffness": "Med-High",
    "archetype": "Soft ALU",
    "bestFor": "Fluorocarbon coating softens the classic ALU feel for longer sessions"
  },
  {
    "brand": "Luxilon",
    "line": "4G",
    "price": "$19.00",
    "model": "4G 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Spin + Feel",
    "bestFor": "Softer co-poly than ALU with enhanced spin and improved comfort"
  },
  {
    "brand": "Luxilon",
    "line": "4G",
    "price": "$19.00",
    "model": "4G Rough 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Textured Spin",
    "bestFor": "Rough surface on 4G base for spin-focused players wanting more feel"
  },
  {
    "brand": "Luxilon",
    "line": "Element",
    "price": "$16.00",
    "model": "Element 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Softer Poly",
    "bestFor": "Smoother feel than ALU Power - gentler on the arm for full poly users"
  },
  {
    "brand": "Luxilon",
    "line": "Savage",
    "price": "$17.00",
    "model": "Savage 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "High",
    "archetype": "Crisp Control",
    "bestFor": "Sharp co-poly profile with tight snapback for flat aggressive hitters"
  },
  {
    "brand": "Luxilon",
    "line": "Savage",
    "price": "$17.00",
    "model": "Savage Lime 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "High",
    "archetype": "Crisp Control",
    "bestFor": "Same profile as Savage with a softer outer coating for added comfort"
  },
  {
    "brand": "Babolat",
    "line": "RPM Blast",
    "price": "$17.00",
    "model": "RPM Blast 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-60 lbs",
    "stiffness": "High",
    "archetype": "Spin Monster",
    "bestFor": "Octagonal co-poly creates violent topspin - Nadal's string of choice"
  },
  {
    "brand": "Babolat",
    "line": "RPM Blast",
    "price": "$17.00",
    "model": "RPM Blast 130",
    "gauge": "16 / 1.30mm",
    "stringType": "Polyester",
    "tensionRange": "40-60 lbs",
    "stiffness": "High",
    "archetype": "Spin / Durability",
    "bestFor": "Thicker RPM profile for chronic string breakers who still want spin"
  },
  {
    "brand": "Babolat",
    "line": "RPM Blast",
    "price": "$17.00",
    "model": "RPM Blast Rough 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-60 lbs",
    "stiffness": "High",
    "archetype": "Extra Bite",
    "bestFor": "Textured RPM surface amplifies friction for maximum topspin launch"
  },
  {
    "brand": "Babolat",
    "line": "RPM Power",
    "price": "$17.00",
    "model": "RPM Power 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Spin + Power",
    "bestFor": "Round poly with more pop than RPM Blast - spin without sacrificing depth"
  },
  {
    "brand": "Babolat",
    "line": "RPM Team",
    "price": "$14.00",
    "model": "RPM Team 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Budget Spin",
    "bestFor": "Round co-poly at a lower price point - reliable club player poly"
  },
  {
    "brand": "Babolat",
    "line": "RPM Soft",
    "price": "$17.00",
    "model": "RPM Soft 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Comfort Spin",
    "bestFor": "Softest RPM variant - spin and control without the typical poly harshness"
  },
  {
    "brand": "Tecnifibre",
    "line": "Black Code",
    "price": "$16.00",
    "model": "Black Code 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Control + Spin",
    "bestFor": "4S square profile bites the ball for deep penetrating topspin"
  },
  {
    "brand": "Tecnifibre",
    "line": "Black Code",
    "price": "$16.00",
    "model": "Black Code 4S 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Advanced Spin",
    "bestFor": "Sharper 4-sided edge than round Black Code for maximum friction"
  },
  {
    "brand": "Tecnifibre",
    "line": "Ice Code",
    "price": "$16.00",
    "model": "Ice Code 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Soft Control",
    "bestFor": "Blue-tinted smooth poly with reduced stiffness - easier on the arm"
  },
  {
    "brand": "Head",
    "line": "Hawk",
    "price": "$15.00",
    "model": "Hawk 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Crisp Poly",
    "bestFor": "Firm snapback and low power - excellent for flat attackers"
  },
  {
    "brand": "Head",
    "line": "Hawk",
    "price": "$15.00",
    "model": "Hawk Touch 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Softer Hawk",
    "bestFor": "Smoother variant of Hawk with a more cushioned feel at contact"
  },
  {
    "brand": "Head",
    "line": "Lynx",
    "price": "$15.00",
    "model": "Lynx 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Soft Poly",
    "bestFor": "Smooth co-poly with reduced shock - comfortable full poly setup"
  },
  {
    "brand": "Head",
    "line": "Lynx",
    "price": "$15.00",
    "model": "Lynx Tour 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Tour Control",
    "bestFor": "Firmer Lynx variant aimed at competitive players wanting more feedback"
  },
  {
    "brand": "Solinco",
    "line": "Hyper-G",
    "price": "$13.00",
    "model": "Hyper-G 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "High",
    "archetype": "Heavy Spin",
    "bestFor": "Square profile at a budget price - massive topspin without breaking the bank"
  },
  {
    "brand": "Solinco",
    "line": "Hyper-G",
    "price": "$13.00",
    "model": "Hyper-G Soft 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Comfort Spin",
    "bestFor": "Softer version of Hyper-G - same square profile, more arm-friendly feel"
  },
  {
    "brand": "Solinco",
    "line": "Tour Bite",
    "price": "$13.00",
    "model": "Tour Bite 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "High",
    "archetype": "Spin / Durability",
    "bestFor": "Thin diamond profile digs into the ball for elite spin percentages"
  },
  {
    "brand": "Solinco",
    "line": "Tour Bite",
    "price": "$13.00",
    "model": "Tour Bite Soft 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Softer Bite",
    "bestFor": "Smoother coating on Tour Bite for players who want grip without harshness"
  },
  {
    "brand": "Solinco",
    "line": "Confidential",
    "price": "$13.00",
    "model": "Confidential 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Soft Poly",
    "bestFor": "One of Solinco's most comfortable polys - smooth feel with good tension maintenance"
  },
  {
    "brand": "Solinco",
    "line": "Confidential",
    "price": "$13.00",
    "model": "Confidential 120",
    "gauge": "17L / 1.20mm",
    "stringType": "Polyester",
    "tensionRange": "40-55 lbs",
    "stiffness": "Med",
    "archetype": "Fine Touch",
    "bestFor": "Thinner gauge Confidential for more feel and bite at the cost of durability"
  },
  {
    "brand": "Solinco",
    "line": "Mach",
    "price": "$13.00",
    "model": "Mach 10 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Power Poly",
    "bestFor": "Rounder profile with extra pace - a poly for players wanting depth without going full gut"
  },
  {
    "brand": "Solinco",
    "line": "Mach",
    "price": "$13.00",
    "model": "Mach 1 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Balanced Poly",
    "bestFor": "Versatile all-court poly - sits between Mach 10's power and Hyper-G's spin"
  },
  {
    "brand": "Solinco",
    "line": "Revolution",
    "price": "$13.00",
    "model": "Revolution 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Spin + Comfort",
    "bestFor": "Hexagonal profile with a softer feel - good entry point into shaped polys"
  },
  {
    "brand": "Solinco",
    "line": "Vanquish",
    "price": "$13.00",
    "model": "Vanquish 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Control + Touch",
    "bestFor": "Smooth round co-poly focused on placement and feel over raw spin"
  },
  {
    "brand": "Toroline",
    "line": "Pentagonal",
    "price": "$11.00",
    "model": "Pentagonal 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Spin Poly",
    "bestFor": "5-sided shape gives aggressive ball grab - underrated budget spin string"
  },
  {
    "brand": "Toroline",
    "line": "Pentagonal",
    "price": "$11.00",
    "model": "Pentagonal 120",
    "gauge": "17L / 1.20mm",
    "stringType": "Polyester",
    "tensionRange": "38-55 lbs",
    "stiffness": "Med-High",
    "archetype": "Fine Spin",
    "bestFor": "Thinner pentagonal for extra spin and feel at the expense of durability"
  },
  {
    "brand": "Toroline",
    "line": "Blazer",
    "price": "$11.00",
    "model": "Blazer 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Smooth Control",
    "bestFor": "Round co-poly with a clean, crisp response - reliable budget workhorse"
  },
  {
    "brand": "Toroline",
    "line": "Blazer",
    "price": "$11.00",
    "model": "Blazer 130",
    "gauge": "16 / 1.30mm",
    "stringType": "Polyester",
    "tensionRange": "40-60 lbs",
    "stiffness": "Med-High",
    "archetype": "Durable Control",
    "bestFor": "Thicker Blazer gauge for heavy hitters needing longevity over finesse"
  },
  {
    "brand": "Toroline",
    "line": "Eruption",
    "price": "$12.00",
    "model": "Eruption 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "High",
    "archetype": "Bite Poly",
    "bestFor": "Sharp hexagonal profile that bites hard - excellent spin depth for the price"
  },
  {
    "brand": "Toroline",
    "line": "Eruption",
    "price": "$12.00",
    "model": "Eruption 120",
    "gauge": "17L / 1.20mm",
    "stringType": "Polyester",
    "tensionRange": "38-55 lbs",
    "stiffness": "High",
    "archetype": "Tour Spin",
    "bestFor": "Thin Eruption gauge maximizes snap-back and spin for advanced baseliners"
  },
  {
    "brand": "Toroline",
    "line": "Chalkboard",
    "price": "$12.00",
    "model": "Chalkboard 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Flat Control",
    "bestFor": "Round low-powered poly built for flat hitters who want deep placement"
  },
  {
    "brand": "Toroline",
    "line": "Storm",
    "price": "$11.00",
    "model": "Storm 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "All-Round Poly",
    "bestFor": "Comfortable textured poly balancing spin, control, and durability well"
  },
  {
    "brand": "Kirschbaum",
    "line": "Max Power",
    "price": "$12.00",
    "model": "Max Power 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Comfortable Poly",
    "bestFor": "Smooth round poly with a surprisingly soft feel - great budget option"
  },
  {
    "brand": "Kirschbaum",
    "line": "Max Power",
    "price": "$12.00",
    "model": "Max Power Rough 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Textured Power",
    "bestFor": "Roughened Max Power for added topspin without the stiffness of harder polys"
  },
  {
    "brand": "Kirschbaum",
    "line": "Pro Line",
    "price": "$13.00",
    "model": "Pro Line II 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Classic Poly",
    "bestFor": "Firm round co-poly - reliable control and durability, a long-standing club favorite"
  },
  {
    "brand": "Kirschbaum",
    "line": "Xplosive",
    "price": "$12.00",
    "model": "Xplosive Speed 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Fast Poly",
    "bestFor": "Slick surface reduces drag through the air - suited for serve-and-volley games"
  },
  {
    "brand": "Volkl",
    "line": "Cyclone",
    "price": "$13.00",
    "model": "Cyclone 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Spin Focus",
    "bestFor": "5-sided profile for consistent topspin in a comfortable co-poly"
  },
  {
    "brand": "Volkl",
    "line": "Cyclone",
    "price": "$13.00",
    "model": "Cyclone Tour 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "High",
    "archetype": "Firmer Spin",
    "bestFor": "Stiffer version of Cyclone with more directional control for advanced players"
  },
  {
    "brand": "Volkl",
    "line": "V-Star",
    "price": "$14.00",
    "model": "V-Star 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Soft Poly",
    "bestFor": "One of Volkl's softest polys - plush feel with solid spin and tension retention"
  },
  {
    "brand": "Signum Pro",
    "line": "Poly Plasma",
    "price": "$12.00",
    "model": "Poly Plasma 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Smooth Control",
    "bestFor": "Slick round poly with impressive durability and a smooth, clean hit"
  },
  {
    "brand": "Signum Pro",
    "line": "Firestorm",
    "price": "$12.00",
    "model": "Firestorm 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Spin Poly",
    "bestFor": "Textured co-poly that grabs the ball well - strong spin numbers for the price"
  },
  {
    "brand": "Signum Pro",
    "line": "Thunderstorm",
    "price": "$12.00",
    "model": "Thunderstorm 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "High",
    "archetype": "Power Poly",
    "bestFor": "High-launch co-poly for players who want depth and pace on flat shots"
  },
  {
    "brand": "Yonex",
    "line": "Poly Tour",
    "price": "$16.00",
    "model": "Poly Tour Pro 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Tour Spin",
    "bestFor": "Octagonal profile mirrors RPM-style spin with a slightly softer feel"
  },
  {
    "brand": "Yonex",
    "line": "Poly Tour",
    "price": "$16.00",
    "model": "Poly Tour Strike 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "High",
    "archetype": "Flat Hitter",
    "bestFor": "Round poly engineered for powerful flat groundstrokes and serve speed"
  },
  {
    "brand": "Yonex",
    "line": "Poly Tour",
    "price": "$16.00",
    "model": "Poly Tour Spin 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Max Spin",
    "bestFor": "Hexagonal profile designed purely for maximum topspin production"
  },
  {
    "brand": "Yonex",
    "line": "Poly Tour",
    "price": "$16.00",
    "model": "Poly Tour Rev 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "Comfortable Spin",
    "bestFor": "Softest Poly Tour variant - spin production with reduced arm fatigue"
  },
  {
    "brand": "Wilson",
    "line": "Revolve",
    "price": "$14.00",
    "model": "Revolve 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med",
    "archetype": "All-Court Poly",
    "bestFor": "Smooth round co-poly balancing control, durability, and arm comfort"
  },
  {
    "brand": "Wilson",
    "line": "Revolve",
    "price": "$14.00",
    "model": "Revolve Spin 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Polyester",
    "tensionRange": "40-58 lbs",
    "stiffness": "Med-High",
    "archetype": "Spin Poly",
    "bestFor": "Shaped variant of Revolve for players adding more topspin to their game"
  },
  {
    "brand": "Wilson",
    "line": "NXT",
    "price": "$16.00",
    "model": "NXT 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low",
    "archetype": "Arm Comfort",
    "bestFor": "Hundreds of microfibers mimic natural gut softness - top choice for arm pain"
  },
  {
    "brand": "Wilson",
    "line": "NXT",
    "price": "$14.00",
    "model": "NXT 17",
    "gauge": "17 / 1.25mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low",
    "archetype": "Soft Power",
    "bestFor": "Thinner gauge adds pop and feel - best all-round multifilament option"
  },
  {
    "brand": "Tecnifibre",
    "line": "X-One Biphase",
    "price": "$20.00",
    "model": "X-One Biphase 17",
    "gauge": "17 / 1.24mm",
    "stringType": "Multifilament",
    "tensionRange": "50-63 lbs",
    "stiffness": "Low",
    "archetype": "Premium Multi",
    "bestFor": "Elite natural gut alternative - top-tier feel, power, and tension hold"
  },
  {
    "brand": "Tecnifibre",
    "line": "TGV",
    "price": "$16.00",
    "model": "TGV 17",
    "gauge": "17 / 1.25mm",
    "stringType": "Multifilament",
    "tensionRange": "50-63 lbs",
    "stiffness": "Low",
    "archetype": "Feel + Control",
    "bestFor": "Dense braid construction delivers lively feedback with soft touch"
  },
  {
    "brand": "Tecnifibre",
    "line": "HDMX",
    "price": "$18.00",
    "model": "HDMX 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low-Med",
    "archetype": "Durable Multi",
    "bestFor": "Tough outer wrap protects the soft core - longer lifespan than most multis"
  },
  {
    "brand": "Head",
    "line": "Velocity",
    "price": "$15.00",
    "model": "Velocity MLT 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low",
    "archetype": "Playful Multi",
    "bestFor": "Lively, elastic response with good tension maintenance for club players"
  },
  {
    "brand": "Yonex",
    "line": "Rexis",
    "price": "$18.00",
    "model": "Rexis Speed 125",
    "gauge": "16L / 1.25mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low-Med",
    "archetype": "Speed Multi",
    "bestFor": "Tight multifilament braid for fast arm speed and snappy release"
  },
  {
    "brand": "Prince",
    "line": "Premier",
    "price": "$14.00",
    "model": "Premier Touch 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low",
    "archetype": "Budget Multi",
    "bestFor": "Plush core at a lower price point - great starter arm-friendly string"
  },
  {
    "brand": "Babolat",
    "line": "Xcel",
    "price": "$17.00",
    "model": "Xcel 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low",
    "archetype": "Comfort Multi",
    "bestFor": "Soft elastomer-enhanced multi - maximum comfort for recreational players"
  },
  {
    "brand": "Babolat",
    "line": "Xcel",
    "price": "$17.00",
    "model": "Xcel 17",
    "gauge": "17 / 1.25mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low",
    "archetype": "Soft Touch",
    "bestFor": "Thinner Xcel for extra feel and power - ideal for arm-sensitive players"
  },
  {
    "brand": "Solinco",
    "line": "Vanquish Multi",
    "price": "$14.00",
    "model": "Vanquish Multi 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low",
    "archetype": "Value Multi",
    "bestFor": "Comfortable multifilament at a budget price - great hybrid cross string"
  },
  {
    "brand": "Toroline",
    "line": "Vivo",
    "price": "$10.00",
    "model": "Vivo 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Multifilament",
    "tensionRange": "50-65 lbs",
    "stiffness": "Low",
    "archetype": "Budget Multi",
    "bestFor": "Affordable soft multi with a lively feel - superb value hybrid cross"
  },
  {
    "brand": "Babolat",
    "line": "VS Touch",
    "price": "$48.00",
    "model": "VS Touch 130",
    "gauge": "16 / 1.30mm",
    "stringType": "Natural Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Very Low",
    "archetype": "Premium Comfort",
    "bestFor": "The gold standard - unmatched power, feel, and tension hold. Federer's cross string"
  },
  {
    "brand": "Babolat",
    "line": "VS Touch",
    "price": "$45.00",
    "model": "VS Touch 135",
    "gauge": "15L / 1.35mm",
    "stringType": "Natural Gut",
    "tensionRange": "50-68 lbs",
    "stiffness": "Very Low",
    "archetype": "Durability Gut",
    "bestFor": "Thicker gauge extends lifespan of gut without sacrificing feel"
  },
  {
    "brand": "Wilson",
    "line": "Natural Gut",
    "price": "$43.00",
    "model": "Natural Gut 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Natural Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Very Low",
    "archetype": "Classic Gut",
    "bestFor": "Traditional natural gut construction - elite power and plush touch"
  },
  {
    "brand": "Luxilon",
    "line": "Natural Gut",
    "price": "$40.00",
    "model": "Natural Gut 130",
    "gauge": "16 / 1.30mm",
    "stringType": "Natural Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Very Low",
    "archetype": "Value Gut",
    "bestFor": "Professional-quality gut at a lower price - great main string for hybrids"
  },
  {
    "brand": "Tecnifibre",
    "line": "Natural Gut",
    "price": "$44.00",
    "model": "Gut 130",
    "gauge": "16 / 1.30mm",
    "stringType": "Natural Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Very Low",
    "archetype": "Tour Gut",
    "bestFor": "Premium cow gut used by many touring pros - exceptional elasticity and pop"
  },
  {
    "brand": "Head",
    "line": "Natural Gut",
    "price": "$41.00",
    "model": "Natural Gut 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Natural Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Very Low",
    "archetype": "Reliable Gut",
    "bestFor": "Consistent natural gut for competitive players wanting the real thing"
  },
  {
    "brand": "Wilson",
    "line": "Synthetic Gut",
    "price": "$8.00",
    "model": "Synthetic Gut 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Synthetic Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Med",
    "archetype": "All-Court Value",
    "bestFor": "Classic nylon with solid control - the starter string for recreational play"
  },
  {
    "brand": "Wilson",
    "line": "Synthetic Gut",
    "price": "$8.00",
    "model": "Synthetic Gut Power 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Synthetic Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Med-Low",
    "archetype": "Power Syn Gut",
    "bestFor": "Softer nylon core with extra elasticity for players needing more pop"
  },
  {
    "brand": "Prince",
    "line": "Synthetic Gut",
    "price": "$7.00",
    "model": "Synthetic Gut Duraflex 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Synthetic Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Med",
    "archetype": "Budget Allrounder",
    "bestFor": "Duraflex wrap adds durability without losing the classic nylon feel"
  },
  {
    "brand": "Babolat",
    "line": "Synthetic Gut",
    "price": "$8.00",
    "model": "Synthetic Gut 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Synthetic Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Med",
    "archetype": "Beginner Comfort",
    "bestFor": "Reliable entry-level string for new players and string savers"
  },
  {
    "brand": "Head",
    "line": "FXP",
    "price": "$9.00",
    "model": "FXP 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Synthetic Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Med-Low",
    "archetype": "Flexible Syn Gut",
    "bestFor": "Flexible nylon core gives a more comfortable synthetic gut experience"
  },
  {
    "brand": "Tecnifibre",
    "line": "NRG2",
    "price": "$15.00",
    "model": "NRG2 17",
    "gauge": "17 / 1.24mm",
    "stringType": "Synthetic Gut",
    "tensionRange": "50-63 lbs",
    "stiffness": "Low",
    "archetype": "Premium Syn Gut",
    "bestFor": "High-end synthetic that bridges the gap to multifilament territory"
  },
  {
    "brand": "Toroline",
    "line": "Synthetic Gut",
    "price": "$7.00",
    "model": "Synthetic Gut 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Synthetic Gut",
    "tensionRange": "50-65 lbs",
    "stiffness": "Med",
    "archetype": "Value Entry",
    "bestFor": "Solid all-round nylon - great budget option for beginner to intermediate players"
  },
  {
    "brand": "Yonex",
    "line": "Tour Super",
    "price": "$9.00",
    "model": "Tour Super 850 Pro 17",
    "gauge": "17 / 1.25mm",
    "stringType": "Synthetic Gut",
    "tensionRange": "50-63 lbs",
    "stiffness": "Med-Low",
    "archetype": "Soft Syn Gut",
    "bestFor": "Premium multi-wrap nylon with a plush, elastic feel above typical syn guts"
  },
  {
    "brand": "Wilson",
    "line": "Champions Choice",
    "price": "$38.00",
    "model": "Champions Choice 16x17",
    "gauge": "16 x 17",
    "stringType": "Hybrid",
    "tensionRange": "50-62 lbs",
    "stiffness": "Med",
    "archetype": "Ready-Made Hybrid",
    "bestFor": "Pre-packaged gut/poly - natural gut mains, ALU Power crosses"
  },
  {
    "brand": "Babolat",
    "line": "RPM Blast / VS",
    "price": "$34.00",
    "model": "RPM Blast 125 / VS Touch 130",
    "gauge": "16L x 16",
    "stringType": "Hybrid",
    "tensionRange": "50-60 lbs",
    "stiffness": "Med",
    "archetype": "Tour Hybrid",
    "bestFor": "Federer's setup - gut crosses add power and feel, poly mains control spin"
  },
  {
    "brand": "Luxilon",
    "line": "ALU / Natural Gut",
    "price": "$34.00",
    "model": "ALU Power 125 / Gut 130",
    "gauge": "16L x 16",
    "stringType": "Hybrid",
    "tensionRange": "50-60 lbs",
    "stiffness": "Med",
    "archetype": "Classic Pro Hybrid",
    "bestFor": "Control mains, gut crosses for touch - the Sampras and Djokovic blueprint"
  },
  {
    "brand": "Tecnifibre",
    "line": "Black Code / X-One",
    "price": "$26.00",
    "model": "Black Code 125 / X-One 17",
    "gauge": "16L x 17",
    "stringType": "Hybrid",
    "tensionRange": "50-60 lbs",
    "stiffness": "Med",
    "archetype": "Spin + Comfort",
    "bestFor": "Spin poly mains with soft multi crosses - excellent arm-friendly hybrid"
  },
  {
    "brand": "Head",
    "line": "Hawk / Velocity",
    "price": "$22.00",
    "model": "Hawk 125 / Velocity 16",
    "gauge": "16L x 16",
    "stringType": "Hybrid",
    "tensionRange": "50-60 lbs",
    "stiffness": "Med",
    "archetype": "Budget Hybrid",
    "bestFor": "Control mains with a softer cross at an accessible price point"
  },
  {
    "brand": "Solinco",
    "line": "Hyper-G / Vanquish",
    "price": "$18.00",
    "model": "Hyper-G 125 / Vanquish Multi 16",
    "gauge": "16L x 16",
    "stringType": "Hybrid",
    "tensionRange": "50-60 lbs",
    "stiffness": "Med",
    "archetype": "Spin Hybrid",
    "bestFor": "Square poly spin mains with soft multi crosses - comfort without losing topspin"
  },
  {
    "brand": "Toroline",
    "line": "Eruption / Vivo",
    "price": "$15.00",
    "model": "Eruption 125 / Vivo 16",
    "gauge": "16L x 16",
    "stringType": "Hybrid",
    "tensionRange": "50-60 lbs",
    "stiffness": "Med",
    "archetype": "Value Hybrid",
    "bestFor": "Budget-friendly poly/multi combo - great spin and comfort at the lowest price point"
  },
  {
    "brand": "Babolat",
    "line": "RPM Rough / VS",
    "price": "$36.00",
    "model": "RPM Blast Rough / VS Touch",
    "gauge": "16L x 16",
    "stringType": "Hybrid",
    "tensionRange": "50-60 lbs",
    "stiffness": "Med",
    "archetype": "Spin + Touch",
    "bestFor": "Textured poly mains bite harder while gut crosses retain all the plushness"
  },
  {
    "brand": "Ashaway",
    "line": "Kevlar",
    "price": "$14.00",
    "model": "Kevlar 17",
    "gauge": "17 / 1.20mm",
    "stringType": "Kevlar / Aramid",
    "tensionRange": "55-65 lbs",
    "stiffness": "Very High",
    "archetype": "Extreme Durability",
    "bestFor": "Nearly unbreakable - designed for chronic breakers, very low power"
  },
  {
    "brand": "Prince",
    "line": "Pro Blend",
    "price": "$12.00",
    "model": "Pro Blend 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Kevlar / Aramid",
    "tensionRange": "55-65 lbs",
    "stiffness": "Very High",
    "archetype": "Arm Sacrifice",
    "bestFor": "Kevlar/nylon blend adds some comfort to the stiffer aramid core"
  },
  {
    "brand": "Kirschbaum",
    "line": "Competition",
    "price": "$11.00",
    "model": "Competition 17",
    "gauge": "17 / 1.20mm",
    "stringType": "Kevlar / Aramid",
    "tensionRange": "55-65 lbs",
    "stiffness": "Very High",
    "archetype": "Budget Breaker",
    "bestFor": "Entry-level aramid for players who break gut or multi constantly"
  },
  {
    "brand": "Tecnifibre",
    "line": "Aramix",
    "price": "$15.00",
    "model": "Aramix Red 16",
    "gauge": "16 / 1.30mm",
    "stringType": "Kevlar / Aramid",
    "tensionRange": "55-65 lbs",
    "stiffness": "Very High",
    "archetype": "Controlled Breaker",
    "bestFor": "Aramid main with nylon wrapping - marginally softer feel for heavy hitters"
  }
];

function clamp(value) {
  return Math.min(10, Math.max(1, Math.round(value)));
}

function stiffnessValue(stiffness) {
  return {
    'Very Low': 1,
    Low: 2,
    'Low-Med': 3,
    'Med-Low': 3,
    Med: 5,
    'Med-High': 7,
    High: 8,
    'Very High': 10,
  }[stiffness] || 5;
}

function unique(styles) {
  return [...new Set(styles)];
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function inferPlaystyles(row) {
  const text = `${row.stringType} ${row.archetype} ${row.bestFor}`.toLowerCase();
  const styles = [];

  if (text.includes('spin') || text.includes('bite') || text.includes('textured') || text.includes('rough') || text.includes('shaped')) {
    styles.push('Heavy Topspin Player', 'Aggressive Baseliner');
  }

  if (text.includes('control') || text.includes('tour') || text.includes('flat') || text.includes('crisp') || text.includes('low-powered')) {
    styles.push('Aggressive Baseliner', 'Counterpuncher', 'Big Server');
  }

  if (text.includes('power') || text.includes('pop') || text.includes('gut')) {
    styles.push('Big Server', 'Serve-and-Volley Player', 'All-Court Player');
  }

  if (text.includes('comfort') || text.includes('soft') || text.includes('multi') || text.includes('touch') || text.includes('feel')) {
    styles.push('All-Court Player', 'Counterpuncher', 'Defensive Grinder', 'Serve-and-Volley Player');
  }

  if (row.stringType === 'Hybrid') {
    styles.push('All-Court Player', 'Aggressive Baseliner', 'Serve-and-Volley Player');
  }

  if (row.stringType === 'Kevlar / Aramid') {
    styles.push('Aggressive Baseliner', 'Big Server', 'Counterpuncher');
  }

  if (row.stringType === 'Synthetic Gut') {
    styles.push('All-Court Player', 'Counterpuncher', 'Defensive Grinder');
  }

  if (styles.length === 0) {
    styles.push('All-Court Player', 'Counterpuncher');
  }

  return unique(styles).slice(0, 4);
}

function rateString(row) {
  const text = `${row.stringType} ${row.archetype} ${row.bestFor}`.toLowerCase();
  const firm = stiffnessValue(row.stiffness);
  const isPoly = row.stringType === 'Polyester';
  const isMulti = row.stringType === 'Multifilament';
  const isGut = row.stringType === 'Natural Gut';
  const isHybrid = row.stringType === 'Hybrid';
  const isKevlar = row.stringType === 'Kevlar / Aramid';

  return {
    power: clamp((isGut ? 9 : isMulti ? 8 : isHybrid ? 7 : isPoly ? 5 : 6) + (text.includes('power') || text.includes('pop') ? 1 : 0) - (isKevlar ? 2 : 0)),
    control: clamp((isPoly || isKevlar ? 8 : isHybrid ? 7 : 6) + (text.includes('control') || text.includes('tour') || text.includes('flat') ? 1 : 0)),
    spin: clamp((isPoly ? 8 : isHybrid ? 7 : 5) + (text.includes('spin') || text.includes('bite') || text.includes('rough') || text.includes('textured') ? 2 : 0)),
    comfort: clamp((isGut ? 10 : isMulti ? 9 : isHybrid ? 7 : 11 - firm) + (text.includes('soft') || text.includes('comfort') ? 1 : 0) - (isKevlar ? 3 : 0)),
    durability: clamp((isKevlar ? 10 : firm >= 7 ? 8 : isHybrid ? 7 : isMulti || isGut ? 5 : 6) + (text.includes('durability') || text.includes('breaker') ? 1 : 0)),
  };
}

function getWarning(row) {
  if (row.stringType === 'Kevlar / Aramid') return 'Very firm and low-powered; avoid if arm comfort matters.';
  if (row.stringType === 'Polyester' && ['High', 'Very High', 'Med-High'].includes(row.stiffness)) return 'Firm response; consider lower tension or a hybrid if comfort is a concern.';
  if (row.stringType === 'Natural Gut') return 'Premium feel and tension hold, but expensive and moisture-sensitive.';
  if (row.stringType === 'Multifilament') return 'Excellent comfort, but faster string breakers may need more durability.';
  if (row.stringType === 'Hybrid') return 'Performance depends on which string is in the mains and the tension split.';
  return 'Balanced option, but less spin and durability than most polyester setups.';
}

function getReason(row) {
  return `${row.archetype}: ${row.bestFor}`;
}

export const strings = stringRows.map((row) => ({
  ...row,
  name: `${row.brand} ${row.model}`,
  image: `/images/strings/${slugify(`${row.brand} ${row.model}`)}.jpg`,
  imageAlt: `${row.brand} ${row.model} tennis string package`,
  type: row.stringType,
  recommendedPlaystyles: inferPlaystyles(row),
  warnings: getWarning(row),
  reason: getReason(row),
  ...rateString(row),
}));

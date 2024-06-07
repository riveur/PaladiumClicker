const version = 8;

const discord = {
    url: "https://discord.gg/WGXUKHcZ3P",
    name: "Paladium Profile Tracker"
};



const SMELT = "Smelt";
const BREAK = "Break";
const OBTAIN_FROM_COBBLEBREAKER = "Obtain from CobbleBreaker";
const KILL = "Kill";
const FISH = "Fish";
const CRAFT = "Craft";
const EXTRACT_FROM_SAP = "Extract from Sap";
const THROW_IN_A_CAULDRON = "Throw in a Cauldron";
const CRAFT_IN_PORTAL = "Craft in Portal";
const CRAFT_IN_A_CAULDRON = "Craft in a Cauldron";
const CRUSH = "Crush";

const metier_xp = [
    480,
    1044,
    1713,
    2497,
    3408,
    4451,
    5635,
    6966,
    8447,
    10086,
    11885,
    13850,
    15983,
    18290,
    20773,
    23435,
    26281,
    29312,
    32532,
    35943,
    39549,
    43351,
    47353,
    51556,
    55964,
    60577,
    65399,
    70432,
    75677,
    81137,
    86813,
    92709,
    98824,
    105162,
    111724,
    118512,
    125527,
    132772,
    140248,
    147956,
    155898,
    164076,
    172492,
    181146,
    190040,
    199176,
    208555,
    218179,
    228049,
    238166,
    248532,
    259148,
    270015,
    281135,
    292509,
    304138,
    316023,
    328166,
    340568,
    353230,
    366153,
    379399,
    392788,
    406502,
    420482,
    434728,
    449243,
    464027,
    479081,
    494407,
    510004,
    525875,
    542021,
    558442,
    575150,
    592115,
    609368,
    626901,
    644714,
    662809,
    681186,
    699846,
    718791,
    738021,
    757537,
    777339,
    797430,
    817810,
    838479,
    859438,
    880690,
    902234,
    924071,
    946202,
    968628,
    991349,
    1014368,
    1037683,
    1061297,
    1085210
]

const metier_palier = [
    0,
    1044,
    2757,
    5254,
    8662,
    13113,
    18748,
    25714,
    34161,
    44247,
    56132,
    69982,
    85965,
    104255,
    125028,
    148463,
    174744,
    204056,
    236588,
    272531,
    312080,
    355431,
    402784,
    454340,
    510304,
    570881,
    636280,
    706712,
    782389,
    863526,
    950339,
    1043048,
    1141872,
    1247034,
    1358758,
    1477270,
    1602797,
    1735569,
    1875817,
    2023773,
    2179671,
    2343747,
    2516239,
    2697385,
    2887425,
    3086601,
    3295156,
    3513335,
    3741384,
    3979550,
    4228082,
    4487230,
    4757245,
    5038380,
    5330889,
    5635027,
    5951050,
    6279216,
    6619784,
    6973014,
    7339167,
    7718566,
    8111354,
    8517856,
    8938338,
    9373066,
    9822309,
    10286336,
    10765417,
    11259824,
    11769828,
    12295703,
    12837724,
    13396166,
    13971316,
    14563431,
    15172799,
    15799700,
    16444414,
    17107223,
    17788409,
    18488255,
    19207046,
    19945067,
    20702604,
    21479943,
    22277373,
    23095183,
    23933662,
    24793100,
    25673790,
    26576024,
    27500095,
    28446297,
    29414925,
    30406274,
    31420642,
    32458325,
    33519622,
    34604832
]


interface HowToXp {
  [key: string]: {
    type: string;
    action: string;
    xp: number;
    imgPath: string
  }[];
}

const how_to_xp : HowToXp = {
  "mineur": [
    {type: "Nether brick", "action": BREAK, "xp": 0.1, imgPath: "nether_brick.png"},
    {type: "Stone", "action": SMELT, "xp": 0.5, imgPath: "stone.png"},
    {type: "Charcoal", "action": SMELT, "xp": 1, imgPath: "charcoal.png"},
    {type: "Andesite", "action": BREAK, "xp": 3, imgPath: "andesite.png"},
    {type: "Granite", "action": BREAK, "xp": 3, imgPath: "granite.png"},
    {type: "Diorite", "action": BREAK, "xp": 3, imgPath: "diorite.png"},
    {type: "Coal Ore", "action": BREAK, "xp": 4, imgPath: "coal_ore.png"},
    {type: "Nether Quartz Ore", "action": BREAK, "xp": 6, imgPath: "nether_quartz_ore.png"},
    {type: "Obsidian", "action": BREAK, "xp": 6, imgPath: "obsidian.png"},
    {type: "Lapis Lazulli Ore", "action": BREAK, "xp": 15, imgPath: "lapis_ore.png"},
    {type: "Redstone Ore", "action": BREAK, "xp": 15, imgPath: "redstone_ore.png"},
    {type: "Emerald Ore", "action": BREAK, "xp": 75, imgPath: "emerald_ore.png"},
    {type: "Iron Ingot", "action": SMELT, "xp": 8, imgPath: "iron_ingot.png"},
    {type: "Diamond Ore", "action": BREAK, "xp": 25, imgPath: "diamond_ore.png"},
    {type: "Gold Ingot", "action": SMELT, "xp": 30, imgPath: "gold_ingot.png"},
    {type: "Amethyst Ingot", "action": SMELT, "xp": 35, imgPath: "amethyst_ingot.png"},
    {type: "Iron Particle", "action": OBTAIN_FROM_COBBLEBREAKER, "xp": 2, imgPath: "iron_particle.png"},
    {type: "Gold Particle", "action": OBTAIN_FROM_COBBLEBREAKER, "xp": 4, imgPath: "gold_particle.png"},
    {type: "Diamond Particle", "action": OBTAIN_FROM_COBBLEBREAKER, "xp": 8, imgPath: "diamond_particle.png"},
    {type: "Amethyst Particle", "action": OBTAIN_FROM_COBBLEBREAKER, "xp": 12, imgPath: "amethyst_particle.png"},
    {type: "Titane Particle", "action": OBTAIN_FROM_COBBLEBREAKER, "xp": 16, imgPath: "titane_particle.png"},
    {type: "Paladium Particle", "action": OBTAIN_FROM_COBBLEBREAKER, "xp": 20, imgPath: "paladium_particle.png"},
    {type: "Titane Ingot", "action": OBTAIN_FROM_COBBLEBREAKER, "xp": 50, imgPath: "titane_ingot.png"},
    {type: "Cavernous Zombie", "action": KILL, "xp": NaN, imgPath: "cavernous_zombie.png"},
    {type: "Paladium Ingot", "action": SMELT, "xp": 150, imgPath: "paladium_ingot.png"},
    {type: "Findium Ore", "action": BREAK, "xp": 110, imgPath: "findium_ore.png"},
    {type: "Paladium Green Ingot", "action": SMELT, "xp": 200, imgPath: "paladium_green_ingot.png"},
  ],
  "farmer": [
    {type: "Bread", "action": CRAFT, "xp": 1, imgPath: "bread.png"},
    {type: "Seed", "action": BREAK, "xp": 1.5, imgPath: "seeds_wheat.png"},
    {type: "Baked Potato", "action": SMELT, "xp": 1, imgPath: "potato_baked.png"},
    {type: "Potatoes", "action": BREAK, "xp": 2, imgPath: "potato.png"},
    {type: "Carrots", "action": BREAK, "xp": 2.5, imgPath: "carrot.png"},
    {type: "Melon", "action": BREAK, "xp": 4, imgPath: "melon.png"},
    {type: "Pumpkin", "action": BREAK, "xp": 5, imgPath: "pumpkin.png"},
    {type: "Farmer Chicken", "action": KILL, "xp": NaN, imgPath: "farmer_chicken.png"},
    {type: "Amethyst Ingot", "action": CRUSH, "xp": 3, imgPath: "amethyst_ingot.png"},
    {type: "Eggplant", "action": BREAK, "xp": 10, imgPath: "eggplant.png"},
    {type: "Pumpkin Pie", "action": CRAFT, "xp": 4, imgPath: "pumpkin_pie.png"},
    {type: "Titane Ingot", "action": CRUSH, "xp": 4.5, imgPath: "titane_ingot.png"},
    {type: "Chervil", "action": BREAK, "xp": 20, imgPath: "chervil.png"},
    {type: "Paladium Ingot", "action": CRUSH, "xp": 6, imgPath: "paladium_ingot.png"},
    {type: "Kiwano", "action": BREAK, "xp": 200, imgPath: "kiwano.png"},
  ],
  "hunter": [
    {type: "Snow Golem", "action": KILL, "xp": 1, imgPath: "snow_golem.png"},
    {type: "Squid", "action": KILL, "xp": 10, imgPath: "squid.png"},
    {type: "Cooked Porkchop", "action": SMELT, "xp": 10, imgPath: "porkchop_cooked.png"},
    {type: "Cooked Chicken", "action": SMELT, "xp": 10, imgPath: "chicken_cooked.png"},
    {type: "Cooked Mutton", "action": SMELT, "xp": 10, imgPath: "cooked_mutton.png"},
    {type: "Steak", "action": SMELT, "xp": 10, imgPath: "steak.png"},
    {type: "Cow", "action": KILL, "xp": 14, imgPath: "cow.png"},
    {type: "Pig", "action": KILL, "xp": 14, imgPath: "pig.png"},
    {type: "Horse", "action": KILL, "xp": 14, imgPath: "horse.png"},
    {type: "Sheep", "action": KILL, "xp": 14, imgPath: "sheep.png"},
    {type: "Rabbit", "action": KILL, "xp": 14, imgPath: "rabbit.png"},
    {type: "Chicken", "action": KILL, "xp": 14, imgPath: "chicken.png"},
    {type: "Cooked Fish", "action": SMELT, "xp": 15, imgPath: "cooked_fish.png"},
    {type: "Cooked Salmon", "action": SMELT, "xp": 15, imgPath: "cooked_salmon.png"},
    {type: "Raw fish", "action": FISH, "xp": 25, imgPath: "fish_cod_raw.png"},
    {type: "Raw Salmon", "action": FISH, "xp": 35, imgPath: "raw_salmon.png"},
    {type: "Creeper", "action": KILL, "xp": 40, imgPath: "creeper.png"},
    {type: "Pufferfish", "action": FISH, "xp": 75, imgPath: "pufferfish.png"},
    {type: "Clownfish", "action": FISH, "xp": 200, imgPath: "clownfish.png"},
    {type: "Wither", "action": KILL, "xp": 1000, imgPath: "wither.png"},
    {type: "Goat", "action": KILL, "xp": 20, imgPath: "goat.png"},
      {type: "Carp", "action": FISH, "xp": 150, imgPath: "carp.png"},
    {type: "Bass", "action": FISH, "xp": 150, imgPath: "bass.png"},
    {type: "Manta Ray", "action": FISH, "xp": 300, imgPath: "manta_ray.png"},
    {type: "Snail", "action": KILL, "xp": 25, imgPath: "snail.png"},
    {type: "Red Tuna", "action": FISH, "xp": 450, imgPath: "red_tuna.png"},
    {type: "Moonfish", "action": FISH, "xp": 550, imgPath: "moonfish.png"},
    {type: "Exp Fish", "action": FISH, "xp": 750, imgPath: "exp_fish.png"},
    {type: "Parrot", "action": KILL, "xp": 30, imgPath: "parrot.png"},
    {type: "Whale", "action": FISH, "xp": 10000, imgPath: "whale.png"},
    {type: "Kraken", "action": FISH, "xp": 15000, imgPath: "kraken.png"},
    {type: "Dolphin", "action": KILL, "xp": 35, imgPath: "dolphin.png"},
    {type: "Mega Creeper", "action": KILL, "xp": NaN, imgPath: "mega_creeper.png"},
    {type: "Zombie", "action": KILL, "xp": 15, imgPath: "zombie.png"},
    {type: "Turtle", "action": KILL, "xp": 40, imgPath: "turtle.png"},
    {type: "Panda", "action": KILL, "xp": 60, imgPath: "panda.png"},
    {type: "Skeleton", "action": KILL, "xp": 20, imgPath: "skeleton.png"},
    {type: "Elephant", "action": KILL, "xp": NaN, imgPath: "elephant.png"},
    {type: "Crab", "action": KILL, "xp": 80, imgPath: "crab.png"},
    {type: "Spider", "action": KILL, "xp": 8, imgPath: "spider.png"},
    {type: "Blaze", "action": KILL, "xp": 25, imgPath: "blaze.png"},
    {type: "Witch", "action": KILL, "xp": 35, imgPath: "witch.png"},
    {type: "Snake", "action": KILL, "xp": 120, imgPath: "snake.png"},
    {type: "Cave Spider", "action": KILL, "xp": 15, imgPath: "cave_spider.png"},
    {type: "Jelly Fish", "action": KILL, "xp": 150, imgPath: "jelly_fish.png"},
  ],
  "alchimiste": [
    {type: "Empty Flask", "action": CRAFT, "xp": 0.2, imgPath: "empty_flask.png"},
    {type: "Jacaranda Log", "action": BREAK, "xp": 10, imgPath: "jacaranda_log.png"},
    {type: "Judeecercis Log", "action": BREAK, "xp": 10, imgPath: "judeecercis_log.png"},
    {type: "Erable Log", "action": BREAK, "xp": 10, imgPath: "erable_log.png"},
    {type: "Extractor", "action": CRAFT, "xp": 20, imgPath: "extractor.png"},
    {type: "Lightning Potion", "action": CRAFT, "xp": 30, imgPath: "lightning_potion.png"},
    {type: "Jacaranda Log", "action": EXTRACT_FROM_SAP, "xp": 15, imgPath: "jacaranda_log.png"},
    {type: "Blue Orchid", "action": THROW_IN_A_CAULDRON, "xp": 1, imgPath: "blue_orchid.png"},
    {type: "Dandelion", "action": THROW_IN_A_CAULDRON, "xp": 1, imgPath: "dandelion.png"},
    {type: "Poppy", "action": THROW_IN_A_CAULDRON, "xp": 1, imgPath: "poppy.png"},
    {type: "White Tulip", "action": THROW_IN_A_CAULDRON, "xp": 2, imgPath: "white_tulip.png"},
    {type: "Oxeye Daisy", "action": THROW_IN_A_CAULDRON, "xp": 2, imgPath: "oxeye_daisy.png"},
    {type: "Orange Tulip", "action": THROW_IN_A_CAULDRON, "xp": 2, imgPath: "orange_tulip.png"},
    {type: "Allium", "action": THROW_IN_A_CAULDRON, "xp": 2, imgPath: "allium.png"},
    {type: "Pink Tulip", "action": THROW_IN_A_CAULDRON, "xp": 2, imgPath: "pink_tulip.png"},
    {type: "Azure Bluet", "action": THROW_IN_A_CAULDRON, "xp": 2, imgPath: "azure_bluet.png"},
    {type: "Red Tulip", "action": THROW_IN_A_CAULDRON, "xp": 2, imgPath: "red_tulip.png"},
    {type: "Amethyst Ingot", "action": CRAFT_IN_PORTAL, "xp": 6, imgPath: "amethyst_ingot.png"},
    {type: "Judeecercis Log", "action": EXTRACT_FROM_SAP, "xp": 40, imgPath: "judeecercis_log.png"},
    {type: "Green Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 2, imgPath: "green_glueball.png"},
    {type: "Blue Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 2, imgPath: "blue_glueball.png"},
    {type: "Red Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 2, imgPath: "red_glueball.png"},
    {type: "Titane Ingot", "action": CRAFT_IN_PORTAL, "xp": 20, imgPath: "titane_ingot.png"},
    {type: "Flower Monster", "action": KILL, "xp": NaN, imgPath: "flower_monster.png"},
    {type: "Gray Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 15, imgPath: "gray_glueball.png"},
    {type: "Cyan Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 15, imgPath: "cyan_glueball.png"},
    {type: "Yellow Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 15, imgPath: "yellow_glueball.png"},
    {type: "Purple Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 15, imgPath: "purple_glueball.png"},
    {type: "Green Dark Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 15, imgPath: "green_dark_glueball.png"},
    {type: "Orange Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 15, imgPath: "orange_glueball.png"},
    {type: "Green Flash Glueball", "action": CRAFT_IN_A_CAULDRON, "xp": 15, imgPath: "green_flash_glueball.png"},
    {type: "Paladium Ingot", "action": CRAFT_IN_PORTAL, "xp": 40, imgPath: "paladium_ingot.png"},
    {type: "Erable Log", "action": EXTRACT_FROM_SAP, "xp": 80, imgPath: "erable_log.png"},
    {type: "Paladium Flower", "action": THROW_IN_A_CAULDRON, "xp": 100, imgPath: "flower_paladium.png"},
  ]
}



const constants = {
    version,
    discord,
    metier_xp,
    metier_palier,
    how_to_xp,
};

export default constants;




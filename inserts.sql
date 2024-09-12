CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO city (id, name, img_url) VALUES
(uuid_generate_v4(), 'Tokyo', 'https://wallpaperaccess.com/full/19066.jpg'),
(uuid_generate_v4(), 'Kyoto', 'https://c0.wallpaperflare.com/preview/283/691/600/japan-kyoto-gion-night.jpg'),
(uuid_generate_v4(), 'Osaka', 'https://c4.wallpaperflare.com/wallpaper/820/1009/88/japan-cherry-trees-temple-wallpaper-preview.jpg'),
(uuid_generate_v4(), 'Hiroshima', 'https://c0.wallpaperflare.com/preview/525/438/482/japan-hiroshima-shi-atomic-bomb-dome-hiroshima.jpg'),
(uuid_generate_v4(), 'Sapporo', 'https://c4.wallpaperflare.com/wallpaper/177/291/643/japan-sapporo-park-cityscape-wallpaper-preview.jpg'),
(uuid_generate_v4(), 'Nagoya', 'https://t3.ftcdn.net/jpg/00/49/99/36/360_F_49993662_NyChHRoi9oHteVC0DKOkMDmiGhgGnAd1.jpg'),
(uuid_generate_v4(), 'Fukuoka', 'https://c4.wallpaperflare.com/wallpaper/358/258/361/daytime-asia-ohori-park-japan-wallpaper-preview.jpg'),
(uuid_generate_v4(), 'Yokohama', 'https://c4.wallpaperflare.com/wallpaper/814/736/908/cityscape-yokohama-japan-wallpaper-preview.jpg'),
(uuid_generate_v4(), 'Nara', 'https://c4.wallpaperflare.com/wallpaper/214/548/62/japan-yamatokoriyama-koriyama-castle-castle-wallpaper-preview.jpg'),
(uuid_generate_v4(), 'Kobe', 'https://c1.wallpaperflare.com/preview/1010/433/264/kobe-japan-port-tower.jpg'),
(uuid_generate_v4(), 'Sendai', 'https://c1.wallpaperflare.com/preview/165/751/716/aoba-matsuri-avenue-photos-higashi-ni-bancho.jpg'),
(uuid_generate_v4(), 'Hakone', 'https://wallpapers.com/images/hd/japan-pictures-t3tc3s0xq4htz6w1.jpg'),
(uuid_generate_v4(), 'Kagoshima', 'https://content.r9cdn.net/rimg/dimg/0f/d7/016e48c6-city-10444-1725018ceaf.jpg'),
(uuid_generate_v4(), 'Okinawa', 'https://i.ytimg.com/vi/4Ku1PlgEPh8/maxresdefault.jpg'),
(uuid_generate_v4(), 'Kanazawa', 'https://www.youcouldtravel.com/u/k/katamachi-shopping-district-at-night.jpg');


INSERT INTO tourist_attractions (id, name, description, img_url, city_id) VALUES
(uuid_generate_v4(), 'Tokyo Tower', 'A famous landmark and observation tower in Tokyo.', 'https://images.alphacoders.com/110/thumb-1920-1107836.jpg', (SELECT id FROM city WHERE name = 'Tokyo')),
(uuid_generate_v4(), 'Kinkaku-ji', 'The Golden Pavilion, a stunning Zen Buddhist temple in Kyoto.', 'https://images7.alphacoders.com/546/546412.jpg', (SELECT id FROM city WHERE name = 'Kyoto')),
(uuid_generate_v4(), 'Osaka Castle', 'A historic castle in Osaka with beautiful surrounding gardens.', 'https://images5.alphacoders.com/594/thumb-1920-594203.jpg', (SELECT id FROM city WHERE name = 'Osaka')),
(uuid_generate_v4(), 'Hiroshima Peace Memorial', 'A memorial dedicated to the victims of the atomic bombing of Hiroshima.', 'https://c1.wallpaperflare.com/preview/668/121/136/hiroshima-memorial-japan-monument.jpg', (SELECT id FROM city WHERE name = 'Hiroshima')),
(uuid_generate_v4(), 'Sapporo Snow Festival', 'An annual festival in Sapporo featuring impressive snow sculptures.', 'https://c4.wallpaperflare.com/wallpaper/755/189/299/sapporo-ice-festival-wallpaper-preview.jpg', (SELECT id FROM city WHERE name = 'Sapporo')),
(uuid_generate_v4(), 'Nagoya Castle', 'A historic castle in Nagoya known for its impressive architecture.', 'https://www.aichi-now.jp/upload/recommend_course_languages/cb6c0504063eea8622b87690d32f8405.jpg', (SELECT id FROM city WHERE name = 'Nagoya')),
(uuid_generate_v4(), 'Fukuoka Tower', 'A prominent landmark and observation tower in Fukuoka.', 'https://thumbs.dreamstime.com/b/amazing-view-fukuoka-tower-night-city-lights-japan-148785616.jpg', (SELECT id FROM city WHERE name = 'Fukuoka')),
(uuid_generate_v4(), 'Minato Mirai', 'A modern waterfront area in Yokohama with shopping and entertainment.', 'https://c0.wallpaperflare.com/preview/678/1003/670/japan-yokohama-it-is-minato-mirai-of-japan-minato-mirai.jpg', (SELECT id FROM city WHERE name = 'Yokohama')),
(uuid_generate_v4(), 'Todaiji Temple', 'A large Buddhist temple in Nara, famous for its Great Buddha statue.', 'https://c4.wallpaperflare.com/wallpaper/707/104/867/temples-t%C5%8Ddai-ji-nara-todaiji-wallpaper-preview.jpg', (SELECT id FROM city WHERE name = 'Nara')),
(uuid_generate_v4(), 'Kobe Harborland', 'A popular shopping and entertainment area in Kobe with waterfront views.', 'https://c4.wallpaperflare.com/wallpaper/985/412/896/blue-buildings-city-honshu-wallpaper-preview.jpg', (SELECT id FROM city WHERE name = 'Kobe')),
(uuid_generate_v4(), 'Aoba-dai', 'A scenic area in Sendai with beautiful parks and historical sites.', 'https://i.ytimg.com/vi/7QfYrnqd0QU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAbDjjSd8x5fjkN-f6nEWvoCpJxew', (SELECT id FROM city WHERE name = 'Sendai')),
(uuid_generate_v4(), 'Hakone Open-Air Museum', 'An outdoor museum in Hakone featuring sculptures and beautiful views.', 'https://www.japan-guide.com/g18/5208_01.jpg', (SELECT id FROM city WHERE name = 'Hakone')),
(uuid_generate_v4(), 'Sakurajima', 'A famous active volcano near Kagoshima with spectacular views.', 'https://www.shutterstock.com/shutterstock/videos/14458966/thumb/1.jpg', (SELECT id FROM city WHERE name = 'Kagoshima')),
(uuid_generate_v4(), 'Shurijo Castle', 'A historic castle in Okinawa known for its unique architecture.', 'https://c0.wallpaperflare.com/preview/238/565/182/japan-naha-shi-shurijo-castle-okinawa.jpg', (SELECT id FROM city WHERE name = 'Okinawa')),
(uuid_generate_v4(), 'Kenrokuen Garden', 'One of Japan’s Three Great Gardens located in Kanazawa.', 'https://www.japan-guide.com/g19/4200_01.jpg', (SELECT id FROM city WHERE name = 'Kanazawa'));


INSERT INTO tourist_attractions (id, name, description, img_url, city_id) VALUES
-- Tokyo
(uuid_generate_v4(), 'Meiji Shrine', 'A historic Shinto shrine surrounded by a peaceful forest in the heart of Tokyo.', 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Meiji_Jingu_2023-3.jpg', (SELECT id FROM city WHERE name = 'Tokyo')),
(uuid_generate_v4(), 'Shibuya Crossing', 'One of the busiest and most iconic pedestrian crossings in the world, located in Tokyo.', 'https://a3.cdn.japantravel.com/photo/3016-194379/1440x960!/tokyo-shibuya-crossing-194379.jpg', (SELECT id FROM city WHERE name = 'Tokyo')),

-- Kyoto
(uuid_generate_v4(), 'Fushimi Inari Shrine', 'A famous Shinto shrine known for its thousands of red torii gates.', 'https://dskyoto.s3.amazonaws.com/gallery/full/8514/5559/7797/08-20131216_FushimiInari_Mainspot-307.jpg', (SELECT id FROM city WHERE name = 'Kyoto')),
(uuid_generate_v4(), 'Arashiyama Bamboo Grove', 'A picturesque bamboo forest located in the Arashiyama district of Kyoto.', 'https://img.peapix.com/1354dc02860049f9b48341568dd0ce88_UHD.jpg', (SELECT id FROM city WHERE name = 'Kyoto')),

-- Osaka
(uuid_generate_v4(), 'Dotonbori', 'A lively entertainment district famous for its bright neon lights and street food.', 'https://c0.wallpaperflare.com/preview/811/979/818/japan-osaka-dotonbori-river-canal.jpg', (SELECT id FROM city WHERE name = 'Osaka')),
(uuid_generate_v4(), 'Umeda Sky Building', 'A unique skyscraper in Osaka with an observation deck offering panoramic views.', 'https://www.skybldg.co.jp/lang/asset/img/top/mv_bg01.jpg', (SELECT id FROM city WHERE name = 'Osaka')),

-- Hiroshima
(uuid_generate_v4(), 'Miyajima Island', 'A small island near Hiroshima famous for its floating torii gate and Itsukushima Shrine.', 'https://c0.wallpaperflare.com/preview/178/202/571/itsukushima-shrine-miyajima-hiroshima-sanctuary.jpg', (SELECT id FROM city WHERE name = 'Hiroshima')),
(uuid_generate_v4(), 'Shukkei-en Garden', 'A traditional Japanese garden in Hiroshima offering serene landscapes and historic significance.', 'https://nerdnomads.com/wp-content/uploads/2020/10/Autumn-colors-Shukkeien-Garden-Hiroshima.jpg', (SELECT id FROM city WHERE name = 'Hiroshima')),

-- Sapporo
(uuid_generate_v4(), 'Odori Park', 'A large park in central Sapporo known for hosting the Sapporo Snow Festival.', 'https://www.visit-hokkaido.jp/lsc/upfile/spot/0001/0004/10004_10_l.jpg', (SELECT id FROM city WHERE name = 'Sapporo')),
(uuid_generate_v4(), 'Mount Moiwa', 'A popular spot in Sapporo offering scenic views of the city and surrounding areas.', 'https://www.japan-guide.com/g18/5309_01.jpg', (SELECT id FROM city WHERE name = 'Sapporo'));


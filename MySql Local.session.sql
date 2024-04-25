ALTER TABLE artist ADD column alias_id VARCHAR(40) after lName;
ALTER TABLE artist RENAME COLUMN alias_id TO alias;
ALTER TABLE artist ADD column artist_img VARCHAR(60) after alias;


UPDATE artist
SET fName = 'erica', lName = 'wright', alias = 'erykah badu', artist_img = 'erykahbadu.jpeg'
WHERE artist_id = 1;

UPDATE artist
SET artist_img ='johncoltrane.jpeg'
WHERE artist_id = 2;

UPDATE artist
SET artist_img = 'milesdavis.jpg'
WHERE artist_id = 3;

UPDATE artist
SET artist_img = 'arethafranklin.jpeg'
WHERE artist_id = 4;

UPDATE artist
SET artist_img = 'caroleking.jpeg'
WHERE artist_id = 5;

UPDATE artist
SET fName = 'lonnie', lName = 'lynn', alias = 'common', artist_img = 'common.jpeg'
WHERE artist_id = 6;

INSERT INTO artist (fName, lName, alias, artist_img)VALUES 
    ('alex', 'isley', null, 'alexisley.jpeg'),
    ('beyonce', 'knowles-carter', 'beyonce', 'beyonce.jpg'),
    ('janet', 'jackson', null, 'janetjackson.jpg'),
    ('kali', 'uchis', null, 'kaliuchis.jpg'),
    ('kendrick', 'duckworth', 'kendrick lamar', 'kendricklamar.jpg'),
    ('stevland', 'morris', 'stevie wonder', 'steviewonder.jpg'),
    ('tierra', 'whack', null, 'tierrawhack.jpg'),
    ('willow', 'smith', 'willow smith', 'willow.jpeg');

ALTER TABLE band ADD column band_img VARCHAR(60) after band;

UPDATE band
SET band_img ='black sabbath.jpeg'
WHERE band_id = 1;

UPDATE band
SET band_img ='thedoors.JPG'
WHERE band_id = 2;

UPDATE band
SET band_img = 'earthwindandfire.jpg'
WHERE band_id = 3;

UPDATE band
SET band_img = 'jackson5.jpg'
WHERE band_id = 4;

UPDATE band
SET band_img = 'ledzeppelin.jpg'
WHERE band_id = 5;

UPDATE band
SET band_img = 'theroots.jpg'
WHERE band_id = 6;

INSERT INTO band (band, band_img)VALUES 
    ('average white band', 'averagewhiteband.jpg'),
    ('backstreet boys, the', 'backstreetboys.jpg'),
    ('fleetwood mac', 'fleetwoodmac.jpg'),
    ('journey', 'journey.jpg'),
    ('little dragon', 'littledragon.jpeg'),
    ('maze', 'maze.jpg'),
    ('nirvana', 'nirvana.jpg'),
    ('parliament funkadelic', 'parliament.jpg'),
    ('red hot chili peppers', 'redhotchilipeppers.jpg'),
    ('rufus', 'rufus.jpg'),
    ('soundgarden', 'soundgarden.jpg');

ALTER TABLE album ADD column album_cover VARCHAR(60) after band_id;

UPDATE album
SET album_cover ='alovesupreme.jpg'
WHERE album_id = 1;

UPDATE album
SET album_cover ='abc.png'
WHERE album_id = 2;

UPDATE album
SET album_cover ='allnall.jpg'
WHERE album_id = 3;

UPDATE album
SET album_cover ='bigfun.jpg'
WHERE album_id = 4;

UPDATE album
SET album_cover ='ineverlovedaman.jpg'
WHERE album_id = 5;

UPDATE album
SET album_cover ='illadelphhalflife.jpg'
WHERE album_id = 6;

UPDATE album
SET album_cover ='ledzeppeliniv.jpg'
WHERE album_id = 7;

UPDATE album
SET album_cover ='likewatearforchocolate.jpg'
WHERE album_id = 8;

UPDATE album
SET album_cover ='mamasgun.jpg'
WHERE album_id = 9;

UPDATE album
SET album_cover ='paranoid.jpg'
WHERE album_id = 10;

UPDATE album
SET album_cover ='tapestry.jpg'
WHERE album_id = 11;

UPDATE album
SET album_cover ='thedoors.jpg'
WHERE album_id = 12;

INSERT INTO genre (genre) VALUES 
('latin'),
('electronic');

INSERT INTO genre (genre) VALUES ('neo-soul'), ('rap'), ('r&b');

INSERT INTO genre (genre) VALUES ('neo-soul'), ('funk');

INSERT INTO genre (genre) VALUES ('country');

INSERT INTO label (label) VALUES ('self-released'), ('virgin'), ('universal'), ('interscope'), ('tamla'), ('roc nation'), ('jive'), ('reprise'), ('peace frog'), ('ninja tune'), ('capitol'), ('DGC'), ('casablanca');

UPDATE album
SET genre_id = 8
WHERE album_id = 9;

UPDATE genre
SET genre = 'alternative'
WHERE genre_id = 11;

INSERT INTO album (title, artist_id, band_id, album_cover, label_id, genre_id, yr_released)
VALUES 
    ('all for you', 15, null, 'allforyou.png', 11, 10, 2001),
    ('but you cant use my phone', 1, null, 'butyoucantusemyphone.png',8, 8, 2015),
    ('luxury', 13, null, 'luxury.jpeg', 10, 8, 2015),
    ('the beauty of everything, part two', 13, null, 'thebeautyofeverythingpart2.png', 10, 8, 2019),
    ('beyonce', 14, null, 'beyoncealbum.png', 3, 10, 2013),
    ('bday', 14, null, 'bday.png', 3, 10, 2006),
    ('renaissance', 14, null, 'renaissance.png', 3, 7, 2022),
    ('cowboy carter', 14, null, 'cowboycarter.png', 3, 13, 2024),
    ('the velvet rope', 15, null, 'thevelvetrope.png', 11, 10, 1997),
    ('sin miedo (del amor y otros demonios)', 16, null, 'sinmideo.png', 12, 6, 2020),
    ('red moon in venus', 16, null, 'redmooninvenus.png', 5, 6, 2023),
    ('to pimp a butterfly', 17, null, 'topimpabutterfly.png', 13, 9, 2015),
    ('damn', 17, null, 'damn.png', 13, 9, 2017),
    ('where im coming from', 18, null, 'whereimcomingfrom.jpeg', 14, 1, 1971),
    ('songs in the key of life', 18, null, 'songsinthekeyoflife.jpg', 14, 1, 1976),
    ('the secret life of plants', 18, null, 'secretlifeofplants.jpg.jpeg', 14, 1, 1979),
    ('hotter than july', 18, null, 'hotterthanjuly.jpg', 14, 1, 1980),
    ('whack world', 19, null, 'whackworld.jpg', 13, 4, 2018),
    ('world wide whack', 19, null, 'whackworld.jpg', 13, 4, 2024),
    ('lateley i feel everything', 20, null, 'latelyifeeleverything.png', 15, 11, 2021);

    INSERT INTO album (title, artist_id, band_id, album_cover, label_id, genre_id, yr_released)
VALUES 
    ('awb', null, 13, 'awb.jpg', 2, 5, 1974),
    ('backstreet boys', null, 14, 'millennium.jpg', 16, 3, 1999),
    ('fleetwood mac', null, 15, 'fleetwoodmac.png', 17, 5, 1975),
    ('rumours', null, 15, 'rumours.png', 9, 5, 1977),
    ('frontiers', null, 16, 'frontiers.jpg,', 3, 5, 1983),
    ('little dragon', null, 17, 'littledragon.png', 18, 7, 2007),
    ('slugs of love', null, 17, 'slugsoflove.png', 19, 7, 2023),
    ('golden time of day', null, 18, 'goldentimeofday.jpg', 20, 1, 1978),
    ('nevermind', null, 19, 'nevermind.jpg', 21, 5, 1991),
    ('mothership connection', null, 20, 'mothershipconnection.jpg', 22, 12, 1975);

ALTER TABLE artist RENAME COLUMN artist_img to imgUrl;

ALTER TABLE band RENAME COLUMN band_img to imgUrl;


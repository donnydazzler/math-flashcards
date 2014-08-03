'use strict';

angular.module('yoFlashcardFullstackApp')
  .factory('myfactory', function () {
    return {
      correctImages: [
        "http://www.cmhouston.org/themes/cmhouston-summer/media/images/hacker.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/explore-skylands/explore-giants/swarm.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/explore-skylands/explore-swapforce/sky-free-ranger.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/online-games/punk-shock.png",
        "http://img4.wikia.nocookie.net/__cb20130925155905/skylanders/images/0/06/AIR_-_Free_Ranger_(3)_(Swap_Force_-_Legendary).png",
        "http://img2.wikia.nocookie.net/__cb20091021194801/phineasandferb/images/archive/5/52/20100716191915!Phineas_Flynn.png",
        "http://images.wikia.com/phineasandferb/images/archive/b/ba/20100716192745!Ferb_Fletcher.png",
        "http://img2.wikia.nocookie.net/__cb20130314111723/skylanders/images/2/2c/Tree_Rex_(1).png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/characters/earth/toy/scorp_seriesLegendary_toy.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/characters/tech/toy/tech-series2-drillseargent-toy.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/characters/magic/toy/magic-trapshadow1480-toy.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/characters/fire/toy/fire-fryno-toy.png",
        "http://cdn.bulbagarden.net/upload/thumb/1/18/656Froakie.png/250px-656Froakie.png",
        "http://cdn.bulbagarden.net/upload/thumb/f/fc/657Frogadier.png/250px-657Frogadier.png",
        "http://cdn.bulbagarden.net/upload/thumb/6/67/658Greninja.png/250px-658Greninja.png",
        "http://cdn.bulbagarden.net/upload/thumb/5/54/717Yveltal.png/250px-717Yveltal.png",
        "http://cdn.bulbagarden.net/upload/thumb/b/bf/684Swirlix.png/250px-684Swirlix.png",
        "http://pbskids.org/learn/img/tada.png",
        "http://www.storytimewow.com/wp-content/uploads/2013/06/curious_avatar.jpg",
        "http://assetlibrary.supadu.com/images/working/s146017/1.png",
        "http://assetlibrary.supadu.com/images/working/s146009/1.png",
        "http://img4.wikia.nocookie.net/__cb20121023193826/my-weirder-school-daze/images/3/30/Arlo_Jervis.png",
        "http://www-tc.pbskids.org/apps/media/apps/wild-kratts_1.png",
        "http://fanart.tv/fanart/tv/216851/characterart/wild-kratts-515e6581f3bf2.png",
        "http://38.media.tumblr.com/0b415c21c28401a22a70ac4d22ba2bfd/tumblr_ml74lbMSix1r4sajco1_500.png",
        "http://31.media.tumblr.com/01588cce59954e347d882886d403d18a/tumblr_n7andkCdYC1s4z4l6o1_500.png",
        "http://fc02.deviantart.net/fs71/f/2013/076/b/2/_eeey_by_skyfall00silva-d5yf3vz.png",
        "http://fc07.deviantart.net/fs70/f/2014/126/9/2/wow_by_skyfall00silva-d7hf2n6.png",
        "http://fc09.deviantart.net/fs71/f/2014/114/f/2/wk__say_you_re_sorry_by_trishabeakens-d7fu11l.png",
        "http://lh5.ggpht.com/_PT-EBJOR-EI/SyK4nLp6akI/AAAAAAAAOCE/kjgl1vTyB1w/CuriousGeorge_thumb.gif?imgmax=800",
        "http://ww2.valdosta.edu/~mjguttman/monkey.gif",
        "http://www.gsmr.com/sites/default/files/DT_GA_BUD_17(2).png",
        "http://www.amusementmedia.com/dinotraincontest/images/dinos/selectpark.png",
        "http://www.raileventsinc.com/sites/raileventsinc.com/files/dino_image_group1.png",
        "http://www.disney.co.uk/phineas-and-ferb/common/img/characters/item_phineas.png",
        "http://1.bp.blogspot.com/-qjazcTV_qXc/U3moj6_r5_I/AAAAAAAAfmc/aAIVnCev5f0/s1600/PhotopackPhineasYFerb_BeYourMixerDA+%252812%2529.png",
        "http://1.bp.blogspot.com/-RiwQTm7Pn6U/U3mnB71xWCI/AAAAAAAAfdI/jptGhwpMHpM/s1600/Ferb+%25287%2529.png",
        "http://www.riomovies.com/media/img/content/home/fgLayer-rafael@2x.png",
        "http://icons.iconarchive.com/icons/designbolts/rio-2-movie/512/Rio2-Jewel-icon.png",
        "http://img2.wikia.nocookie.net/__cb20140404173007/rio/images/8/8f/Rio2-Gabi-2-icon.png",
        "http://img1.wikia.nocookie.net/__cb20131014053013/martha-speaks/images/b/b9/Martha.png",
        "http://bloggingmatters.net/wp-content/uploads/2013/01/gangnam-style.png",
        "http://upload.wikimedia.org/wikipedia/en/thumb/6/65/Arthur_Read.svg/648px-Arthur_Read.svg.png",
        "http://img2.wikia.nocookie.net/__cb20130118044954/arthur/images/2/25/Arthur_2.png",
        "http://images3.wikia.nocookie.net/__cb20130209061141/arthur/images/2/23/Binky.png",
        "http://static.tvtropes.org/pmwiki/pub/images/fern_8114.png",
        "http://31.media.tumblr.com/4f73c45bac4f5b0387a5b1d2bda64259/tumblr_mt3q3mFvlS1svdumlo1_500.gif",
        "http://huskiesinwonderland.files.wordpress.com/2013/03/emily_promo.png",
        "http://static.tvtropes.org/pmwiki/pub/images/george_promo_726.png",
        "http://img2.wikia.nocookie.net/__cb20130618221102/skylanders/images/4/4a/Roller_Brawl_copy.png",
        "http://img3.wikia.nocookie.net/__cb20130625064206/skylanders/images/thumb/d/d0/Blast_Zone.png/500px-Blast_Zone.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/explore-skylands/explore-ssa/spyro.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/base/online-games/prism-break.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/trapteam/new-skylanders/front-characters/snap-shot.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/trapteam/new-skylanders/front-characters/krypt-king.png",
        "http://www.skylanders.com/content/dam/atvi/skylanders/trapteam/2-ways-to-play/right-character.png",
        "http://img3.wikia.nocookie.net/__cb20130922232619/fantendo/images/a/a9/Wash_Buckler.png",
        "http://www.futura-online.com/images/skylanders/stealthelf.png",
        "http://fc03.deviantart.net/fs70/f/2013/277/f/8/athode_magna_charge_by_acearchdragon-d6p74nw.png",
        "http://www.toysrus.is/~/media/Images/49/0/7/SKYLANDERS-GIANTS-Figure-497449-924707.ashx?bc=Transparent&as=1&h=313&w=571",
        "http://img3.wikia.nocookie.net/__cb20140314011348/pixar/images/4/48/Lighting_mcqueen.png",
        "http://cars.mattel.com/gfx/cat_italiano_car.png",
        "http://cars.mattel.com/gfx/cat_wheelwell_car.png",
        "http://cars.mattel.com/gfx/cat_rusteze_car.png",
        "http://cars.mattel.com/gfx/cat_worldgrandprix_car.png",
        "http://cars.mattel.com/gfx/cat_palace_car.png",
        "http://img1.wikia.nocookie.net/__cb20140314011950/pixar/images/4/4b/Sally_carrera.png",
        "http://img2.wikia.nocookie.net/__cb20140314021211/pixar/images/d/dd/Doc_Hudson.png",
        "http://img2.wikia.nocookie.net/__cb20140314231411/pixar/images/e/e8/Finn_mcmissile.png",
        "http://img4.wikia.nocookie.net/__cb20140314013528/pixar/images/b/b5/Flo.png",
        "http://bdd.worldofcars-forum.fr/bddcars/images/personnages/snot_rod.png",
        "http://www.gretsch-talk.com/forum/attachments/freds-barcalounge/29352d1370074376t-show-off-your-tractors-cars-movie-cow-psd16497.jpg",
        "http://img2.wikia.nocookie.net/__cb20110706201640/pixarland/es/images/c/c3/Martin_(tow_mater).png",
        "http://img4.wikia.nocookie.net/__cb20121105002458/worldofcars/images/6/6e/Mater_cars_2.png",
        "http://www.juicyjuice.com/App_Themes/Spy-School/images/global/mater_img.png",
        "http://img1.wikia.nocookie.net/__cb20110825135342/pixarcars/images/0/04/Wingo-1-.png",
        "http://img2.wikia.nocookie.net/__cb20110923021916/worldofcarsdrivein/images/c/cd/Boost.png",
        "http://bogerilasailing.com/wp-content/uploads/2014/04/Ramone.png",
        "http://img2.wikia.nocookie.net/__cb20110923022702/worldofcarsdrivein/images/2/23/Dj.png",
        "http://img2.wikia.nocookie.net/__cb20110919120807/worldofcarsdrivein/images/3/32/Derek_decals_dobbs.png",
        "http://icons.iconarchive.com/icons/designbolts/disney-planes-2013/512/Dusty-Plane-Pose-icon.png",
        "http://img4.wikia.nocookie.net/__cb20131111032213/disney/images/f/f8/ElChupacabra2-Planes.png",
        "http://bdd.worldofcars-forum.fr/bddcars/images/personnages/jan_kowalski.png",
        "http://img4.wikia.nocookie.net/__cb20131221205236/worldofcarsdrivein/images/4/4d/Rochelle-Planes.png",
        "http://img2.wikia.nocookie.net/__cb20131111033039/disney/images/5/5b/Leadbottom-Planes.png",
        "http://img3.wikia.nocookie.net/__cb20131224182824/disney/images/0/09/Skipper_riley.png",
        "http://icons.iconarchive.com/icons/designbolts/disney-planes-2013/512/Ripslinger-Plane-icon.png",
        "http://images1.wikia.nocookie.net/__cb20130626132354/worldofcarsdrivein/images/thumb/7/79/Ripslinger.png/500px-Ripslinger.png",
        "http://img3.wikia.nocookie.net/__cb20131112060331/disney/images/c/cb/ColinCowling-Planes.png",
        "http://img3.wikia.nocookie.net/__cb20140209182555/disneyplanes/images/f/f8/ElChupacabra-Planes.png",
        "http://1.bp.blogspot.com/-yWBzWNVb0ac/Ukhdf8gWGrI/AAAAAAAAVpI/Lp7bj-wbHkM/s1600/Huggy_Official_Art.png",
        "http://4.bp.blogspot.com/-l0G9DszQfGM/UjWsEdPQxOI/AAAAAAAAVQE/TcDcRKI3ArE/s1600/digit.png",
        "http://img2.wikia.nocookie.net/__cb20140423205529/cyberchase/images/thumb/e/e2/Hacker.png/500px-Hacker.png",
        "http://img1.wikia.nocookie.net/__cb20140423205713/cyberchase/images/thumb/0/0a/Matt.png/416px-Matt.png",
        "http://wm.schoolofdragons.com/SoD/Joomla/templates/schoolofdragons/images/astrid-stormfly-2-how-to-train-your-dragon.png",
        "http://img1.wikia.nocookie.net/__cb20131225194008/howtotrainyourdragon/images/e/e5/Fishlegs-meatlug-2-school-of-dragons.png",
        "http://www.poppymoon.com/counselorblog/wp-content/uploads/2013/03/dr_seuss-615x1024.png",
        "http://www.vectorsland.com/imgd/l56756-the-grinch-logo-65964.png",
        "http://www.gruffalo.com/gruffalo/media/Assets/generic-images/the-story-4.png",
        "http://fanart.tv/fanart/tv/81164/characterart/super-why-515e7ef8e0af7.png",
        "http://img1.wikia.nocookie.net/__cb20140518200859/plantsvszombies/images/1/1c/Gatling_pea_2.png",
        "http://img1.wikia.nocookie.net/__cb20140518200531/plantsvszombies/images/a/a2/Samurai_Repeater.png",
        "http://fc00.deviantart.net/fs71/i/2013/267/a/8/plants_vs__zombie_mario_by_vinny_vieh-d6nn9ci.png",
        "http://cdn3.volusion.com/jants.petuy/v/vspfiles/photos/19969-3.gif?1375876872",
        "http://cdn3.volusion.com/jants.petuy/v/vspfiles/photos/19968-3.gif?1375876833",
        "http://cdn3.volusion.com/jants.petuy/v/vspfiles/photos/19963-3.gif?1375876023",
        "http://www.cuded.com/wp-content/uploads/2011/01/20110129_sunflower_by_welikegroovyturtles_d35wtj4.png"
      ]
    };

//    return {
//      someMethod: function () {
//        return meaningOfLife;
//      }
//    };
  });

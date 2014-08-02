'use strict';

angular.module('yoFlashcardFullstackApp')
  .factory('myfactory', function ($cookieStore) {
    return {
      score: $cookieStore.get('math-flashcards.score') || 0,
      selectedMaxNumber: $cookieStore.get('math-flashcards.selectedMaxNumber') || 0,
      selectedMathFunction: $cookieStore.get('math-flashcards.selectedMathFunction') || '',
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
        "http://assetlibrary.supadu.com/images/working/s144434/1.png",
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
        "http://bloggingmatters.net/wp-content/uploads/2013/01/gangnam-style.png"
      ]
    };

//    return {
//      someMethod: function () {
//        return meaningOfLife;
//      }
//    };
  });

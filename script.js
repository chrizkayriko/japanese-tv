

let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        let slides = document.getElementsByClassName("promo-slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

const channels = [
    {
        name: "NHK Education",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/NHK%E7%B7%8F%E5%90%88%E3%83%AD%E3%82%B42020-.png",
        url: "https://vnpt.nekocdn.xyz/d074504f-ca7a-467e-a67c-a91e69461775.m3u8"
    },
    {
        name: "NHK Education (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/NHK%E7%B7%8F%E5%90%88%E3%83%AD%E3%82%B42020-.png",
        url: "https://stream01.willfonk.com/live_playlist.m3u8?cid=BS291&r=FHD&ccode=JP&m=d0:20:20:04:35:cc&t=0d6938cb3dcf4b79848bc1753a59daf1"
    },
    {
        name: "NHK Education (Backup 2)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/NHK%E7%B7%8F%E5%90%88%E3%83%AD%E3%82%B42020-.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd02&isp=10&bind=0&uin=159413&playseek=0"
    },
    {
        name: "NHK General",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/NHKE%E3%83%86%E3%83%AC%E3%83%AD%E3%82%B42020-.png",
        url: "https://vnpt.nekocdn.xyz/b783a989-9e73-4bce-bfa3-9996a9eaa455.m3u8"
    },
    {
        name: "NHK General (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/NHKE%E3%83%86%E3%83%AC%E3%83%AD%E3%82%B42020-.png",
        url: "https://stream01.willfonk.com/live_playlist.m3u8?cid=BS291&r=FHD&ccode=JP&m=d0:20:20:04:35:cc&t=0d6938cb3dcf4b79848bc1753a59daf1"
    },
    {
        name: "NHK General (Backup 2)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/NHKE%E3%83%86%E3%83%AC%E3%83%AD%E3%82%B42020-.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd01&isp=10&bind=0&uin=159413&playseek=0"
    },
    {
        name: "NHK General (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/NHKE%E3%83%86%E3%83%AC%E3%83%AD%E3%82%B42020-.png",
        url: "http://r3jx.djtmewibu.com/nhkg/index.m3u8"
    },
    {
        name: "Nippon TV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nippon_TV_logo_2014.svg/2560px-Nippon_TV_logo_2014.svg.png",
        url: "https://vnpt.nekocdn.xyz/427b3914-a2b4-401b-b5ed-706158d73908.m3u8"
    },
    {
        name: "Nippon TV (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nippon_TV_logo_2014.svg/2560px-Nippon_TV_logo_2014.svg.png",
        url: "https://stream01.willfonk.com/live_playlist.m3u8?cid=BS294&r=FHD&ccode=JP&m=d0:20:20:04:35:cc&t=0d6938cb3dcf4b79848bc1753a59daf1"
    },
    {
        name: "Nippon TV (Backup 2)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nippon_TV_logo_2014.svg/2560px-Nippon_TV_logo_2014.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd03&isp=10&bind=0&uin=159413&playseek=0"
    },
    {
        name: "TBS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tokyo_Broadcasting_System_logo_2020.svg/1280px-Tokyo_Broadcasting_System_logo_2020.svg.png",
        url: "https://vnpt.nekocdn.xyz/memfs/d90fa53e-51d2-4364-aa9b-480a883a2bfb.m3u8"
    },
    {
        name: "TBS (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tokyo_Broadcasting_System_logo_2020.svg/1280px-Tokyo_Broadcasting_System_logo_2020.svg.png",
        url: "https://stream01.willfonk.com/live_playlist.m3u8?cid=BS296&r=FHD&ccode=JP&m=d0:20:20:04:35:cc&t=0d6938cb3dcf4b79848bc1753a59daf1"
    },
    {
        name: "TBS (Backup 2)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tokyo_Broadcasting_System_logo_2020.svg/1280px-Tokyo_Broadcasting_System_logo_2020.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd04&isp=10&bind=0&uin=159413&playseek=0"
    },
    {
        name: "Fuji TV",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Fuji_TV_Logo.svg/1049px-Fuji_TV_Logo.svg.png",
        url: "https://vnpt.nekocdn.xyz/memfs/5417ea42-1305-40d2-b318-bcc9552fe3fb.m3u8"
    },
    {
        name: "Fuji TV (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Fuji_TV_Logo.svg/1049px-Fuji_TV_Logo.svg.png",
        url: "https://stream01.willfonk.com/live_playlist.m3u8?cid=BS298&r=FHD&ccode=JP&m=d0:20:20:04:35:cc&t=0d6938cb3dcf4b79848bc1753a59daf1"
    },
    {
        name: "Fuji TV (Backup 2)",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Fuji_TV_Logo.svg/1049px-Fuji_TV_Logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd05&isp=10&bind=0&uin=159413&playseek=0"
    },
    {
        name: "TV Asahi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/TV_Asahi_Logo.svg/1280px-TV_Asahi_Logo.svg.png",
        url: "https://vnpt.nekocdn.xyz/0fc25793-9d0a-459d-b645-46254bd89616.m3u8"
    },
    {
        name: "TV Asahi (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/TV_Asahi_Logo.svg/1280px-TV_Asahi_Logo.svg.png",
        url: "https://stream01.willfonk.com/live_playlist.m3u8?cid=BS295&r=FHD&ccode=JP&m=d0:20:20:04:35:cc&t=0d6938cb3dcf4b79848bc1753a59daf1"
    },
    {
        name: "TV Asahi (Backup 2)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/TV_Asahi_Logo.svg/1280px-TV_Asahi_Logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd06&isp=10&bind=0&uin=159413&playseek=0"
    },
    {
        name: "TV Tokyo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/TV_Tokyo_logo_2023.svg/2560px-TV_Tokyo_logo_2023.svg.png",
        url: "https://vnpt.nekocdn.xyz/memfs/202bea4f-c55a-4dbc-a5f3-66343cc98b0b.m3u8"
    },
    {
        name: "TV Tokyo (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/TV_Tokyo_logo_2023.svg/2560px-TV_Tokyo_logo_2023.svg.png",
        url: "https://stream01.willfonk.com/live_playlist.m3u8?cid=BS297&r=FHD&ccode=JP&m=d0:20:20:04:35:cc&t=0d6938cb3dcf4b79848bc1753a59daf1"
    },
    {
        name: "TV Tokyo (Backup 2)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/TV_Tokyo_logo_2023.svg/2560px-TV_Tokyo_logo_2023.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd07&isp=10&bind=0&uin=159413&playseek=0"
    },
    {
        name: "Tokyo MX 1",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tokyo_metropolitan_television_logo_%28rainbow%29.svg/2560px-Tokyo_metropolitan_television_logo_%28rainbow%29.svg.png",
        url: "https://vnpt.nekocdn.xyz/memfs/b9925493-fc55-40fe-b813-07ead8974f3f.m3u8"
    },
    {
        name: "Tokyo MX 1 (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tokyo_metropolitan_television_logo_%28rainbow%29.svg/2560px-Tokyo_metropolitan_television_logo_%28rainbow%29.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd08"
    },
    {
        name: "Tokyo MX 1 (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tokyo_metropolitan_television_logo_%28rainbow%29.svg/2560px-Tokyo_metropolitan_television_logo_%28rainbow%29.svg.png",
        url: "http://r3jx.djtmewibu.com/mx1/index.m3u8"
    },
    {
        name: "Tokyo MX 2 (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tokyo_metropolitan_television_logo_%28rainbow%29.svg/2560px-Tokyo_metropolitan_television_logo_%28rainbow%29.svg.png",
        url: "http://r3jx.djtmewibu.com/mx2/index.m3u8"
    },
    {
        name: "NHK General Osaka",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/NHK%E7%B7%8F%E5%90%88%E3%83%AD%E3%82%B42020-.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gx06"
    },
    {
        name: "MBS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mainichi_Broadcasting_System_logo.svg/2560px-Mainichi_Broadcasting_System_logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gx01"
    },
    {
        name: "ABC TV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Asahi_Broadcasting_Corporation_Logo.svg/2560px-Asahi_Broadcasting_Corporation_Logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gx02"
    },
    {
        name: "Kansai TV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ktv_logo.svg/2560px-Ktv_logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gx03"
    },
    {
        name: "YTV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Yomiuri_Telecasting_Corporation_Logo.svg/2560px-Yomiuri_Telecasting_Corporation_Logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gx04&isp=10&bind=0&uin=159413&playseek=0"
    },
    {
        name: "TV Osaka",
        logo: "https://seeklogo.com/images/T/tv-osaka-logo-8BA164D52E-seeklogo.com.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gx05"
    },
    {
        name: "Sun TV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/SUN-TV_wordmark_2019.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gx07"
    },

    {
        name: "BS NHK",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/NHK_BS.png",
        url: "https://vnpt.nekocdn.xyz/9ca1151d-7a96-4c1a-9672-8853124bba85.m3u8"
    },

    {
        name: "BS NHK (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/NHK_BS.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs11"
    },

    {
        name: "NHK BSP 4K",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/NHK_BSP4K.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs01"
    },

    {
        name: "BS Nippon TV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/BS4_logo.svg/1200px-BS4_logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs02"
    },

    {
        name: "BS Asahi",
        logo: "https://www.lyngsat.com/logo/tv/bb/bs_asahi.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs03"
    },

    {
        name: "BS TBS",
        logo: "https://www.lyngsat.com/logo/tv/bb/bs-tbs-jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs04"
    },

    {
        name: "BS TV Tokyo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/BS_TV_Tokyo_%28Japanese%29_2023.svg/2560px-BS_TV_Tokyo_%28Japanese%29_2023.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs05"
    },

    {
        name: "BS TV Tokyo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/BS_TV_Tokyo_%28Japanese%29_2023.svg/2560px-BS_TV_Tokyo_%28Japanese%29_2023.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs05"
    },

    {
        name: "BS Fuji TV HD",
        logo: "https://www.bsfuji.tv/top/index/img/sns_img.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs06"
    },
    
    {
        name: "BS 11",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/BS11_logo.svg/2560px-BS11_logo.svg.pngion_logo_%28rainbow%29.svg.png",
        url: "https://vnpt.nekocdn.xyz/11644528-009c-47e3-a444-16da17f3f88f.m3u8"
    },
    {
        name: "BS 11 (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/BS11_logo.svg/2560px-BS11_logo.svg.pngion_logo_%28rainbow%29.svg.png",
        url: "http://r3jx.djtmewibu.com/bs11/index.m3u8"
    },

    {
        name: "Animax",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Animax.svg/1920px-Animax.svg.png",
        url: "https://vnpt.nekocdn.xyz/memfs/68ea67df-d4e1-44cb-bdb9-179dd01b7db4.m3u8"
    },

    {
        name: "WOWOW Prime",
        logo: "https://corporate.wowow.co.jp/recruit/assets/img/logo-wowow_prime.png",
        url: "https://vnpt.nekocdn.xyz/memfs/c7f9407a-6fcb-46e2-a649-98c15ffe0a6e.m3u8"
    },

    {
        name: "WOWOW Prime (Backup)",
        logo: "https://corporate.wowow.co.jp/recruit/assets/img/logo-wowow_prime.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs12"
    },

    {
        name: "WOWOW Live",
        logo: "https://corporate.wowow.co.jp/recruit/assets/img/logo-wowow_live.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs20"
    },

    {
        name: "WOWOW Cinema",
        logo: "https://corporate.wowow.co.jp/recruit/assets/img/logo-wowow_cinema.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs07"
    },

    {
        name: "Star Channel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Star_Channel-Japan.svg/2560px-Star_Channel-Japan.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs08"
    },

    {
        name: "BS Animax",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Animax.svg/1200px-Animax.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs15"
    },

    {
        name: "SPORTS 1",
        logo: "https://www.jsports.co.jp/img/icon/ch1.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs18"
    },

    {
        name: "SPORTS 2",
        logo: "https://www.jsports.co.jp/img/icon/ch2.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs19"
    },

    {
        name: "SPORTS 3",
        logo: "https://www.jsports.co.jp/img/icon/ch3.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs21"
    },

    {
        name: "SPORTS 4",
        logo: "https://www.jsports.co.jp/img/icon/ch4.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs22"
    },

    {
        name: "Green Channel",
        logo: "https://www.lyngsat.com/logo/tv/gg/green_channel_jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs14"
    },

    {
        name: "BS Japan Movie Channel",
        logo: "https://www.starcat.co.jp/ch/upload/channel/3/nihon-eiga_logo.jpg",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs23"
    },

    {
        name: "Disney Channel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2019_Disney_Channel_logo.svg/250px-2019_Disney_Channel_logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs24"
    },

    {
        name: "Fishing Vision",
        logo: "https://www.lyngsat.com/logo/tv/tt/tsuri_vision.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs25"
    },

    {
        name: "BS Shochiku Tokyu",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/BS_Shochiku_Tokyu_logo.jpg",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs31"
    },

    {
        name: "AT-X",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/AT-X_logo.svg/2560px-AT-X_logo.svg.png",
        url: "https://vnpt.nekocdn.xyz/memfs/934473ee-a4c0-40be-bae1-5c692023c2bd.m3u8"
    },

    {
        name: "AT-X (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/AT-X_logo.svg/2560px-AT-X_logo.svg.png",
        url: "https://neetball.net/live/neet3.m3u8"
    },
    {
        name: "AT-X (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/AT-X_logo.svg/2560px-AT-X_logo.svg.png",
        url: "http://r3jx.djtmewibu.com/at-x/index.m3u8"
    },

    {
        name: "MTV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MTV_2021_%28brand_version%29.svg/240px-MTV_2021_%28brand_version%29.svg.png",
        url: "https://vnpt.nekocdn.xyz/memfs/4b5031a9-04eb-4320-a708-bad2ac658205.m3u8"
    },

    {
        name: "MTV (Backup)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MTV_2021_%28brand_version%29.svg/240px-MTV_2021_%28brand_version%29.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs18"
    },

    {
        name: "Space Shower TV",
        logo: "https://www.lyngsat.com/logo/tv/ss/space_shower_tv.png",
        url: "https://vnpt.nekocdn.xyz/memfs/bb127794-ed6f-44cb-9a77-3f1e63c0dbd9.m3u8"
    },

    {
        name: "Space Shower TV (Backup)",
        logo: "https://www.lyngsat.com/logo/tv/ss/space_shower_tv.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs26"
    },

    {
        name: "Jidaigeki Senmon",
        logo: "https://www.lyngsat.com/logo/tv/jj/jidaigeki.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs04"
    },

    {
        name: "Toei Channel",
        logo: "https://www.lyngsat-logo.com/logo/tv/tt/toei_channel.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs27"
    },

    {
        name: "Eisei Gekijo",
        logo: "https://www.lyngsat-logo.com/logo/tv/ee/eisei_gekijo.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs22"
    },

    {
        name: "Family Gekijo",
        logo: "https://www.lyngsat-logo.com/logo/tv/ff/family_gekijyo_jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs20"
    },

    {
        name: "Movie Plus",
        logo: "https://www.lyngsat-logo.com/logo/tv/mm/movie_plus_jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs14"
    },

    {
        name: "Home Drama Channel",
        logo: "https://www.lyngsat.com/logo/tv/hh/home-drama-channelpng-jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs05"
    },

    {
        name: "Tabi Channel",
        logo: "https://www.lyngsat.com/logo/tv/tt/tabi_channel.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs12"
    },

    {
        name: "Fuji TV Next",
        logo: "https://www.lyngsat.com/logo/tv/ff/fuji_tv_next.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs26"
    },

    {
        name: "Sky A",
        logo: "https://www.lyngsat-logo.com/logo/tv/ss/sky-a-jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs01"
    },

    {
        name: "Gaora Sports",
        logo: "https://www.lyngsat-logo.com/logo/tv/gg/gaora-sportspng-jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs17"
    },

    {
        name: "Golf Network",
        logo: "https://www.lyngsat.com/logo/tv/gg/golf-network-jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs03"
    },

    {
        name: "Nippon TV G+",
        logo: "https://www.lyngsat-logo.com/logo/tv/nn/ntv-g-plus-jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs02"
    },

    {
        name: "Mondo TV",
        logo: "https://www.lyngsat.com/logo/tv/mm/mondo_tv_jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs21"
    },

    {
        name: "Channel Ginga",
        logo: "https://www.lyngsat.com/logo/tv/cc/channel_ginga.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs29"
    },

    {
        name: "Music Japan TV",
        logo: "https://www.lyngsat.com/logo/tv/mm/music_japan_tv.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs06"
    },

    {
        name: "Kayo Pops",
        logo: "https://www.lyngsat.com/logo/tv/kk/kayo-pops-jp.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs13"
    },

    {
        name: "Lala TV",
        logo: "https://www.lyngsat.com/logo/tv/ll/lala_tv.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs19"
    },

    {
        name: "Takarazuka Sky Stage",
        logo: "https://tvguide.myjcom.jp/monomedia/ch_logo/jcom/logo-65406-154-400x400.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs28"
    },

    {
        name: "Kids Station TV",
        logo: "https://www.lyngsat-logo.com/logo/tv/kk/kidsstation.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs07"
    },

    {
        name: "Cartoon Network",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/CARTOON_NETWORK_logo.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs25"
    },

    {
        name: "Disney Junior",
        logo: "https://www.lyngsat-logo.com/logo/tv/dd/disney_junior_us.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs23"
    },

    {
        name: "Discovery Channel",
        logo: "https://www.lyngsat-logo.com/logo/tv/dd/discovery-channel-east-us.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs08"
    },

    {
        name: "National Geographic Channel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/National_Geographic_Channel.svg/320px-National_Geographic_Channel.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs10"
    },

    {
        name: "Animal Planet",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/2018_Animal_Planet_logo.svg/1200px-2018_Animal_Planet_logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs24"
    },

    {
        name: "History Channel",
        logo: "https://www.lyngsat-logo.com/logo/tv/hh/history_us.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs09"
    },

    {
        name: "CNN Japan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/CNNj_channel_logo.svg/2048px-CNNj_channel_logo.svg.png",
        url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs16"
    },

    {
        name: "QVC",
        logo: "https://i.imgur.com/xWSzQ34.png",
        url: "https://cdn-live1.qvc.jp/iPhone/1501/1501.m3u8"
    },

    {
        name: "QVC",
        logo: "https://i.imgur.com/xWSzQ34.png",
        url: "https://cdn-live1.qvc.jp/iPhone/1501/1501.m3u8"
    },
    {
        name: "TVK (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tvk_logo.svg/250px-Tvk_logo.svg.png",
        url: "http://r3jx.djtmewibu.com/tvk/index.m3u8"
    },
    {
        name: "TV Tama (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tvs_logo.svg/1920px-Tvs_logo.svg.png",
        url: "http://r3jx.djtmewibu.com/tvs/index.m3u8"
    },
    {
        name: "UX TV (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Niigata_UX_logo.svg/200px-Niigata_UX_logo.svg.png",
        url: "http://r3jx.djtmewibu.com/ux21/index.m3u8"
    },
    {
        name: "UX TV (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Niigata_UX_logo.svg/200px-Niigata_UX_logo.svg.png",
        url: "http://r3jx.djtmewibu.com/ux21/index.m3u8"
    },
    {
        name: "TSS (TEST BROADCAST)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tss_logo.svg/1920px-Tss_logo.svg.png",
        url: "http://r3jx.djtmewibu.com/tss/index.m3u8"
    },

    // Add other channels here...
];

let currentIndex = 0;

const videoPlayer = document.getElementById('videoPlayer');
const channelLogo = document.getElementById('channelLogo');
const channelName = document.getElementById('channelName');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateChannel() {
    const channel = channels[currentIndex];
    videoPlayer.src = channel.url;
    channelLogo.src = channel.logo;
    channelName.textContent = channel.name;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === channels.length - 1;
}

function changeChannel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= channels.length) {
        currentIndex = channels.length - 1;
    }
    updateChannel();
}

// Initialize the first channel
updateChannel();

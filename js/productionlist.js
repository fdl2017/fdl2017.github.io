var productionlist = {
    title:["作品名正式名称","英文名称","日本語コピーライト","copyright","Short copyright","製作年","カテゴリー","尺/話数"],
    list:[
        {id:"1",	data:["ウルトラマンジード","Ultraman Geed","円谷プロ　ウルトラマンジード製作委員会・テレビ東京","©TSUBURAYA PROD.©ULTRAMANGEED PRODUCTION CONSORTIUM・TV TOKYO","","2017","TV series","[30min/25EP]"]},
        {id:"2",	data:["劇場版ウルトラマンオーブ　絆の力、おかりします！","ULTRAMAN ORB THE MOVIE","© 劇場版ウルトラマンオーブ製作委員会","©2017 UO FILM PARTNERS","","2017","Film","70min"]},
        {id:"3",	data:["ウルトラマンオーブ THE ORIGIN SAGA","Ultraman Orb The Origin Saga","©2017円谷プロ","©2017 TSUBURAYA PRODUCTIONS","","2017","TV series","[30min/12EP]"]},
        {id:"4",	data:["ウルトラマンゼロ THE CHRONICLE","Ultraman Zero:The Chronicle","©2017円谷プロ","©2017 TSUBURAYA PRODUCTIONS","","2017","TV series","[30min/25EP]"]},
        {id:"5",	data:["怪獣娘","Kaiju Girls","©円谷プロ","©TSUBURAYA PRODUCTIONS ©KAIJU GIRLS PRODUCTION CONSORTIUM","©TPC ©KGPC","2016","Anime","[５min/12EP]"]},
        {id:"6",	data:["ウルトラマンオーブ","ULTRAMAN ORB","©円谷プロ　(C)ウルトラマンオーブ製作委員会・テレビ東京","©TSUBURAYA PROD.©ULTRAMANORB PRODUCTION CONSORTIUM・TV TOKYO","©TPC ©UO・TX","2016","TV SERIES","[30min/25EP]"]},
        {id:"7",	data:["劇場版ウルトラマンX","ULTRAMAN X The Movie","©2016「劇場版ウルトラマンX」製作委員会","©2016 UX FILM PARTNERS","","2016","FILM","63min"]},
        {id:"8",	data:["ウルトラファイトビクトリー","Ultra Fight Victory","©2015 円谷プロ","©2015 TSUBURAYA PRODUCTIONS","","2015","","3ｍin"]},
        {id:"9",	data:["劇場版 ウルトラマンギンガS 決戦！ウルトラ１０勇士！！","Ultraman Ginga S the movie","©2015「劇場版 ウルトラマンギンガＳ」製作委員会","©2015 ULTRAMAN GINGA S FILM PARTNERS","","2015","Film","63min"]},
        {id:"10",	data:["ウルトラマンX","Ultraman　X","©2015 ウルトラマンエックス製作委員会","©2015 TSUBURAYA PRODUCTIONS","","2015","TV series","[30min/24EP]"]},
        // {id:"11",	data:["ウルトラマンギンガS","Ultraman Ginga S","©2014 円谷プロ","©2014 TSUBURAYA PRODUCTIONS","","2014","TV series","[30min/16EP]"]},
        // {id:"12",	data:["ネオ・ウルトラQ","Neo Ultra Q","©2013円谷プロ・WOWOW","©2013 TSUBURAYA PRODUCTIONS・WOWOW","","2013","Film","[30min/12EP]"]},
        // {id:"13",	data:["ウルトラマンギンガ","Ultraman Ginga","©2013円谷プロ","©2013 TSUBURAYA PRODUCTIONS","","2013","TV series","[30min/11EP]"]},
        // {id:"14",	data:["ウルトラマンギンガ劇場スペシャル","Ultraman Ginga Theater Special","©2013円谷プロ","©2013 TSUBURAYA PRODUCTIONS","","2013","Film",""]},
        // {id:"15",	data:["ウルトラマンギンガ劇場スペシャル ウルトラ怪獣☆ヒーロー大乱戦!","Ultraman Ginga Theater Special Ultra Monster ☆ Hero Battle Royal!","©2013円谷プロ","©2013 TSUBURAYA PRODUCTIONS","","2013","Film",""]},
        // {id:"16",	data:["ウルトラマンゼロクロニクル","Ultraman Zero The Chronicle","©2013円谷プロ","©2013 TSUBURAYA PRODUCTIONS","","2013","TV series","[30min/25EP]"]},
        // {id:"17",	data:["ウルトラマン列伝 ウルトラゼロファイト","ULTRA ZERO FIGHT","©2012円谷プロ","©2012 TSUBURAYA PRODUCTIONS","","2012","Film",""]},
        // {id:"18",	data:["ウルトラマンSAGA","Ultraman Saga","©2011「ウルトラマンサーガ」製作委員会","©2011 Ultraman Saga Film Partners","","2011","Film","90min"]},
        // {id:"19",	data:["ウルトラマンゼロ外伝 キラー ザ ビートスター (Stage1 & 2)","Ultraman Zero Side Story: Killer the Beatstar (STAGE1： Steel Invasion & STAGE2：Vows of Justice)","©円谷プロ","©2011 TSUBURAYA PRODUCTIONS","","2011","Original Video","31min&32min"]},
        // {id:"20",	data:["ウルトラ銀河伝説外伝 ウルトラマンゼロVSダークロプスゼロ (Stage1 & 2)","ULTRA GALAXY LEGEND SIDE STORY: ULTRAMAN ZERO VS DARKLOPS ZERO (Stage1：Colliding Space & Stage2：Zero's Final","©円谷プロ","©2010 TSUBURAYA PRODUCTIONS","","2010","Original Video","32min&32min"]},
        // {id:"21",	data:["ウルトラマンゼロ THE MOVIE 超決戦! ベリアル銀河帝国","ULTRAMAN ZERO: THE REVENGE OF BELIAL","©2010 「ウルトラマンゼロ THE MOVIE」製作委員会","©2010 UZ-ROB Film Partners","","2010","Film","100min"]},
        // {id:"22",	data:["大怪獣バトル ウルトラ銀河伝説","MEGA MONSTER BATTLE ULTRA GALAXY: THE MOVIE","©2009 「大怪獣バトル ウルトラ銀河伝説」製作委員会","©2009 MMB-UG Film Partners","","2009","Film","96min"]},
        // {id:"23",	data:["ウルトラマンメビウス外伝 ゴーストリバース (Stage1 & 2)","ULTRAMAN MEBIUS Side Story: GHOST REBIRTH　STAGE1: Graveyard of Darkness STAGE2: Emperor of Resurrection","©2009 円谷プロ","©2009 TSUBURAYA PRODUCTIONS","","2009","Original Video","26min&26min"]},
        // {id:"24",	data:["大決戦!超ウルトラ8兄弟","SUPERIOR 8 ULTRAMAN BROTHERS","©2008『大決戦！超ウルトラ8兄弟』製作委員会","©2008 SUPERIOR 8 ULTRAMAN BROTHERS Production Consortium","","2008","Film","97min"]},
        // {id:"25",	data:["ウルトラギャラクシー大怪獣バトル NEVER ENDING ODYSSEY","ULTRA GALAXY MEGA MONSTER BATTLE: SEASON2 NEVER ENDING ODYSSEY","©2008円谷プロ・UGプロジェクト","©2008 TSUBURAYA PRODUCTIONS ・ UG Project","","2008","TV series","[30min/13EP]"]},
        // {id:"26",	data:["ウルトラマンマックス クライマックスストーリーズ","ULTRAMAN MAX: CLIMAX STORY","","#N/A","","2008","Original Video","60min"]},
        // {id:"27",	data:["ウルトラマンメビウス外伝 アーマードダークネス　(Stage1 & 2)","ULTRAMAN MEBIUS SIDE STORY: ARMORED DARKNESS (STAGE 1 &","©2008 円谷プロ","©2008 TSUBURAYA PRODUCTIONS","","2008","Original Video","24min&24min"]},
        // {id:"28",	data:["ウルトラギャラクシー大怪獣バトル","ULTRA GALAXY MEGA MONSTER BATTLE: SEASON1","©2007円谷プロ","©2007 TSUBURAYA PRODUCTIONS","","2007","TV series","[30min/13EP]"]},
        // {id:"29",	data:["ウルトラセブン X","ULTRA SEVEN X","©2007円谷プロ","©2007 ULTRASEVEN X PROJECT","","2007","TV series","[30min/6EP]"]},
        // {id:"30",	data:["ミラーマン REFLEX","MIRROR MAN: REFLEX","©2006円谷プロ","©2006 TSUBURAYA PRODUCTIONS","","2006","Non Ult.","[50min/3EP]"]},
        // {id:"31",	data:["ウルトラマンメビウス","ULTRAMAN MEBIUS","©2006円谷プロ","©2006 TSUBURAYA PRODUCTIONS","","2006","TV series","[30min/50EP]"]},
        // {id:"32",	data:["ウルトラマンメビウス&ウルトラ兄弟","ULTRAMAN MEBIUS & ULTRAMAN BROTHERS","©2006 ｳﾙﾄﾗﾏﾝﾒﾋﾞｳｽ＆ｳﾙﾄﾗ兄弟製作委員会","©2006 ULTRAMAN MEBIUS &ULTRAMAN BROTHERS Production","","2006","Film","93min"]},
        // {id:"33",	data:["ウルトラマンメビウス外伝 ヒカリサーガ","ULTRAMAN MEBIUS SIDE STORY: HIKARI SAGA","","©2006 TSUBURAYA PRODUCTIONS","","2006","Original Video","40min"]},
        // {id:"34",	data:["ウルトラマンマックス","ULTRAMAN MAX","©2005円谷プロ","©2005 TSUBURAYA PRODUCTIONS","","2005","TV series","[30min/40EP]"]},
        // {id:"35",	data:["ウルトラマンマックス　怪獣大図鑑","ULTRAMAN MAX: MONSTER ENCYCLOPEDIA 1","","#N/A","","2005","Original Video","30min"]},
        // {id:"36",	data:["ウルトラマンマックス　怪獣大図鑑2","ULTRAMAN MAX: MONSTER ENCYCLOPEDIA 2","","#N/A","","2005","Original Video","32min&32min"]},
        // {id:"37",	data:["ウルトラマンネクサス","ULTRAMAN NEXUS","©2004円谷プロ","©2004 TSUBURAYA PRODUCTIONS","","2004","TV series","[30min/37EP]"]},
        // {id:"38",	data:["ULTRAMAN","ULTRAMAN: THE NEXT","©2004 映画ｳﾙﾄﾗﾏﾝｻﾞﾈｸｽﾄ","©2004 ULTRAMAN: THE NEXT Production Consortium","","2004","Film","97min"]},
        // {id:"39",	data:["オタスケガール",,"","#N/A","","2003","Non Ult.","[30min/65EP]"]},
        // {id:"40",	data:["ウルトラマンコスモスVSウルトラマンジャスティス THE FINAL BATTLE","ULTRAMAN COSMOS VS ULTRAMAN JUSTICE: THE FINAL BATTLE","©2003映画ｳﾙﾄﾗﾏﾝｺｽﾓｽVSｼﾞｬｽﾃｨｽ","©2003 TSUBURAYA PRODUCTIONS ©2003 Ultraman Cosmos vs Ultraman Justice Movie Production Consortium","","2003","Film","77min"]},
        // {id:"41",	data:["新世紀ウルトラマン伝説","NEW CENTURY ULTRAMAN LEGEND","©2002 円谷プロ　　©2002 ウルトラマン伝説プロジェクト","©2002 New Century Ultraman Legend Project","","2002","Film","15min"]},
        // {id:"42",	data:["新世紀2003ウルトラマン伝説 THE KING'S JUBILEE","NEW CENTURY ULTRAMAN LEGEND 2003","©2003 円谷プロ　　　　©2003 ウルトラマン伝説プロジェクト","©2003 New Century Ultraman Legend 2 Project","","2002","Film","20min"]},
        // {id:"43",	data:["ウルトラセブン誕生35周年\"EVOLITION\"5部作","ULTRA SEVEN","©2002円谷プロ","©2002 TSUBURAYA PRODUCTIONS","","2002","Original Video","[45min/5EP]"]},
        // {id:"44",	data:["ウルトラマンコスモス2 THE BLUE PLANET","ULTRAMAN COSMOS: THE BLUE PLANET","©2002映画ｳﾙﾄﾗﾏﾝｺｽﾓｽ-2製作委員会","©2002 TSUBURAYA PRODUCTIONS ©2002 Ultraman Cosmos 2 Movie Production Consortium","","2002","Film","75min"]},
        // {id:"45",	data:["ウルトラマンコスモス","ULTRAMAN COSMOS","©2001円谷プロ","©2001 TSUBURAYA PRODUCTIONS","","2001","TV series","[30min/65EP]"]},
        // {id:"46",	data:["ウルトラマンコスモス THE FIRST CONTACT","ULTRAMAN COSMOS: THE FIRST CONTACT","©2001映画ｳﾙﾄﾗﾏﾝｺｽﾓｽ製作委員会","©2001 TSUBURAYA PRODUCTIONS ©2001 Ultraman Cosmos Movie Production Consortium","","2001","Film","[90min]"]},
        // {id:"47",	data:["ウルトラマンダイナ 帰ってきたハネジロー","ULTRAMAN DYNA: RETURN OF HANEJIRO","©2001円谷プロ","©2001 TSUBURAYA PRODUCTIONS","","2001","Original Video","[45min]"]},
        // {id:"48",	data:["ウルトラマンガイア ガイアよ再び","ULTRAMAN GAIA: ONCE AGAIN GAIA","","©2001 TSUBURAYA PRODUCTIONS","","2001","Original Video","[45min]"]},
        // {id:"49",	data:["ウルトラマンティガ外伝 古代に蘇る巨人","ULTRAMAN TIGA: REVIVAL OF THE ANCIENT GIANT","©2001円谷プロ","©2001 TSUBURAYA PRODUCTIONS","","2001","Original Video","[45min]"]},
        // {id:"50",	data:["ウルトラマンネオス","ULTRAMAN NEOS","©2000円谷プロ","©2000 TSUBURAYA PRODUCTIONS","","2000","Original Video","[30min/12EP]"]},
        // {id:"51",	data:["ウルトラマンティガ THE FINAL ODYSSEY","ULTRAMAN TIGA: THE FINAL ODYSSEY","©2000 映画ｳﾙﾄﾗﾏﾝﾃｲｶﾞ製作委員会","©2000 Tsuburaya Prodcutions ©2000 Ultraman Tiga Movie Production Consortium","","2000","Film","85min"]},
        // {id:"52",	data:["ウルトラマンM78劇場 Love&Peace",,"©1999円谷プロ ©1999ウルトラマンＭ７８製作委員会","©1999 TSUBURAYA PRODUCTIONS ©1999 M-78 Theater Production Consortium","","1999","Anime","30min"]},
        // {id:"53",	data:["ブースカ! ブースカ!!","BOOSKA","©1999円谷プロ","©1999 TSUBURAYA PRODUCTIONS","","1999","Non Ult.","[30min/38EP]"]},
        // {id:"54",	data:["ウルトラセブン1999最終章6部作","ULTRA SEVEN","©1999円谷プロ","©1999 TSUBURAYA PRODUCTIONS","","1999","Original Video","[60min/6EP]"]},
        // {id:"55",	data:["ウルトラマンナイス","ULTRAMAN NICE","©円谷プロ","©1999 TSUBURAYA PRODUCTIONS","","1999","TV series","20min"]}
        ]
};

var charactorFields = [
    {}
];
var charactorList = {
    fields:[],
    titles:["ID",
            "画像",
            "言語",
            "タイプ",
            "種類",
            "基本情報",
            "技能",
            "技能紹介"],
    list:[
        // {id:"1",data:[["1","hero1.png","日本語","ヒーロー","hero","","",""],
        //     ["1","hero1.png","中国語","ヒーロー","hero","","",""],
        //     ["1","hero1.png","英語","ヒーロー","hero","","",""]
        // ]},
        {id:"1",data:["1","hero1.png","日本語","マルチタイプ","ヒーロー","ウルトラマンティガの基本タイプで、スピードとパワーのバランスがいい。"+
                        "通常はこの姿で活動し、数々の特殊能力で邪悪な存在を粉砕していく。"+
                        "人間ウルトラマンであるティガは、ダイゴそのものである。そのため、ダイゴの戦闘経験がダイレクトにティガの戦闘力に反映される。"+
                        "マルチタイプの戦闘はその名の通り万能で、パワー、スピードのバランスのとれた動きで様々な技を炸裂させている。",
                        "绝招①ゼペリオン光線绝招②ティガスライサー","マルチタイプの必殺技だ。L字型に組んだ両腕から全エネルギーを一気に打つ。一撃で敵の体を貫くほどの威力だし、破壊力抜群の光線だ。切り札として使用する。両腕から発射する巨大な光のカッター。敵を真っ二つに切り裂いてしまう。"]},
        {id:"1",data:["1","hero1.png","中国語","マルチタイプ","英雄","迪迦奥特曼的基本形态，速度与力量分配平衡。通常以该形态登场，并使用多种特殊能力打倒邪恶势力。迪迦的人间体是大古队员，因此大古队员的战斗经验直接反映了迪迦的战斗力。复合型如其名是万能型，平衡的力量与速度怀有各种炸裂技能。","",""]},
        {id:"2",data:["2","hero2.png","日本語","ヒーロー","hero","","",""]},
        {id:"3",data:["3","hero3.png","日本語","ヒーロー","hero","","",""]},
        
    ]
}


var contractUserFields = [
    {"title":"契約者ID","value":"","type":"text"},
    {"title":"パスワード","value":"","type":"password"},
    {"title":"国","value":"","type":"text"},
    {"title":"契約開始日","value":"","type":"text"},
    {"title":"契約終了日","value":"","type":"text"}
];
var contractUserDataList = {
    fields:[],
    titles:["契約者ID","パスワード","国","契約開始日","契約終了日"],
    types:["",""],
    list:[]  
};

var userList = {
    
};
//---------------------------
//固有名詞検索画面データ
//---------------------------
var properNounTable= {
    titles:["画像","言語","固有名詞","名詞紹介","制作年度","作品略称"]

}
var properNounSrchResultList = {
    title:["画像","言語","固有名詞","名詞紹介","制作年度","作品略称"],
    class:["col-sm-1","col-sm-1","col-sm-2","col-sm-4","col-sm-0.7","col-sm-2","col-sm-1"],
    list:[
        {id:"1",productionId:"1",data:["hero1.png",
                        "日本語",
                        "マルチタイプウルトラマンティガ",
                        "ウルトラマンティガの基本タイプで、スピードとパワーのバランスがいい。通常はこの姿で活動し、数々の特殊能力で邪悪な存在を粉砕していく。人間ウルトラマンであるティガは、ダイゴそのものである。そのため、ダイゴの戦闘経験がダイレクトにティガの戦闘力に反映される。マルチタイプの戦闘はその名の通り万能で、パワー、スピードのバランスのとれた動きで様々な技を炸裂させている。",
                        "1996",
                        "ウルトラマンティガ"]
                    
                    },
        {id:"1",productionId:"1",data:["hero1.png",
                                        "中国語",
                                        "複合型迪迦奥特曼",
                                        "迪迦奥特曼的基本形态，速度与力量分配平衡。通常以该形态登场，并使用多种特殊能力打倒邪恶势力。迪迦的人间体是大古队员，因此大古队员的战斗经验直接反映了迪迦的战斗力。复合型如其名是万能型，平衡的力量与速度怀有各种炸裂技能。",
                                        "1996","迪迦奥特曼"]},
        {id:"1",productionId:"1",data:["hero1.png","英語","Multi Type","","1996","Ultraman Tiga"]},
        {id:"2",productionId:"1",data:["hero2.png","日本語","スカイタイプ",
                                        "体の動きの素早さと飛行能力を最高にアップしたタイプで、空を飛ぶ怪獣やスピード怪獣との戦いでは、無敵の強さを誇っている。スカイパイプはスピード戦,空中戦にてその力を発揮するため,パワータイプと比べやや活躍の機会が少ない。",
                                        "",""]},
        {id:"3",productionId:"1",data:["hero3.png","日本語","","","",""]},
        
    ]
}
var productionlist2 = {
    title:["作品名正式名称","英文名称","日本語コピーライト","copyright","Short copyright","製作年","カテゴリー","尺/話数"],
    list:[
        {id:"1",	data:["ウルトラマンティガ","ULTRAMAN TIGA", "©1996円谷プロ", "©1996 TSUBURAYA PRODUCTIONS","1996","TV series","[30min/52EP]"]},
    ]
};

var properNounDataList= {
    "1":{"high":["身高","53m"],"weight":["体重","44000t"],
    "speed":["飛行スピード","マッハ5"],"desc":["紹介","ウルトラマンティガの基本タイプで、スピードとパワーのバランスがいい。通常はこの姿で活動し、数々の特殊能力で邪悪な存在を粉砕していく。 人間ウルトラマンであるティガは、ダイゴそのものである。そのため、ダイゴの戦闘経験がダイレクトにティガの戦闘力に反映される。マルチタイプの戦闘はその名の通り万能で、パワー、スピードのバランスのとれた動きで様々な技を炸裂させている。"],
    　"skill1":["技能１","ゼペリオン光線"],
      "skill1desc":["","プの必殺技だ。L字型に組んだ両腕から全エネルギーを一気に打つ。一撃で敵の体を貫くほどの威力だし、破壊力抜群の光線だ。切り札として使用する。"],
      "skill2":["技能2","ティガスライサー"],
      "skill2desc":["","両腕から発射する巨大な光のカッター。敵を真っ二つに切り裂いてしまう。"]
    
    }
}

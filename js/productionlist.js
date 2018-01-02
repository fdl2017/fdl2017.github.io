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
        {id:"10",	data:["ウルトラマンX","Ultraman　X","©2015 ウルトラマンエックス製作委員会","©2015 TSUBURAYA PRODUCTIONS","","2015","TV series","[30min/24EP]"]}
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

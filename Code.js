function Szamol() {

    var elements = function (el) {
        return document.querySelectorAll(el);


    };

    var e = elements(".kerdoiv input");
    //  console.log(e);
    var o = {};
    var v;
    for (i = 0; i < e.length; i++) {
        var n = e[i].name;
        if (n !== "mikor") {
            v = parseInt(e[i].value);
        } else v = e[i].value;

        o[n] = v;
    }
    console.log(o);

    var ma = new Date();
    var past = new Date(o.mikor);
    //var ma = d.getTime(o.mikor);
    //o.evek=  ma- d.getTime(o.mikor);
    var nap = ((ma.getTime() - past.getTime()) / (1000 * 60 * 60 * 24));
    o.evek = nap / 365.25;
    console.log(o.evek);


    var newLocal = ((o.vetelar * (Math.pow((1 + (o.kamat / 100)), o.evek))) - o.vetelar) / o.evek;

    var kamatVeszteseg = Math.round((newLocal) / 12);
    var ertekvesztes = Math.round(((o.vetelar - o.aktar) / o.evek) / 12);
    var van = Math.round((o.atiras / (o.csere * 12)) +
        (o.kfb / 12) + (o.casco / 12) + (o.ado / 12) + (o.muszaki / o.muszakiEv / 12) +
        (o.nyarigumi / o.nyariCsere / 12) + (o.teligumi / o.teliCsere / 12) +
        (o.akku / o.akkucsere / 12) + (o.szerviz / 12) + (o.egyebUz / 12) + o.parkolas +
        (o.birsag / o.evek / 12) + (o.tores / o.evek / 12) + o.mosas + (o.etc / 12) + ertekvesztes + kamatVeszteseg);
    var uzemiKtsg = Math.round((((o.km * o.varos / 100 * o.varosiFogy / 100) + (o.km * o.orszagut / 100 * o.orszagutFogy / 100) +
        (o.km * o.autopalya / 100 * o.autopalyaFogy / 100) * (o.gas / 12)) + ((o.olajcsere / o.olajKm) * (o.km / 12))));
    var osszKtg = van + uzemiKtsg;
    var kmKent = Math.round(osszKtg / (o.km / 12));

    $("#van").text(van);
    $("#ertekvesztes").text(ertekvesztes);
    $("#kamat").text(kamatVeszteseg);
    $("#gasCost").text(uzemiKtsg);
    $("#kmCost").text(kmKent);
    $("#summa").html("<b>" + osszKtg + "</b>");

}
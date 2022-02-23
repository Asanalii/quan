function astmove() {
    $("#animation").css({ "left": "70%", "width": "125px", "transition": "all 0.5s" });
}


function homemove() {
    $("#animation").css({ "left": "0%", "width": "60px", "transition": "all 0.5s" });
}

function planmove() {
    $("#animation").css({ "left": "22%", "width": "90px", "transition": "all 0.5s" });
}

function notmove() {
    $("#animation").css({ "left": "47%", "width": "85px", "transition": "all 0.5s" });
}

/* TABS */
var iTab = {
    title: "DEFINITION",
    text: "A star is any massive self-luminous celestial body of gas that shines by radiation derived from its internal energy sources. Of the tens of billions of trillions of stars in the observable universe, only a very small percentage are visible to the naked eye. Many stars occur in pairs, multiple systems, or star clusters. The members of such stellar groups are physically related through common origin and are bound by mutual gravitational attraction. Somewhat related to star clusters are stellar associations, which consist of loose groups of physically similar stars that have insufficient mass as a group to remain together as an organization. Almost every star you see in the night sky is much larger than the sun. For the majority of their lives, the biggest stars are tinted blue. This is because they emit so much energy that the radiation that comes out is actually all the way over in the ultraviolet, with a little bit of the emission coming out in the blue end of our visible range."
};

var redGiant = new iTab("RED GIANT", "When star like our Sun reaches the end of its life, it enters one last phase, ballooning up to many times its original size. Astronomers call these objects red giant star, and you will want to learn more about them, since this is the future fate for the Sun. Do not panic, w have got another 7 billion years or so before the Sun becomes a red giant star. As you probably know, stars shine because they are converting hydrogen into helium in their cores through a process called nuclear fusion. Our own Sun has been performing fusion at its core for 4.5 billion years, and will continue to do so for another 7 billions years, at least. The helium byproduct from this fusion reaction slowly builds up in the core of a star, and they have no way to get rid of it. Eventually, billions of year down the road, a star uses up the last of its hydrogen fuel. A red giant will expand outward many times its original size.");

var whiteDwarf = new iTab("WHITE DWARF", "Main-sequence stars, including the sun, form from clouds of dust and gas drawn together by gravity. How the stars evolve through their lifetime depends on their mass. The most massive stars, with eight times the mass of the sun or more, will never become white dwarfs. Instead, at the end of their lives, white dwarfs will explode in a violent supernova, leaving behind a neutron star or black hole. Smaller stars, however, will take a slightly more sedate path. Low- to medium-mass stars, such as the sun, will eventually swell up into red giants. After that, the stars shed their outer layers into a ring known as a planetary nebula (early observers thought the nebulas resembled planets such as Neptune and Uranus. The core that is left behind will be a white dwarf, a husk of a star in which no hydrogen fusion occurs. Smaller stars, such as red dwarfs, don't make it to the red giant state. They simply burn through all of their hydrogen, ending the process as a dim white dwarf.");

var redDwarf = new iTab("RED DWARF", "Red dwarf stars make up the largest population of stars in the galaxy, but they hide in the shadows, too dim to be seen with the naked eye from Earth. Their limited radiance helps to extend their lifetimes, which are far greater than that of the sun. Scientists think that 20 out of the 30 stars near Earth are red dwarfs. The closest star to the sun, Proxima Centauri, is a red dwarf. The term 'red dwarf' does not refer to a single kind of star. It is frequently applied to the coolest objects, including K and M dwarfs — which are true stars — and brown dwarfs, often referred to as 'failed stars' because they do not sustain hydrogen fusion in their cores. Red dwarfs form like other main-sequence stars. First, a cloud of dust and gas is drawn together by gravity and begins rotating. The material then clumps at the center, and when it reaches the critical temperature, fusion begins.")

function tabone(evnt) {
    evt.currentTarget.className += " active";
}

function showTab(evt, name) {
    var i, tabcontent, tablinks;

    tabcontent = $(".tabCon");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = $(".item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

$("#first").click();

/* GALLERY */

function gallery() {
    $(".modaljs:eq(0)").css("display", "block");
}

function clozegall() {
    $(".modaljs:eq(0)").css("display", "none")
}

function openphotos(x) {
    var array = $(".modaljs");
    array[x].style.display = "block";
    array[0].style.display = "none";
}

function closephotos(x) {
    var array = $(".modaljs");
    array[x].style.display = "none";
    array[0].style.display = "block";
}

function closeall() {
    $(".modaljs").css("display", "none");
}
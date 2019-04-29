/* ENGLISH LANGUAGE VERSION */
var en = {
    homeJoinUs: "Join us at our wedding",
    homeDays: "days",
    homeHours: "hours",
    homeMinutes: "minutes",
    homeSeconds: "seconds",

    whenWhere: "When & where?",
    whenDay: "Wednesday",
    whenTime: "4:30 pm",
    whenCeremony: "Wedding ceremony:",
    churchAddress: "Church of St Mary, Mother of the Church, 14 Sadowa Street, Otrebusy, Poland",
    whenReception: "Wedding reception:",
    palacykAddress: "Pałacyk Otrebusy, 2 Warszawska Street, Otrebusy",

    howTitle: "How to get there?",
    howBycar: "<strong>From Warsaw city center:</strong> 20km (~30min)<br/> <strong>From Łódź city center:</strong> 120km (~1h45min).</br/>    Please consider leaving a bit earlier to <strong>avoid heavy traffic</strong> as Wednesday is the first day of <strong>a long weekend</strong> in Poland (Boże Ciało). <br/> Parking space available both nearby the Church and in front of Pałacyk Otrębusy.",
    howBytrain: "Otrębusy has a <b>direct railway link</b> with Warsaw city center. Take a WKD train from Warszawa Śródmieście WKD station and get off at <b>Otrębusy WKD station</b>. The church is located 11min walk from the station. Check the itinerary on <a href='https://jakdojade.pl/warszawa/trasa/'>Jak Dojade</a>",
    howByuber: "A ride from Warsaw takes approximately 30 min and should cost you around 40-60 PLN.",

    infoTitle: "Before the wedding...",
    info1title: "Special menu",
    info1text: "If you have any specific <strong>dietary restrictions </strong>(e.g. vegan, vegetarian, gluten-free, lactose-free etc.) <strong>please let us know by June 4th</strong>",
    info2title: "Getting back to Warsaw",
    info2text: "During the night, free transportation <strong>back to Warsaw Central Station</strong> between 3:30 and 7:00 am will be provided (a car for 8 people leaving every 45-60 min). Should you like to use it <strong>please let us know by June 4th</strong>",
    info3title: "No rice tossing...",
    info3text: "After the wedding ceremony, <strong>please do not toss rice, confetti or anything else</strong> in front of the church. The Priest made if very clear he will make you pick it all up...",

    planTitle: "The Plan",
    planRemark: "*The plan is an approximate and may change",
    plan1time: "4:30 pm",
    plan1title: "Title 1",
    plan1subtitle: "Subtitle",
    plan2time: "XXX",
    plan2title: "XXX",
    plan2subtitle: "XXX",
    plan3time: "xxx",
    plan3title: "xxx",
    plan3subtitle: "xxx",
    plan4time: "xxx",
    plan4title: "xxx",
    plan4subtitle: "xxx",
    plan5time: "xxx",
    plan5title: "xxx",
    plan5subtitle: "xxx",
    plan6time: "xxx",
    plan6title: "xxx",
    plan6subtitle: "xxx",
}

/* POLISH LANGUAGE VERSION */
var pl = {

}

/* SPANISH LANGUAGE VERSION */
var es = {

}

window.addEventListener('DOMContentLoaded', (e) => {

    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('click', function() {
            var language = this.getAttribute('id');
            // populate text
            if (language == 'es') {
                var map = es;
                console.log(map)
            } else if (language == 'en') {
                var map = en;
            } else if (language == 'pl') {
                var map = pl;
            }
            populate(language, map);
            // hide language selector
            document.querySelector('.lang-select').classList.add('invisible');

            // save in cache lang choice

        })
    })

})



function populate(lang, map) {
    document.querySelector("h2[data-text='home-joinus']").textContent = map.homeJoinUs;
    document.querySelector("[data-text='home-days']").textContent = map.homeDays;
    document.querySelector("[data-text='home-hours']").textContent = map.homeHours;
    document.querySelector("[data-text='home-minutes']").textContent = map.homeMinutes;
    document.querySelector("[data-text='home-seconds']").textContent = map.homeSeconds;

    document.querySelector("[data-text='when-where']").textContent = map.whenWhere;
    document.querySelector("[data-text='when-day']").textContent = map.whenDay;
    document.querySelector("[data-text='when-time']").textContent = map.whenTime;
    document.querySelector("[data-text='when-ceremony']").textContent = map.whenCeremony;
    document.querySelector("[data-text='church-address']").textContent = map.churchAddress;
    document.querySelector("[data-text='when-reception']").textContent = map.whenReception;
    document.querySelector("[data-text='palacyk-address']").textContent = map.palacykAddress;

    document.querySelector("[data-text='how-title']").textContent = map.howTitle;
    document.querySelector("[data-text='how-bycar']").innerHTML = map.howBycar;
    document.querySelector("[data-text='how-bytrain']").innerHTML = map.howBytrain;
    document.querySelector("[data-text='how-byuber']").textContent = map.howByuber;

    document.querySelector("[data-text='info-title']").textContent = map.infoTitle;
    document.querySelector("[data-text='info-1-title']").textContent = map.info1title;
    document.querySelector("[data-text='info-1-text']").innerHTML = map.info1text;
    document.querySelector("[data-text='info-2-title']").textContent = map.info2title;
    document.querySelector("[data-text='info-2-text']").innerHTML = map.info2text;
    document.querySelector("[data-text='info-3-title']").textContent = map.info3title;
    document.querySelector("[data-text='info-3-text']").innerHTML = map.info3text;

    document.querySelector("[data-text='plan-title']").innerHTML = map.planTitle;
    document.querySelector("[data-text='plan-remark']").innerHTML = map.planRemark;
    document.querySelector("[data-text='plan-1-time']").innerHTML = map.plan1time;
    document.querySelector("[data-text='plan-1-title']").innerHTML = map.plan1title;
    document.querySelector("[data-text='plan-1-subtitle']").innerHTML = map.plan1subtitle;
    document.querySelector("[data-text='plan-2-time']").innerHTML = map.plan2time;
    document.querySelector("[data-text='plan-2-title']").innerHTML = map.plan2title;
    document.querySelector("[data-text='plan-2-subtitle']").innerHTML = map.plan2subtitle;
    document.querySelector("[data-text='plan-3-time']").innerHTML = map.plan3time;
    document.querySelector("[data-text='plan-3-title']").innerHTML = map.plan3title;
    document.querySelector("[data-text='plan-3-subtitle']").innerHTML = map.plan3subtitle;
    document.querySelector("[data-text='plan-4-time']").innerHTML = map.plan4time;
    document.querySelector("[data-text='plan-4-title']").innerHTML = map.plan4title;
    document.querySelector("[data-text='plan-4-subtitle']").innerHTML = map.plan4subtitle;
    document.querySelector("[data-text='plan-5-time']").innerHTML = map.plan5time;
    document.querySelector("[data-text='plan-5-title']").innerHTML = map.plan5title;
    document.querySelector("[data-text='plan-5-subtitle']").innerHTML = map.plan5subtitle;
    document.querySelector("[data-text='plan-6-time']").innerHTML = map.plan6time;
    document.querySelector("[data-text='plan-6-title']").innerHTML = map.plan6title;
    document.querySelector("[data-text='plan-6-subtitle']").innerHTML = map.plan6subtitle;

    document.querySelector("[data-text='contact-title']").innerHTML = map.contactTitle;
    document.querySelector("[data-text='contact-subtitle']").innerHTML = map.contactSubtitle;


}

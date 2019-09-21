let sectorItem = [{ id: 0, image: '/cameron_assets/images/brands/brands-1-5.png' },
{ id: 1, image: '/cameron_assets/images/brands/brands-1-1.png' },
{ id: 2, image: '/cameron_assets/images/brands/brands-1-2.png' },
{ id: 3, image: '/cameron_assets/images/brands/brands-1-3.png' },
{ id: 4, image: '/cameron_assets/images/brands/brands-1-4.png' },
{ id: 5, image: '/cameron_assets/images/brands/brands-1-5.png' },
{ id: 6, image: '/cameron_assets/images/brands/brands-1-1.png' },
{ id: 7, image: '/cameron_assets/images/brands/brands-1-2.png' },
{ id: 8, image: '/cameron_assets/images/brands/brands-1-3.png' }];

let listService = [{
    "image": "/cameron_assets/images/resources/wire_fencing1.png",
    "title": "Electric Wire Fence",
    "subtitle": "Expel intruders from your home while you are home or not with our new arrivals of wire fencing."
},
{
    "image": "/cameron_assets/images/resources/burglar_alarm2.png",
    "title": "Onsite & Remote Smart CCTV Monitoring",
    "subtitle": `Enjoy Remote monitoring of your home at just a fraction cost of
            the onsite monitoring. Is a huge advancement on the standard CCTV systems,
     offering round-the-clock reliability and protection.`
},
{
    "image": "/cameron_assets/images/resources/burglar_alarm3.png",
    "title": "Burglar Alarm",
    "subtitle": `Is a system designed to detect intrusion – unauthorized entry – into a building or apartment.
     Security alarms are used in residential, commercial, industrial, and military properties
      for protection against burglary (theft) or property damage.`
},

]

let cards = [
    {
        "image": "/cameron_assets/images/background/cta-1-1-bg.jpg",
        "title": "Burgundy Flemming",
        "subtitle": "Advertising"
    },
    {
        "image": "/cameron_assets/images/background/testi-bg-1-1.jpg",
        "title": "Nigel Nigel",
        "subtitle": "Sound & Vision"
    },
    {
        "image": "/cameron_assets/images/background/testi-bg-1-1.jpg",
        "title": "Caspian Bellevedere",
        "subtitle": "Accounting"
    },
    {
        "image": "/cameron_assets/images/background/cta-1-1-bg.jpg",
        "title": "Burgundy Flemming",
        "subtitle": "Advertising"
    },
    {
        "image": "/cameron_assets/images/background/testi-bg-1-1.jpg",
        "title": "Nigel Nigel",
        "subtitle": "Sound & Vision"
    },
    {
        "image": "/cameron_assets/images/background/fun-fact-bg-1-1.jpg",
        "title": "Caspian Bellevedere",
        "subtitle": "Accounting"
    }
];

let parentContent = [{
    id: 0, image: "/cameron_assets/images/background/testi-bg-1-1.jpg", title:
        `Simplest Way Into  a Safer, Smarter Home`, quote: 'Request a Free Quote Now'
},
{
    id: 1, image: "/cameron_assets/images/background/cta-1-1-bg.jpg", title:
        `Simplest Way Into  a Safer, Smarter Home`, quote: 'Request a Free Quote Now'
},
{
    id: 1, image: "/cameron_assets/images/background/fun-fact-bg-1-1.jpg", title:
        `Simplest Way Into  a Safer, Smarter Home`, quote: 'Request a Free Quote Now'
}];



let testimonial_data = [{
    id: 0, title: 'Temitope Olabanji', image: '/cameron_assets/images/resources/customer3.png', subtitle: 'Frontend Developer',
    content: `I have received top notch service from Kovad.  All the reps have been very courteous.  The app is
     intuitive and works exactly as promised.
      I look forward to adding additional products and sensors to my control panel in the near future`},
{
    id: 1, title: 'Mrs Adepitan', subtitle: 'Entepreneur', image: '/cameron_assets/images/resources/customer4.png',
    content: `Kovad exceeds my expectations for monitoring my home. I have had the occasional "forgot to disarm" 
    incidences. I cannot believe how prompt the monitors were calling my home to see if everything was OK.`}]



export default {
    testimonial_data,
    parentContent,
    listService,
    cards,
    sectorItem
}
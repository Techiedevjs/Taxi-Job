const taxiemployee = document.querySelector('.taxi-employee');
const taxipark = document.querySelector('.taxi-park');
const hudnotification = document.querySelector('.hudnotification');

// PUSH NUMBER OF TOTAL STAFF
const pushTotalStaff = (total) => {
    document.querySelectorAll('.totalstaff')[0].innerHTML = total
    document.querySelectorAll('.totalstaff')[1].innerHTML = total
}
pushTotalStaff(25)

let jobData = {
    owner: "john smith",
    transport: '$1500',
    title : "working as a cab driver",
    requirements: [
        { 
            icon: 'images/government.svg',
            requirement: "government work"
        },
        { 
            icon: 'images/licence.svg',
            requirement: "driving licence"
        },
        { 
            icon: 'images/level.svg',
            requirement: "2nd game level"
        },
        { 
            icon: 'images/card.svg',
            requirement: "salary on card"
        },
    ],
    description: "Urban Ride is looking for experienced and professional taxi drivers who can deliver excellent service to our clients. You will have to drive our modern and comfortable vehicles, use our GPS and payment systems, and communicate effectively with our dispatchers and customers. You will also have to keep track of your mileage, fuel, and expenses."
}

const pushJobData = (job) => {
    const { owner, title, requirements, description, transport } = job
    document.querySelector('.ownername').innerHTML = owner;
    document.querySelector('.description').innerHTML = description;
    document.querySelector('.transportprice').innerHTML = transport;
    document.querySelector('.title').innerHTML = title;
    requirements.map((item) => {
        const {icon, requirement} = item;
        document.querySelector('.requirements-container').innerHTML += `
        <div class="flexsmall requirement semibold fontmedium">
            <img src=${icon} alt="icon" class="icon">
            ${requirement}
        </div>
        ` 
    } )
}
pushJobData(jobData);

// ESCAPE KEY BACK
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
    }
});

// ENTER KEY CLICKED
document.addEventListener('keydown', evt => {
    if( taxiemployee.classList.contains('hidden') == false ){
        if(evt.key === 'Enter'){
            alert("ENTER GET EMPLOYED");
        }
    }
})

// SPACE KEY CLICKED
document.addEventListener('keydown', evt => {
    if( taxiemployee.classList.contains('hidden') == false ){
        if(evt.key === ' '){
            alert("SPACEBAR TRANSPORT RENTAL");
        }
    }
})

// TAXI SWITCHING ( TAXI EMPLOYEES AND TAXI PARK )
document.addEventListener('keydown', evt => {
    if(evt.key === 'ArrowRight'){
        if(  taxiemployee.classList.contains('hidden') ){
            taxiemployee.classList.remove('hidden');
            taxipark.classList.add('hidden');
            hudnotification.classList.add('hudnotificationhidden');
        } else if ( taxipark.classList.contains('hidden')){
            taxiemployee.classList.add('hidden');
            taxipark.classList.remove('hidden');
            hudnotification.classList.add('hudnotificationhidden');
        }
    }
})

// HUD NOTIFICATION SWITCH
document.addEventListener('keydown', evt => {
    if(evt.key === 'ArrowLeft'){
        taxiemployee.classList.add('hidden');
        taxipark.classList.add('hidden');
        hudnotification.classList.remove('hudnotificationhidden');
        const closenotification = () => {
            taxiemployee.classList.remove('hidden');
            taxipark.classList.add('hidden');
            hudnotification.classList.add('hudnotificationhidden');
        }
        setTimeout(closenotification, 5000)
    }
})

// SECOND SCREEN (TAXI-PARK) FUNCTIONS
let taxiorderdata = [
    {
        id: 1,
        customer: "harley",
        distance: 1665,
        note: "i'm with my pet",
        status: "pending"
    },
    {
        id: 2,
        customer: "dakota",
        distance: 567,
        note: "",
        status: "pending"
    },
    {
        id: 3,
        customer: "logan",
        distance: 156,
        note: "i’m glad you are my taxi driver. Please be careful on the road and respect my wishes.",
        status: "accepted"
    },
    {
        id: 4,
        customer: "taylor",
        distance: 687,
        note: "",
        status: "waiting"
    },
    {
        id: 5,
        customer: "dami",
        distance: 99,
        note: "Pls be fast...",
        status: "pending"
    },
]
const totalOrders = (data) => {
    document.querySelector('.totalorders').innerHTML = data.length
}

const taxiorders = document.querySelector('.taxiorders');
const pushTaxiOrders = (orders) => {
    totalOrders(orders)
    taxiorders.innerHTML = ""
    orders.map((order) => {
        const { customer, distance, note, status, id } = order;
        taxiorders.innerHTML += `
        <section class="customertaxiorder" id=${'customerid'+id}>
            <div class="grid-4">
                <p class="capitalize semibold fontsmall">${customer}</p>
                <p class="capitalize semibold fontsmall">${distance}</p>
                <p class="capitalize opacity-80 fontsmall ${!note && 'dull' }">${note ? note : "no comment..."}</p>
                ${ status === "pending" ? `<button class="acceptorder fontsmall" onclick="acceptOrder(${id})">Accept the order</button>` : ''}
                ${status === "accepted" ? `<div class="flexsmall fontsmall bold process"> <img src='images/location.svg' /> ON THE WAY </div>` : ''}
                ${ status === "waiting" ? `<div class="flexsmall fontsmall bold process"><img src='images/waiting.svg' /> WAITING </div>` : ''}
            </div>
            <div class="dotsandline">
                <div class="dot"></div>
                <div class="line"></div>
                <div class="dot"></div>
            </div>
        </section>
        `
    })
}
pushTaxiOrders(taxiorderdata);

const acceptOrder = (id) => {
    document.querySelector('#customerid'+id).classList.add('hiddenorder');
    taxiorderdata = taxiorderdata.filter((order) => order.id !== id)
    // setTimeout(pushTaxiOrders(taxiorderdata), 3000)
    totalOrders(taxiorderdata)
}



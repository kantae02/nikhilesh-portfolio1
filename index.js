
let works = document.querySelector('#works')
let about = document.querySelector('#about')
let contact = document.querySelector('#contact')
let logo = document.querySelector('.fadeout')
let resume = document.querySelector('#resume')
let log = document.querySelector('.fadeout2')
let contactbtn = document.querySelector('.contactme')
let coffeeMug = document.querySelector('.coffeeMug')
let form = document.querySelector('.form')
let submitBtn = document.querySelector('.submit')
let iname = document.querySelector('.qname')
let qemail = document.querySelector('.email')
let qmessage = document.querySelector('.inputmessage')
let menuBtn = document.querySelector('.fa-bars')
let dropDown = document.querySelector('.menudropdown')
let d1 = document.querySelector('.s1')
let d2 = document.querySelector('.s2')
let d3 = document.querySelector('.s3')
let bodyBtn = document.getElementsByTagName('body')


works.addEventListener('click', () => setActiveNavItem(works));
about.addEventListener('click', () => setActiveNavItem(about));
contact.addEventListener('click', () => setActiveNavItem(contact));

const removeActiveNav = () =>{
    works.classList.remove('activeNav');
    about.classList.remove('activeNav');
    contact.classList.remove('activeNav');
}


function setActiveNavItem(activeItem) {
    // Remove active class from all items
       removeActiveNav()
  
    // Add active class to the clicked item
    activeItem.classList.add('activeNav');
  }

    logo.addEventListener('click', ()=>{ 
     removeActiveNav()
  })
  log.addEventListener('click',()=>{
    removeActiveNav()
  })

  contactbtn.addEventListener('click', ()=>{
    window.scrollTo(0,3814)
    removeActiveNav()
    contact.classList.add('activeNav');
  })

  coffeeMug.addEventListener('click', ()=>{
    window.scrollTo(0,3814)
    removeActiveNav()
    contact.classList.add('activeNav');
  })


   
  const navLinks = document.querySelectorAll('.navItem');
  const sections = document.querySelectorAll('section');
  
  // Function to update the active navigation item
  function updateActiveNavItem() {
    let fromTop = window.scrollY;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 250; // Adjust for header height or any spacing
      const sectionBottom = sectionTop + section.offsetHeight;
  
      if (fromTop >= sectionTop && fromTop < sectionBottom) {
        navLinks.forEach((link) => link.classList.remove('activeNav'));
        navLinks[index].classList.add('activeNav');
      }
    });
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', updateActiveNavItem);

  form.addEventListener('submit', (e)=>{
    e.preventDefault()
   
   
  })
 submitBtn.addEventListener('click', ()=>{
  iname.value = ''
  qemail.value = ''
  qmessage.value = ''
 })
 

  function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nikhilesh.mern@gmail.com",
    Password : "5BA3B7FB0EFD2C494C676FEB58616D19867B",
    To : 'nikhilesh.mern@gmail.com',
    From : 'nikhilesh.mern@gmail.com',
    Subject : "This is the enquiry to your portfolio from" + qemail.value,
    Body : "name:" + " " + iname.value +
    "<br> message:" + " " + qmessage.value 
    }).then(
    message => alert('message sent succesfully')
    );
    }


    menuBtn.addEventListener("click", function () {
      if (dropDown.style.visibility=== "hidden") {
          dropDown.style.visibility= "visible";
          dropDown.style.opacity= "1";
      } else {
          dropDown.style.visibility= "hidden";
          dropDown.style.opacity= "0";
      
      }
      console.log('clicked')
  });

  d1.addEventListener('click',()=>{
    dropDown.style.visibility= "hidden";
    dropDown.style.opacity= "0";
    console.log('clicked')
  })
  d2.addEventListener('click',()=>{
    dropDown.style.visibility= "hidden";
    dropDown.style.opacity= "0";
    console.log('clicked')
  })
  d3.addEventListener('click',()=>{
    dropDown.style.visibility= "hidden";
    dropDown.style.opacity= "0";
    console.log('clicked')
  })


  function handleViewportChange() {
    const windowWidth = window.innerWidth;

   
  if (windowWidth > 650) {
   dropDown.style.visibility = 'hidden'; // Hide the element
   dropDown.style.opacity= "0";
  }
}
window.addEventListener('resize', handleViewportChange);

handleViewportChange();

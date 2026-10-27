/* AUTOVAULT STUDIO — vanilla JavaScript interactions */
"use strict";

// IMPORTANT: Replace these sample values before publishing.
const CONFIG = {
  businessName: "Autovault Studio",
  whatsappNumber: "919000000000", // International digits only, no + or spaces.
  instagramUrl: "https://www.instagram.com/",
  currency: "INR"
};
const money = value => new Intl.NumberFormat("en-IN", { style: "currency", currency: CONFIG.currency, maximumFractionDigits: 0 }).format(value);
const img = (id, width=700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const services = [
  {name:"Basic Car Wash",group:"Wash",price:499,desc:"A careful exterior wash to clear away everyday dust and road grime.",image:img("photo-1607860108855-64acio0b4a1e"),alt:"Car exterior being washed"},
  {name:"Premium Car Wash",group:"Wash",price:899,desc:"An elevated wash with added attention to the exterior finish and tyres.",image:img("photo-1520340356584-f9917d1eea6f"),alt:"Clean premium vehicle"},
  {name:"Interior Deep Cleaning",group:"Detailing",price:2499,desc:"A thorough refresh for interior surfaces, carpets and hard-to-reach areas.",image:img("photo-1492144534655-ae79c964c9d7"),alt:"Premium car interior"},
  {name:"Exterior Detailing",group:"Detailing",price:1999,desc:"Focused exterior care to improve clarity, finish and overall presentation.",image:img("photo-1503376780353-7e6692767b70"),alt:"Detailed sports car exterior"},
  {name:"Full Car Detailing",group:"Detailing",price:3999,desc:"A more complete inside-and-out service tailored to vehicle condition.",image:img("photo-1549317661-bd32c8ce0db2"),alt:"Vehicle at a detailing studio"},
  {name:"Body Polishing",group:"Protection",price:2499,desc:"Polishing to refine the paint appearance; results depend on paint condition.",image:img("photo-1492144534655-ae79c964c9d7"),alt:"Glossy car paintwork"},
  {name:"Headlight Restoration",group:"Specialist",price:799,desc:"A targeted treatment to improve the appearance of cloudy headlight lenses.",image:img("photo-1507136566006-cfc505b114fc"),alt:"Car headlight detail"},
  {name:"Ceramic Coating",group:"Protection",price:7999,desc:"A paint-protection treatment with preparation and aftercare guidance.",image:img("photo-1603386329225-868f9b1ee6c9"),alt:"Reflective vehicle paint finish"},
  {name:"Paint Protection Film (PPF)",group:"Protection",price:14999,desc:"Ask us about panel coverage, film type and vehicle-specific fitment.",image:img("photo-1503376780353-7e6692767b70"),alt:"Car body panel close-up"},
  {name:"Engine Bay Cleaning",group:"Specialist",price:999,desc:"Careful cleaning around suitable engine-bay surfaces and components.",image:img("photo-1486262715619-67b85e0b08d3"),alt:"Automotive workshop"},
  {name:"Tyre Cleaning & Dressing",group:"Specialist",price:299,desc:"Clean sidewalls and a neat, even finish for a well-presented set of tyres.",image:img("photo-1489824904134-891ab64532f1"),alt:"Car wheel and tyre"},
  {name:"Steam Cleaning",group:"Specialist",price:1299,desc:"Steam-assisted cleaning for suitable surfaces and selected areas.",image:img("photo-1607860108855-64acio0b4a1e"),alt:"Car care service"}
];

const productData = [
  ["Seat Covers","Interior Accessories",2499,2999,"photo-1503376780353-7e6692767b70","Universal-fit sample set; confirm vehicle compatibility."],
  ["Floor Mats","Interior Accessories",999,1299,"photo-1492144534655-ae79c964c9d7","Everyday floor protection. Check dimensions before purchase."],
  ["Steering Wheel Cover","Interior Accessories",399,499,"photo-1507136566006-cfc505b114fc","Comfort grip cover; measure your steering wheel first."],
  ["Car Organizer","Interior Accessories",499,599,"photo-1549317661-bd32c8ce0db2","A practical storage accessory for daily essentials."],
  ["Dashboard Accessories","Interior Accessories",299,399,"photo-1489824904134-891ab64532f1","Decorative accessory. Avoid obstructing the driver's view."],
  ["Interior LED Lighting","Interior Accessories",799,999,"photo-1492144534655-ae79c964c9d7","Interior lighting kit; professional fitting may be needed."],
  ["Body Cover","Exterior Accessories",899,1199,"photo-1503376780353-7e6692767b70","Choose a size suitable for your vehicle body."],
  ["Mud Flaps","Exterior Accessories",499,699,"photo-1489824904134-891ab64532f1","Vehicle-specific fitment may be required."],
  ["Door Visors","Exterior Accessories",999,1299,"photo-1549317661-bd32c8ce0db2","Confirm model compatibility and installation method."],
  ["Spoiler","Exterior Accessories",2499,2999,"photo-1503376780353-7e6692767b70","Fitment and installation quote required."],
  ["Chrome Accessories","Exterior Accessories",599,799,"photo-1507136566006-cfc505b114fc","Decorative trim; confirm exact fit before ordering."],
  ["Number Plate Frames","Exterior Accessories",249,349,"photo-1489824904134-891ab64532f1","Select a legal, vehicle-compatible frame."],
  ["Android Touchscreen Display","Electronics & Gadgets",6999,7999,"photo-1492144534655-ae79c964c9d7","Vehicle compatibility and installation must be checked."],
  ["Dash Camera","Electronics & Gadgets",2499,2999,"photo-1503376780353-7e6692767b70","Check recording features, storage and installation needs."],
  ["Parking Sensors","Electronics & Gadgets",1299,1599,"photo-1486262715619-67b85e0b08d3","Installation and compatibility confirmation required."],
  ["Reverse Camera","Electronics & Gadgets",1499,1899,"photo-1492144534655-ae79c964c9d7","Confirm display compatibility and installation."],
  ["Car Speakers","Electronics & Gadgets",1999,2499,"photo-1549317661-bd32c8ce0db2","Check size, impedance and head-unit compatibility."],
  ["Amplifier","Electronics & Gadgets",2999,3499,"photo-1507136566006-cfc505b114fc","Installation and system matching recommended."],
  ["Bluetooth FM Transmitter","Electronics & Gadgets",499,699,"photo-1489824904134-891ab64532f1","Check your car's power socket and FM compatibility."],
  ["Phone Holder","Electronics & Gadgets",349,499,"photo-1492144534655-ae79c964c9d7","Choose a mount that does not block visibility."],
  ["Fast Car Charger","Electronics & Gadgets",399,599,"photo-1549317661-bd32c8ce0db2","Check supported charging standards and device compatibility."],
  ["Microfiber Cloths","Cleaning & Maintenance",199,299,"photo-1607860108855-64acio0b4a1e","Soft cloths for suitable vehicle surfaces."],
  ["Car Shampoo","Cleaning & Maintenance",299,399,"photo-1607860108855-64acio0b4a1e","Follow the product label and dilution instructions."],
  ["Interior Cleaner","Cleaning & Maintenance",349,449,"photo-1492144534655-ae79c964c9d7","Spot-test on a hidden area before use."],
  ["Tyre Polish","Cleaning & Maintenance",249,349,"photo-1489824904134-891ab64532f1","Apply carefully and avoid tread/braking surfaces."],
  ["Wax & Polish","Cleaning & Maintenance",499,699,"photo-1503376780353-7e6692767b70","Choose a product suitable for your paint finish."],
  ["Glass Cleaner","Cleaning & Maintenance",199,299,"photo-1507136566006-cfc505b114fc","Use only on compatible glass and surfaces."],
  ["Detailing Brushes","Cleaning & Maintenance",299,399,"photo-1607860108855-64acio0b4a1e","Select suitable brush softness for each surface."],
  ["Car Vacuum Cleaner","Cleaning & Maintenance",1499,1799,"photo-1492144534655-ae79c964c9d7","Check power source, attachments and storage."],
  ["Dashboard Polish","Cleaning & Maintenance",299,399,"photo-1549317661-bd32c8ce0db2","Test compatibility and avoid slippery steering/pedal areas."],
  ["Wheel Cleaning Brush","Cleaning & Maintenance",249,349,"photo-1489824904134-891ab64532f1","Use a dedicated brush to avoid cross-contamination."]
].map((p,i)=>({id:i+1,name:p[0],category:p[1],price:p[2],original:p[3],image:img(p[4],600),description:p[5],available:i!==17 && i!==28,featured:[1,12,13,22].includes(i+1)}));

const galleryItems = [
  {title:"Paintwork & Finish",category:"Exterior",image:img("photo-1503376780353-7e6692767b70",1000),alt:"Sports car exterior finish"},
  {title:"Interior Details",category:"Interior",image:img("photo-1492144534655-ae79c964c9d7",1000),alt:"Premium car interior"},
  {title:"Gloss & Reflection",category:"Protection",image:img("photo-1603386329225-868f9b1ee6c9",1000),alt:"Glossy vehicle bodywork"},
  {title:"Wheel & Tyre Care",category:"Exterior",image:img("photo-1489824904134-891ab64532f1",1000),alt:"Wheel and tyre detail"},
  {title:"Workshop Process",category:"Interior",image:img("photo-1486262715619-67b85e0b08d3",1000),alt:"Automotive workshop"},
  {title:"The Final Look",category:"Protection",image:img("photo-1549317661-bd32c8ce0db2",1000),alt:"Vehicle after care"}
];
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
let cart = loadCart();
let activeProductCategory = "All";
let activeServiceCategory = "All";
let activeGalleryCategory = "All";
let lightboxIndex = 0;
let toastTimer;
let currentModalProduct = null;

function loadCart(){
  try { const value = JSON.parse(localStorage.getItem("autovault-cart") || "[]"); return Array.isArray(value) ? value.filter(x => productData.some(p=>p.id===x.id) && Number.isInteger(x.qty) && x.qty>0) : []; }
  catch { return []; }
}
function saveCart(){ try { localStorage.setItem("autovault-cart", JSON.stringify(cart)); } catch { showToast("Cart storage unavailable in this browser."); } }
function showToast(message){ const toast=$("#toast"); toast.textContent=message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove("show"),2600); }
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

function renderServices(){
  const filtered=services.filter(s=>activeServiceCategory==="All"||s.group===activeServiceCategory);
  $("#serviceGrid").innerHTML=filtered.map((s,i)=>`<article class="service-card"><div class="service-image"><img src="${s.image}" alt="${escapeHTML(s.alt)}" loading="lazy"><span class="service-number">${String(services.indexOf(s)+1).padStart(2,"0")}</span></div><div class="service-body"><h3>${escapeHTML(s.name)}</h3><p>${escapeHTML(s.desc)}</p><div class="service-foot"><div><span class="starting">STARTING AT</span><strong class="service-price">${money(s.price)}</strong></div><button class="mini-link" data-book-service="${escapeHTML(s.name)}">Book now ↗</button></div></div></article>`).join("");
}
function renderProducts(){
  const query=$("#productSearch").value.trim().toLowerCase();
  const sort=$("#productSort").value;
  let list=productData.filter(p=>(activeProductCategory==="All"||p.category===activeProductCategory)&&`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(query));
  if(sort==="price-low")list.sort((a,b)=>a.price-b.price);
  if(sort==="price-high")list.sort((a,b)=>b.price-a.price);
  if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
  $("#productGrid").innerHTML=list.length?list.map(p=>`<article class="product-card"><div class="product-image" data-view-product="${p.id}" tabindex="0" role="button" aria-label="View details for ${escapeHTML(p.name)}"><img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy">${p.original>p.price?`<span class="product-badge">${Math.round((1-p.price/p.original)*100)}% OFF</span>`:""} </div><div class="product-body"><span class="product-category">${escapeHTML(p.category)}</span><h3>${escapeHTML(p.name)}</h3><div class="product-prices"><strong>${money(p.price)}</strong>${p.original>p.price?`<del>${money(p.original)}</del>`:""}</div><span class="stock-label ${p.available?"":"out"}">${p.available?"Sample stock available":"Check availability"}</span><div class="product-actions"><button class="btn btn-gold" data-add-cart="${p.id}" ${p.available?"":"disabled"}>Add to cart +</button><button class="btn btn-outline" data-view-product="${p.id}">Details</button></div></div></article>`).join(""):`<div class="empty-results">No accessories match your search. Try another keyword or category.</div>`;
}
function renderProductFilters(){
  const categories=["All",...new Set(productData.map(p=>p.category))];
  $("#productFilters").innerHTML=categories.map(c=>`<button class="chip ${c===activeProductCategory?"active":""}" data-product-filter="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join("");
}
function renderGallery(){
  const list=galleryItems.filter(g=>activeGalleryCategory==="All"||g.category===activeGalleryCategory);
  $("#galleryGrid").innerHTML=list.map(g=>`<button class="gallery-item" type="button" data-gallery-image="${galleryItems.indexOf(g)}" aria-label="Open ${escapeHTML(g.title)} image"><img src="${g.image}" alt="${escapeHTML(g.alt)}" loading="lazy"><span class="gallery-open" aria-hidden="true">↗</span><span class="gallery-overlay"><small>${escapeHTML(g.category.toUpperCase())}</small><strong>${escapeHTML(g.title)}</strong></span></button>`).join("");
}
function renderCart(){
  const count=cart.reduce((sum,line)=>sum+line.qty,0);
  const subtotal=cart.reduce((sum,line)=>sum+productData.find(p=>p.id===line.id).price*line.qty,0);
  $("#cartCount").textContent=count;$("#drawerCartCount").textContent=`(${count})`;$("#cartSubtotal").textContent=money(subtotal);
  $("#cartItems").innerHTML=cart.map(line=>{const p=productData.find(x=>x.id===line.id);return `<div class="cart-line"><img src="${p.image}" alt=""><div><h3>${escapeHTML(p.name)}</h3><span class="cart-line-price">${money(p.price*line.qty)}</span><div class="qty-control"><button data-qty="${p.id}" data-delta="-1" aria-label="Decrease ${escapeHTML(p.name)} quantity">−</button><span>${line.qty}</span><button data-qty="${p.id}" data-delta="1" aria-label="Increase ${escapeHTML(p.name)} quantity">+</button></div></div><button class="remove-item" data-remove-cart="${p.id}" aria-label="Remove ${escapeHTML(p.name)}">×</button></div>`}).join("");
  $("#cartEmpty").classList.toggle("show",cart.length===0);$("#cartBottom").classList.toggle("hidden",cart.length===0);
}
function addToCart(id){const p=productData.find(x=>x.id===Number(id));if(!p||!p.available){showToast("Please contact the studio to check availability.");return;}const line=cart.find(x=>x.id===p.id);if(line)line.qty++;else cart.push({id:p.id,qty:1});saveCart();renderCart();showToast(`${p.name} added to cart.`);}
function changeQty(id,delta){const line=cart.find(x=>x.id===Number(id));if(!line)return;line.qty+=delta;if(line.qty<=0)cart=cart.filter(x=>x.id!==line.id);saveCart();renderCart();}
function removeCart(id){cart=cart.filter(x=>x.id!==Number(id));saveCart();renderCart();showToast("Item removed from cart.");}
function openCart(){ $("#cartOverlay").hidden=false;requestAnimationFrame(()=>$("#cartDrawer").classList.add("open"));$("#cartDrawer").setAttribute("aria-hidden","false");document.body.classList.add("no-scroll");$("#closeCart").focus(); }
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");setTimeout(()=>$("#cartOverlay").hidden=true,300);document.body.classList.remove("no-scroll");$("#openCart").focus(); }
function whatsappURL(message){return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;}
function openWhatsApp(message){if(!/^\d{10,15}$/.test(CONFIG.whatsappNumber)){showToast("Set the business WhatsApp number in script.js first.");return;}window.open(whatsappURL(message),"_blank","noopener,noreferrer");}
function openProductModal(id){const p=productData.find(x=>x.id===Number(id));if(!p)return;currentModalProduct=p;$("#modalImage").src=p.image;$("#modalImage").alt=p.name;$("#modalCategory").textContent=p.category;$("#modalTitle").textContent=p.name;$("#modalDescription").textContent=p.description;$("#modalPrice").textContent=money(p.price);$("#modalStock").textContent=p.available?"Sample stock available — confirm with studio":"Availability needs confirmation";$("#modalStock").classList.toggle("out",!p.available);$("#modalAdd").disabled=!p.available;$("#modalAdd").innerHTML=p.available?'Add to cart <span>＋</span>':'Check availability';$("#productModal").hidden=false;document.body.classList.add("no-scroll");$("#modalAdd").focus();}
function closeProductModal(){if($("#productModal").hidden)return;$("#productModal").hidden=true;document.body.classList.remove("no-scroll");}
function openLightbox(index){lightboxIndex=(index+galleryItems.length)%galleryItems.length;const g=galleryItems[lightboxIndex];$("#lightboxImage").src=g.image;$("#lightboxImage").alt=g.alt;$("#lightboxCaption").textContent=`${g.title} · ${g.category}`;$("#lightbox").hidden=false;document.body.classList.add("no-scroll");$("#lightboxClose").focus();}
function closeLightbox(){if($("#lightbox").hidden)return;$("#lightbox").hidden=true;document.body.classList.remove("no-scroll");}
function moveLightbox(delta){openLightbox(lightboxIndex+delta);}
function setBookingService(service){const select=$("#bookingService");const option=[...select.options].find(o=>o.value===service||o.textContent===service);if(option)select.value=option.value;$("#contact").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});setTimeout(()=>$("#bookingForm").querySelector('[name="name"]').focus({preventScroll:true}),350);}
function initBooking(){
  $("#bookingService").innerHTML='<option value="">Choose a service</option>'+[...services.map(s=>s.name),"Basic Wash Package","Premium Care Package","Ultimate Detailing Package","General Enquiry"].map(s=>`<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join("");
  const today=new Date();$("#bookingDate").min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
  $("#bookingForm").addEventListener("submit",e=>{e.preventDefault();const form=e.currentTarget;const error=$("#formError");error.textContent="";if(!form.reportValidity()){error.textContent="Please complete the required fields and check your entries.";return;}const data=Object.fromEntries(new FormData(form).entries());const digits=data.phone.replace(/\D/g,"");if(digits.length<10||digits.length>15){error.textContent="Please enter a valid phone number with 10–15 digits.";form.phone.focus();return;}if(data.date<$("#bookingDate").min){error.textContent="Please select today or a future date.";return;}
    const message=`Hello ${CONFIG.businessName}, I'd like to request an appointment.\n\nName: ${data.name}\nPhone: ${data.phone}\nVehicle: ${data.vehicle}\nVehicle type: ${data.vehicleType}\nService: ${data.service}\nPreferred date: ${data.date}\nPreferred time: ${data.time}\nAdditional requirements: ${data.notes||"None"}\n\nPlease confirm availability. I understand this request is not confirmed until your team acknowledges it.`;
    openWhatsApp(message);
  });
}
function initComparison(){const slider=$("#compareSlider"),before=$("#beforeWrap"),handle=$("#compareHandle");const update=()=>{before.style.width=`${slider.value}%`;handle.style.left=`${slider.value}%`;before.querySelector("img").style.width=`${10000/slider.value||20000}%`;};slider.addEventListener("input",()=>{before.style.width=`${slider.value}%`;handle.style.left=`${slider.value}%`;before.querySelector("img").style.width=`${$("#compareStage").clientWidth}px`;});before.querySelector("img").style.width=`${$("#compareStage").clientWidth}px`;window.addEventListener("resize",()=>before.querySelector("img").style.width=`${$("#compareStage").clientWidth}px`);update();}
function initNavigation(){
  const toggle=$("#menuToggle"),nav=$("#primaryNav");
  toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");});
  $$(".nav-link").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
  const sections=["home","services","accessories","gallery","pricing","about","contact"].map(id=>document.getElementById(id)).filter(Boolean);
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){$$(".nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${entry.target.id}`));}}),{rootMargin:"-35% 0px -55% 0px"});sections.forEach(s=>observer.observe(s));
  $("#backToTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}));
  window.addEventListener("scroll",()=>$("#backToTop").classList.toggle("visible",window.scrollY>500),{passive:true});
}
function initReveal(){if(!("IntersectionObserver" in window)){$$(".reveal").forEach(el=>el.classList.add("in-view"));return;}const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");observer.unobserve(e.target);}}),{threshold:.12});$$(".reveal").forEach(el=>observer.observe(el));}
function initEvents(){
  $("#serviceGrid").addEventListener("click",e=>{const b=e.target.closest("[data-book-service]");if(b)setBookingService(b.dataset.bookService);});
  $$(".service-filters [data-service-filter]").forEach(b=>b.addEventListener("click",()=>{activeServiceCategory=b.dataset.serviceFilter;$$(".service-filters .chip").forEach(x=>x.classList.toggle("active",x===b));renderServices();}));
  $("#productFilters").addEventListener("click",e=>{const b=e.target.closest("[data-product-filter]");if(!b)return;activeProductCategory=b.dataset.productFilter;renderProductFilters();renderProducts();});
  $("#productSearch").addEventListener("input",renderProducts);$("#productSort").addEventListener("change",renderProducts);
  $("#productGrid").addEventListener("click",e=>{const add=e.target.closest("[data-add-cart]"),view=e.target.closest("[data-view-product]");if(add)addToCart(add.dataset.addCart);else if(view)openProductModal(view.dataset.viewProduct);});
  $("#productGrid").addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-view-product]")){e.preventDefault();openProductModal(e.target.dataset.viewProduct);}});
  $$(".gallery-filters [data-gallery-filter]").forEach(b=>b.addEventListener("click",()=>{activeGalleryCategory=b.dataset.galleryFilter;$$(".gallery-filters .chip").forEach(x=>x.classList.toggle("active",x===b));renderGallery();}));
  $("#galleryGrid").addEventListener("click",e=>{const b=e.target.closest("[data-gallery-image]");if(b)openLightbox(Number(b.dataset.galleryImage));});
  $("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#cartOverlay").addEventListener("click",closeCart);$("#continueShopping").addEventListener("click",()=>{closeCart();$("#accessories").scrollIntoView({behavior:"smooth"});});
  $("#cartItems").addEventListener("click",e=>{const q=e.target.closest("[data-qty]"),r=e.target.closest("[data-remove-cart]");if(q)changeQty(q.dataset.qty,Number(q.dataset.delta));if(r)removeCart(r.dataset.removeCart);});
  $("#checkoutButton").addEventListener("click",()=>{if(!cart.length)return;const lines=cart.map(line=>{const p=productData.find(x=>x.id===line.id);return `• ${p.name} × ${line.qty} — ${money(p.price*line.qty)}`;});const subtotal=cart.reduce((sum,line)=>sum+productData.find(p=>p.id===line.id).price*line.qty,0);openWhatsApp(`Hello ${CONFIG.businessName}, I'd like to enquire about this accessory order:\n\n${lines.join("\n")}\n\nSubtotal: ${money(subtotal)}\n\nPlease confirm stock, fitment, delivery/pick-up options and final total. I understand no payment has been taken on this website.`);});
  $("#modalAdd").addEventListener("click",()=>{if(currentModalProduct){addToCart(currentModalProduct.id);closeProductModal();}});
  $$("[data-close-modal]").forEach(el=>el.addEventListener("click",closeProductModal));$("#lightboxClose").addEventListener("click",closeLightbox);$("#lightboxPrev").addEventListener("click",()=>moveLightbox(-1));$("#lightboxNext").addEventListener("click",()=>moveLightbox(1));
  $$("[data-book-service]").forEach(b=>b.addEventListener("click",()=>setBookingService(b.dataset.bookService)));
  const waMsg=`Hello ${CONFIG.businessName}, I'd like to enquire about your car detailing and accessories services.`;const wa=whatsappURL(waMsg);$("#contactWhatsApp").href=wa;$("#floatingWhatsApp").addEventListener("click",()=>openWhatsApp(waMsg));$("#footerInstagram").href=CONFIG.instagramUrl;
  $("#year").textContent=new Date().getFullYear();
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeProductModal();closeLightbox();$("#primaryNav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");}if(!$("#lightbox").hidden&&e.key==="ArrowLeft")moveLightbox(-1);if(!$("#lightbox").hidden&&e.key==="ArrowRight")moveLightbox(1);});
}

renderServices();renderProductFilters();renderProducts();renderGallery();renderCart();initBooking();initNavigation();initReveal();initComparison();initEvents();

window.$crisp=[];
window.CRISP_WEBSITE_ID="a09e3c06-e275-47dc-91d6-d4e45bf99bcd";

(function(){
	d=document;
	s=d.createElement("script");
	s.src="https://client.crisp.chat/l.js";
	s.async=1;
	d.getElementsByTagName("head")[0].appendChild(s);
})();

function ClosePage() {
	window.close();
	document.close();
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwOi7chKubwmJwydH1SZ4e5GvIx9-LNa7L4CLxIGGIFHUkDjN43p4__G_UWD4AHvHi_Pg/exec' 
const form = document.forms['formDaftar'];
const kirim = document.querySelector('#kirim');
const alertUser = document.querySelector('#alertuser');

form.addEventListener('submit', e => {
	e.preventDefault();
	fetch(scriptURL, { 
	 	method: 'POST', body: new FormData(form)
	})
	.then(response => { 
	 	console.log('Success!', response);
	 	alertUser.innerHTML='SELAMAT! Formulir Pendaftaran Anda telah terkirim. Terima Kasih';
	 	alertUser.style.backgroundColor='lightblue';
	 	alertUser.style.color='darkgreen';
	 	})

	.catch(error => console.error('Error!', error.message))
})

function ShowBar() {
	const SideMenu = document.querySelector('#sidebar');
	SideMenu.style.right ='10px';
	SideMenu.style.transition ='1s';	
}

function HideBar() {
	const SideMenu = document.querySelector('#sidebar');
	SideMenu.style.right='-300px';
	SideMenu.style.transition ='1s';		
}
